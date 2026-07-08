import os
import traceback

from fastapi import APIRouter, UploadFile, File
from fastapi.responses import JSONResponse

from models import AnalyzeImageResponse

router = APIRouter(prefix="/api", tags=["vision"])

VISION_SYSTEM_PROMPT = """
You are an Environmental Waste Assessment Officer for an Indian Urban Local Body.

Analyze the uploaded waste image and return structured operational information.

RULES:
1. Analyze ONLY what is visibly present in the image. Never invent details.
2. If the image does not contain a waste-related scene, set fields to "Cannot determine" and priority_score to 0.
3. Do NOT identify or describe any people visible in the image.
4. Do NOT speculate on causes or sources not visible.

Estimate each field based on visible evidence:

- waste_type: One of: "Mixed Waste", "Plastic Waste", "Organic Waste", "Construction Debris", "E-waste", "Biomedical Waste", "Green Waste", "Cannot determine"
- hazard_level: "Low", "Medium", "High", "Critical", or "Cannot determine"
- estimated_volume: "Small" (bag-level), "Medium" (bin-level), "Large" (pile-level), "Very Large" (dump-level), or "Cannot determine"
- priority_score: Integer 0–100. 0 = cannot determine. 1–25 = low urgency. 26–50 = medium. 51–75 = high. 76–100 = critical.
- public_health_risk: "Low", "Medium", "High", or "Cannot determine"
- environmental_risk: "Low", "Medium", "High", or "Cannot determine"
- recommended_workers: Number of workers needed based on volume and spread
- recommended_vehicle: "Compactor", "Auto Tipper", "Mini Truck", "Dumper", or "Cannot determine"
- estimated_cleanup_time: Estimated time estimate (e.g. "30 minutes", "2 hours", "4+ hours") or "Cannot determine"
- reasoning: Array of 3-5 sentences explaining visual evidence, confidence, and operational notes.

Return ONLY valid JSON. No markdown. No code fences. No preamble.

Schema:
{
  "waste_type": "...",
  "hazard_level": "...",
  "estimated_volume": "...",
  "priority_score": 0,
  "public_health_risk": "...",
  "environmental_risk": "...",
  "recommended_workers": 0,
  "recommended_vehicle": "...",
  "estimated_cleanup_time": "...",
  "reasoning": ["...", "...", "..."]
}
"""

MODEL_NAME = "gemini-2.5-flash"


@router.post("/analyze-image", response_model=AnalyzeImageResponse)
async def analyze_image(file: UploadFile = File(...)) -> AnalyzeImageResponse | JSONResponse:
    try:
        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            return JSONResponse(
                status_code=500,
                content={"message": "Gemini API key not found."},
            )

        image_bytes = await file.read()
        mime_type = file.content_type or "image/jpeg"

        from google import genai
        from google.genai import types

        image_part = types.Part.from_bytes(
            data=image_bytes,
            mime_type=mime_type,
        )

        client = genai.Client(api_key=api_key)

        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=[
                image_part,
                "Analyze this waste image and return structured operational data following the system prompt schema exactly.",
            ],
            config=types.GenerateContentConfig(
                system_instruction=VISION_SYSTEM_PROMPT,
                response_mime_type="application/json",
                temperature=0.2,
            ),
        )

        return AnalyzeImageResponse.model_validate_json(response.text or "")

    except Exception as exc:
        traceback.print_exc()
        print(type(exc).__name__)
        print(str(exc))
        return JSONResponse(
            status_code=500,
            content={"message": "Unable to analyze image."},
        )

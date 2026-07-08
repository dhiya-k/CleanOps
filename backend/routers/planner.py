import traceback
from fastapi import APIRouter
from fastapi.responses import JSONResponse

from gemini_planner import generate_plan_with_gemini
from models import GeneratePlanRequest, GeneratePlanResponse

router = APIRouter(prefix="/api", tags=["planner"])


@router.post("/generate-plan", response_model=GeneratePlanResponse)
def generate_plan(request: GeneratePlanRequest) -> GeneratePlanResponse | JSONResponse:
    try:
        return generate_plan_with_gemini(request)
    except Exception as exc:
        traceback.print_exc()
        print(type(exc).__name__)
        print(str(exc))
        return JSONResponse(
            status_code=500,
            content={"message": "Unable to generate operational plan."},
        )

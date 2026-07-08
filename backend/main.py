import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from routers.planner import router as planner_router
from routers.vision import router as vision_router

load_dotenv()

print(f"Current working directory: {os.getcwd()}")
gemini_api_key_found = "GEMINI_API_KEY" in os.environ
print(f"GEMINI_API_KEY found: {gemini_api_key_found}")

app = FastAPI(title="CleanOps AI Gemini Planner API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(planner_router)
app.include_router(vision_router)


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}

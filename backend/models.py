from pydantic import BaseModel, Field


class WeatherRequest(BaseModel):
    condition: str
    temperature: int


class ResourcesRequest(BaseModel):
    available_trucks: int
    available_workers: int


class ComplaintRequest(BaseModel):
    id: int | str
    priority: str
    location: str


class GeneratePlanRequest(BaseModel):
    weather: WeatherRequest
    resources: ResourcesRequest
    complaints: list[ComplaintRequest]
    operations_brief: str = Field(..., min_length=1)
    language: str


class RecommendedStrategy(BaseModel):
    name: str
    confidence: int
    reason: list[str]


class StrategyComparisonItem(BaseModel):
    strategy: str
    complaints: int
    travel: str
    critical: int
    fuel: str


class WorkPlanItem(BaseModel):
    crew: str
    vehicle: str
    cluster: str
    complaints: int
    eta: str


class GeneratePlanResponse(BaseModel):
    recommended_strategy: RecommendedStrategy
    comparison: list[StrategyComparisonItem]
    workplan: list[WorkPlanItem]


class AnalyzeImageResponse(BaseModel):
    waste_type: str
    hazard_level: str
    estimated_volume: str
    priority_score: int
    public_health_risk: str
    environmental_risk: str
    recommended_workers: int
    recommended_vehicle: str
    estimated_cleanup_time: str
    reasoning: list[str]

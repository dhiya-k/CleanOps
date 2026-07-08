export type GeneratePlanRequest = {
  weather: {
    condition: string;
    temperature: number;
  };
  resources: {
    available_trucks: number;
    available_workers: number;
  };
  complaints: Array<{
    id: string | number;
    priority: string;
    location: string;
  }>;
  operations_brief: string;
  language: string;
};

export type GeneratePlanResponse = {
  recommended_strategy: {
    name: string;
    confidence: number;
    reason: string[];
  };
  comparison: Array<{
    strategy: string;
    complaints: number;
    travel: string;
    critical: number;
    fuel: string;
  }>;
  workplan: Array<{
    crew: string;
    vehicle: string;
    cluster: string;
    complaints: number;
    eta: string;
  }>;
};

export type AnalyzeImageResponse = {
  waste_type: string;
  hazard_level: string;
  estimated_volume: string;
  priority_score: number;
  public_health_risk: string;
  environmental_risk: string;
  recommended_workers: number;
  recommended_vehicle: string;
  estimated_cleanup_time: string;
  reasoning: string[];
};

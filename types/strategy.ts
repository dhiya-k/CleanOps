export type Strategy = {
  id: string;
  name: string;
  complaintsCleared: number;
  travelDistance: string;
  criticalIncidents: number;
  fuelUsage: string;
  bestUseCase: string;
  recommended?: boolean;
};

export type StrategyRecommendationData = {
  title: string;
  strategyName: string;
  reasons: string[];
  expectedResults: string[];
};

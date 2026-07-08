import type { Strategy, StrategyRecommendationData } from "@/types/strategy";

export const strategyRecommendation: StrategyRecommendationData = {
  title: "Recommended Strategy",
  strategyName: "Cluster-Based Priority Planning",
  reasons: [
    "Heavy rainfall expected after 2 PM",
    "Four dense complaint clusters need early coverage",
    "Five trucks are available for morning deployment"
  ],
  expectedResults: ["26 complaints resolved", "31% less travel", "Critical incidents handled first"]
};

export const strategies: Strategy[] = [
  {
    id: "STR-01",
    name: "AI Recommended",
    complaintsCleared: 26,
    travelDistance: "42 km",
    criticalIncidents: 6,
    fuelUsage: "Low",
    bestUseCase: "Dense complaint clusters",
    recommended: true
  },
  {
    id: "STR-02",
    name: "Cluster-Based",
    complaintsCleared: 24,
    travelDistance: "48 km",
    criticalIncidents: 5,
    fuelUsage: "Medium",
    bestUseCase: "Nearby ward coverage"
  },
  {
    id: "STR-03",
    name: "Risk-Based",
    complaintsCleared: 19,
    travelDistance: "58 km",
    criticalIncidents: 7,
    fuelUsage: "Medium",
    bestUseCase: "High hazard response"
  },
  {
    id: "STR-04",
    name: "Locality-Based",
    complaintsCleared: 21,
    travelDistance: "64 km",
    criticalIncidents: 4,
    fuelUsage: "High",
    bestUseCase: "Administrative ward routing"
  }
];

import type { Strategy, StrategyRecommendationData } from "@/types/strategy";

export const strategyRecommendation: StrategyRecommendationData = {
  title: "Recommended Strategy",
  strategyName: "Risk-Based Planning",
  reasons: [
    "Heavy rainfall expected after 2 PM — flood-prone wards need priority coverage",
    "Four dense complaint clusters, two near sensitive locations (school & hospital)",
    "Five trucks available for morning deployment before rain intensifies",
  ],
  expectedResults: ["28 complaints resolved", "35% less travel distance", "Critical incidents handled within 90 minutes"]
};

export const strategies: Strategy[] = [
  {
    id: "STR-01",
    name: "Risk-Based Planning",
    complaintsCleared: 28,
    travelDistance: "38 km",
    criticalIncidents: 7,
    fuelUsage: "Low",
    bestUseCase: "Weather-sensitive operations & hazard response",
    recommended: true
  },
  {
    id: "STR-02",
    name: "Cluster-Based Planning",
    complaintsCleared: 26,
    travelDistance: "42 km",
    criticalIncidents: 5,
    fuelUsage: "Medium",
    bestUseCase: "Dense complaint clusters"
  },
  {
    id: "STR-03",
    name: "Locality-Based Planning",
    complaintsCleared: 22,
    travelDistance: "54 km",
    criticalIncidents: 4,
    fuelUsage: "High",
    bestUseCase: "Ward-level administrative reporting"
  }
];

export type Resource = {
  id: string;
  name: string;
  available: number;
  total: number;
  status: "Healthy" | "Limited" | "Attention";
};

export type ResourceOverview = {
  availableTrucks: number;
  totalTrucks: number;
  availableWorkers: number;
  totalWorkers: number;
};

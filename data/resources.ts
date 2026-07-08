import type { Resource, ResourceOverview } from "@/types/resource";

export const resourceOverview: ResourceOverview = {
  availableTrucks: 5,
  totalTrucks: 8,
  availableWorkers: 42,
  totalWorkers: 56
};

export const resources: Resource[] = [
  {
    id: "RES-01",
    name: "Collection Trucks",
    available: 5,
    total: 8,
    status: "Limited"
  },
  {
    id: "RES-02",
    name: "Field Workers",
    available: 42,
    total: 56,
    status: "Healthy"
  },
  {
    id: "RES-03",
    name: "Street Sweepers",
    available: 6,
    total: 7,
    status: "Healthy"
  }
];

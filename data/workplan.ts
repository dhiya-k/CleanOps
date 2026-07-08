import type { Crew, WorkCluster, WorkPlanSummaryItem } from "@/types/workplan";

export const workPlanSummary: WorkPlanSummaryItem[] = [
  { label: "Today's Clusters", value: "4", caption: "Priority operating zones" },
  { label: "Workers Assigned", value: "38", caption: "Across active crews" },
  { label: "Vehicles Assigned", value: "5", caption: "Collection trucks" },
  { label: "Estimated Completion", value: "6:30 PM", caption: "Placeholder schedule" }
];

export const crews: Crew[] = [
  {
    id: "CREW-01",
    name: "Crew 1",
    vehicle: "Truck KA-01-4582",
    assignedCluster: "City Market Cluster",
    complaints: 8,
    estimatedTime: "3h 20m",
    priority: "High",
    status: "Ready"
  },
  {
    id: "CREW-02",
    name: "Crew 2",
    vehicle: "Truck KA-01-7731",
    assignedCluster: "Station Avenue Cluster",
    complaints: 7,
    estimatedTime: "3h 45m",
    priority: "Critical",
    status: "Assigned"
  },
  {
    id: "CREW-03",
    name: "Crew 3",
    vehicle: "Truck KA-02-1120",
    assignedCluster: "Lake View Cluster",
    complaints: 5,
    estimatedTime: "2h 40m",
    priority: "Medium",
    status: "Ready"
  },
  {
    id: "CREW-04",
    name: "Crew 4",
    vehicle: "Truck KA-03-9088",
    assignedCluster: "Nehru School Cluster",
    complaints: 6,
    estimatedTime: "3h 10m",
    priority: "High",
    status: "Assigned"
  }
];

export const clusters: WorkCluster[] = [
  { id: "CL-01", name: "City Market Cluster", area: "Ward 12 commercial streets", priority: "High" },
  { id: "CL-02", name: "Station Avenue Cluster", area: "Ward 03 transit corridor", priority: "Critical" },
  { id: "CL-03", name: "Lake View Cluster", area: "Ward 08 residential blocks", priority: "Medium" },
  { id: "CL-04", name: "Nehru School Cluster", area: "Ward 15 school approach roads", priority: "High" }
];

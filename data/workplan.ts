import type { Crew, WorkCluster, WorkPlanSummaryItem } from "@/types/workplan";

export const workPlanSummary: WorkPlanSummaryItem[] = [
  { label: "Today's Clusters", value: "4", caption: "Priority operating zones across Bengaluru" },
  { label: "Workers Assigned", value: "38", caption: "Across 4 active crews" },
  { label: "Vehicles Deployed", value: "5", caption: "Compactors, tippers & mini trucks" },
  { label: "Est. Completion", value: "6:30 PM", caption: "Before night shift handover" }
];

export const crews: Crew[] = [
  {
    id: "CREW-01",
    name: "Crew Alpha",
    vehicle: "Compactor — KA-01-4582",
    assignedCluster: "City Market Cluster",
    complaints: 8,
    estimatedTime: "3h 20m",
    priority: "High",
    status: "Deployed"
  },
  {
    id: "CREW-02",
    name: "Crew Beta",
    vehicle: "Auto Tipper — KA-01-7731",
    assignedCluster: "Station Avenue Cluster",
    complaints: 7,
    estimatedTime: "3h 45m",
    priority: "Critical",
    status: "En Route"
  },
  {
    id: "CREW-03",
    name: "Crew Gamma",
    vehicle: "Mini Truck — KA-02-1120",
    assignedCluster: "Jayanagar Lake View Cluster",
    complaints: 5,
    estimatedTime: "2h 40m",
    priority: "Medium",
    status: "Standing By"
  },
  {
    id: "CREW-04",
    name: "Crew Delta",
    vehicle: "Compactor — KA-03-9088",
    assignedCluster: "RT Nagar School Cluster",
    complaints: 6,
    estimatedTime: "3h 10m",
    priority: "High",
    status: "Deployed"
  }
];

export const clusters: WorkCluster[] = [
  { id: "CL-01", name: "City Market Cluster", area: "Ward 12 — KR Market, Albert Victor Road, RV Road", priority: "High" },
  { id: "CL-02", name: "Station Avenue Cluster", area: "Ward 03 — Majestic, KSR Station, Dharam Singh Layout", priority: "Critical" },
  { id: "CL-03", name: "Jayanagar Lake View Cluster", area: "Ward 08 — 11th Main, Ragigudda, Lake View Colony", priority: "Medium" },
  { id: "CL-04", name: "RT Nagar School Cluster", area: "Ward 15 — Nehru School Road, HMT Layout, BEL Circle", priority: "High" }
];

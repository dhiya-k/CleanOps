export type Crew = {
  id: string;
  name: string;
  vehicle: string;
  assignedCluster: string;
  complaints: number;
  estimatedTime: string;
  priority: string;
  status: string;
};

export type WorkCluster = {
  id: string;
  name: string;
  area: string;
  priority: string;
};

export type WorkPlanSummaryItem = {
  label: string;
  value: string;
  caption: string;
};

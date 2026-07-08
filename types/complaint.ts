export type ComplaintSeverity = "Low" | "Medium" | "High" | "Critical";
export type ComplaintStatus = "Open" | "In Review" | "Assigned" | "Resolved";

export type Complaint = {
  id: string;
  title: string;
  ward: string;
  location: string;
  priority: ComplaintSeverity;
  status: ComplaintStatus;
  description: string;
  estimatedWasteVolume: string;
  hazardLevel: string;
  reportedAt: string;
};

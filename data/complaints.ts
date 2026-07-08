import type { Complaint } from "@/types/complaint";

export const complaints: Complaint[] = [
  {
    id: "CMP-1024",
    title: "Overflowing roadside bin",
    ward: "Ward 12",
    location: "City Market Road",
    priority: "High",
    status: "Open",
    description: "Resident reported an overflowing waste bin near the main bus stop and produce market entrance.",
    estimatedWasteVolume: "1.8 tons",
    hazardLevel: "Medium",
    reportedAt: "Today, 08:30"
  },
  {
    id: "CMP-1025",
    title: "Street sweeping required",
    ward: "Ward 08",
    location: "Lake View Colony",
    priority: "Medium",
    status: "Assigned",
    description: "Dust, leaf litter, and scattered debris reported along the residential lane.",
    estimatedWasteVolume: "0.6 tons",
    hazardLevel: "Low",
    reportedAt: "Today, 09:15"
  },
  {
    id: "CMP-1026",
    title: "Drain blockage",
    ward: "Ward 03",
    location: "Station Avenue",
    priority: "Critical",
    status: "In Review",
    description: "Blocked storm drain reported after overnight rainfall near a pedestrian crossing.",
    estimatedWasteVolume: "2.4 tons",
    hazardLevel: "High",
    reportedAt: "Today, 10:05"
  },
  {
    id: "CMP-1027",
    title: "Garbage pile near school",
    ward: "Ward 15",
    location: "Nehru School Lane",
    priority: "High",
    status: "Open",
    description: "Mixed dry waste accumulated near the school boundary wall.",
    estimatedWasteVolume: "1.2 tons",
    hazardLevel: "Medium",
    reportedAt: "Today, 10:40"
  },
  {
    id: "CMP-1028",
    title: "Construction debris",
    ward: "Ward 06",
    location: "Ring Road Service Lane",
    priority: "Medium",
    status: "Assigned",
    description: "Construction debris obstructing part of the service road shoulder.",
    estimatedWasteVolume: "3.1 tons",
    hazardLevel: "Medium",
    reportedAt: "Today, 11:10"
  },
  {
    id: "CMP-1029",
    title: "Public bin damaged",
    ward: "Ward 10",
    location: "Civic Park Gate",
    priority: "Low",
    status: "Resolved",
    description: "Damaged bin reported at a park entrance with minor spillage nearby.",
    estimatedWasteVolume: "0.3 tons",
    hazardLevel: "Low",
    reportedAt: "Today, 11:25"
  }
];

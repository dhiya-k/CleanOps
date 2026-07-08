import type { Complaint } from "@/types/complaint";

export const complaints: Complaint[] = [
  {
    id: "CMP-1024",
    title: "Overflowing roadside bin, KR Market",
    ward: "Ward 12 — Chamarajpet",
    location: "KR Market Junction, Albert Victor Road",
    priority: "High",
    status: "Open",
    description: "Overflowing municipal waste bin reported near the main bus stop and produce market entrance. Waste has spilled onto the footpath, obstructing pedestrian movement.",
    estimatedWasteVolume: "1.8 tons",
    hazardLevel: "Medium",
    reportedAt: "Today, 08:30"
  },
  {
    id: "CMP-1025",
    title: "Street sweeping required, Jayanagar 4th Block",
    ward: "Ward 08 — Jayanagar",
    location: "11th Main Road, Jayanagar 4th Block",
    priority: "Medium",
    status: "Assigned",
    description: "Dust, dried leaf litter, and scattered debris reported along the residential lane near Ragigudda Temple approach road.",
    estimatedWasteVolume: "0.6 tons",
    hazardLevel: "Low",
    reportedAt: "Today, 09:15"
  },
  {
    id: "CMP-1026",
    title: "Drain blockage, Majestic Station Road",
    ward: "Ward 03 — Dharam Singh Layout",
    location: "Station Avenue, Opp. KSR Railway Station",
    priority: "Critical",
    status: "In Review",
    description: "Storm drain blocked after overnight rainfall near the pedestrian underpass. Waterlogging reported up to 6 inches on the service road.",
    estimatedWasteVolume: "2.4 tons",
    hazardLevel: "High",
    reportedAt: "Today, 10:05"
  },
  {
    id: "CMP-1027",
    title: "Garbage pile near school, RT Nagar",
    ward: "Ward 15 — RT Nagar",
    location: "Nehru School Road, HMT Layout",
    priority: "High",
    status: "Open",
    description: "Mixed dry waste and food waste accumulated near the school boundary wall. Risk of stray animals and odor reported by parents.",
    estimatedWasteVolume: "1.2 tons",
    hazardLevel: "Medium",
    reportedAt: "Today, 10:40"
  },
  {
    id: "CMP-1028",
    title: "Construction debris, Outer Ring Road",
    ward: "Ward 06 — Marathahalli",
    location: "ORR Service Road, Near Marathahalli Bridge",
    priority: "Medium",
    status: "Assigned",
    description: "Construction debris including broken bricks, concrete slabs, and sand pile obstructing part of the ORR service lane shoulder.",
    estimatedWasteVolume: "3.1 tons",
    hazardLevel: "Medium",
    reportedAt: "Today, 11:10"
  },
  {
    id: "CMP-1029",
    title: "Damaged public bin, Cubbon Park",
    ward: "Ward 10 — Shivajinagar",
    location: "Cubbon Park Main Gate, Kasturba Road",
    priority: "Low",
    status: "Resolved",
    description: "Galvanised steel dustbin damaged by vehicle impact near park entrance. Minor spillage cleared by park maintenance staff.",
    estimatedWasteVolume: "0.3 tons",
    hazardLevel: "Low",
    reportedAt: "Today, 11:25"
  }
];

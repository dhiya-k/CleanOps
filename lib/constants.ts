import {
  BarChart3,
  Bot,
  ClipboardList,
  FileText,
  Settings
} from "lucide-react";

export const APP_NAME = "CleanOps AI";
export const APP_TAGLINE = "AI Municipal Operations Copilot";

export const sidebarItems = [
  { title: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { title: "Complaints", href: "/complaints", icon: FileText },
  { title: "AI Copilot", href: "/copilot", icon: Bot },
  { title: "Work Plan", href: "/workplan", icon: ClipboardList },
  { title: "Settings", href: "#", icon: Settings }
];

export const languages = ["English", "Kannada"];

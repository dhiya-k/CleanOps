import {
  BarChart3,
  Bot,
  ClipboardList,
  FileText,
  Sparkles
} from "lucide-react";

export const APP_NAME = "CleanOps AI";
export const APP_TAGLINE = "AI Municipal Operations Copilot";

export const sidebarItems = [
  { title: "Dashboard", href: "/dashboard", icon: BarChart3 },
  { title: "Complaints", href: "/complaints", icon: FileText },
  { title: "AI Copilot", href: "/copilot", icon: Bot, emphasised: true },
  { title: "Work Plan", href: "/workplan", icon: ClipboardList },
];

export const languages = [
  "English",
  "ಕನ್ನಡ",
  "हिन्दी",
  "தமிழ்",
  "తెలుగు",
  "മലയാളം",
];

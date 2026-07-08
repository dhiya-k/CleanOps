"use client";

import type { ReactNode } from "react";
import { SidebarProvider } from "@/components/layout/SidebarContext";
import { Sidebar } from "@/components/layout/Sidebar";
import { Topbar } from "@/components/layout/Topbar";

export function DashboardShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1 transition-all duration-300 ease-in-out">
          <Topbar />
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
}

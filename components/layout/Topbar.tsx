"use client";

import { Bell, Building2, ChevronDown, Menu } from "lucide-react";

import { useSidebar } from "@/components/layout/SidebarContext";
import { Button } from "@/components/ui/button";
import { APP_NAME, APP_TAGLINE } from "@/lib/constants";

export function Topbar() {
  const { toggle } = useSidebar();

  return (
    <header className="sticky top-0 z-20 border-b bg-background/92 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="size-10 px-0"
            aria-label="Toggle sidebar"
            onClick={toggle}
          >
            <Menu className="size-5" />
          </Button>
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground lg:hidden">
            <Building2 className="size-5" />
          </div>
          <div>
            <p className="font-semibold">{APP_NAME}</p>
            <p className="text-xs text-muted-foreground">{APP_TAGLINE}</p>
          </div>
        </div>

        <div className="order-3 grid w-full grid-cols-1 gap-2 sm:grid-cols-3 lg:order-none lg:w-auto">
          {["Karnataka", "Bengaluru", "East Zone Office"].map((item) => (
            <button
              key={item}
              className="flex h-10 items-center justify-between gap-3 rounded-md border bg-card px-3 text-sm text-muted-foreground shadow-sm transition-colors hover:bg-muted"
            >
              <span>{item}</span>
              <ChevronDown className="size-4" />
            </button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Button variant="outline" className="size-10 px-0" aria-label="Notifications">
            <Bell className="size-5" />
          </Button>
          <div className="hidden items-center gap-3 rounded-lg border bg-card px-3 py-2 shadow-sm sm:flex">
            <div className="flex size-8 items-center justify-center rounded-full bg-success/10 text-sm font-semibold text-success">
              OD
            </div>
            <div>
              <p className="text-sm font-medium">Operations Desk</p>
              <p className="text-xs text-muted-foreground">Officer Profile</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2, Sparkles } from "lucide-react";

import { useSidebar } from "@/components/layout/SidebarContext";
import { APP_NAME, APP_TAGLINE, sidebarItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const { collapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "hidden min-h-screen shrink-0 border-r bg-card lg:flex lg:flex-col",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-[4.5rem] px-3" : "w-72 px-5"
      )}
    >
      {/* Logo */}
      <Link
        href="/dashboard"
        className={cn(
          "flex items-center gap-3 py-6",
          collapsed && "justify-center"
        )}
      >
        <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Building2 className="size-6" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <p className="truncate font-semibold">{APP_NAME}</p>
            <p className="truncate text-xs text-muted-foreground">{APP_TAGLINE}</p>
          </div>
        )}
      </Link>

      {/* Navigation */}
      <nav className={cn("space-y-1", collapsed && "mt-2")}>
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = pathname.startsWith(item.href);

          return (
            <Link
              key={item.title}
              href={item.href}
              title={collapsed ? item.title : undefined}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                collapsed && "justify-center px-0",
                item.emphasised
                  ? "text-primary border border-primary/30 bg-primary/5"
                  : "text-muted-foreground",
                active && !item.emphasised && "bg-primary/10 text-primary",
                active && item.emphasised && "bg-primary/15 text-primary border-primary/50 shadow-sm"
              )}
            >
              <Icon className="size-5 shrink-0" />
              {!collapsed && (
                <>
                  <span className="truncate">{item.title}</span>
                  {item.emphasised && (
                    <Sparkles className="ml-auto size-4 shrink-0 text-warning" />
                  )}
                </>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

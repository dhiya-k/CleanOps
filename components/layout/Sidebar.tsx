"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Building2 } from "lucide-react";

import { APP_NAME, APP_TAGLINE, sidebarItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 border-r bg-card px-5 py-6 lg:block">
      <Link href="/dashboard" className="mb-10 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Building2 className="size-6" />
        </div>
        <div>
          <p className="font-semibold">{APP_NAME}</p>
          <p className="text-xs text-muted-foreground">{APP_TAGLINE}</p>
        </div>
      </Link>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const active = item.href !== "#" && pathname.startsWith(item.href);

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors",
                active && "bg-primary/10 text-primary",
                item.href === "#" && "pointer-events-none opacity-60"
              )}
            >
              <Icon className="size-5" />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

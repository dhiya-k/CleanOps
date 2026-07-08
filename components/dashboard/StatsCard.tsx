import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type Trend = {
  direction: "up" | "down";
  value: string;
};

type StatsCardProps = {
  title: string;
  value: string;
  caption: string;
  icon: LucideIcon;
  trend?: Trend;
  warning?: boolean;
};

export function StatsCard({ title, value, caption, icon: Icon, trend, warning }: StatsCardProps) {
  return (
    <Card className={`transition-all hover:-translate-y-0.5 hover:shadow-soft ${warning ? "border-warning/30" : ""}`}>
      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-semibold">{value}</p>
          <div className="flex items-center gap-2">
            {trend ? (
              <span className={`inline-flex items-center gap-1 text-xs ${trend.direction === "up" ? "text-success" : trend.direction === "down" ? "text-danger" : "text-muted-foreground"}`}>
                {trend.direction === "up" ? (
                  <TrendingUp className="size-3" />
                ) : (
                  <TrendingDown className="size-3" />
                )}
                {trend.value}
              </span>
            ) : null}
            {warning ? (
              <span className="inline-flex items-center gap-1 text-xs text-warning">
                <AlertTriangle className="size-3" />
                Action advised
              </span>
            ) : null}
          </div>
        </div>
        <div className={`flex size-12 items-center justify-center rounded-lg ${warning ? "bg-warning/10 text-warning" : "bg-primary/10 text-primary"}`}>
          <Icon className="size-6" />
        </div>
      </CardContent>
    </Card>
  );
}

import Link from "next/link";
import { AlertTriangle, ArrowRight, CloudRain, FileText, Truck, Users } from "lucide-react";

import { ComplaintMap } from "@/components/dashboard/ComplaintMap";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { complaints } from "@/data/complaints";
import { resourceOverview } from "@/data/resources";
import { weather } from "@/data/weather";

export default function DashboardPage() {
  return (
    <PageContainer
      title="Operations Dashboard"
      description="Real-time municipal operations overview — Bengaluru."
    >
      {/* AI Alert Banner */}
      <section>
        <div className="flex flex-col gap-4 rounded-lg border-2 border-warning/40 bg-warning/5 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 size-5 shrink-0 text-warning" />
            <div>
              <p className="text-sm font-semibold text-foreground">⚠ AI Recommendation Available</p>
              <p className="mt-0.5 text-sm text-muted-foreground">
                Heavy rain expected today. Generate today's operational cleanup plan.
              </p>
            </div>
          </div>
          <Button asChild className="h-11 shrink-0 gap-2 px-5">
            <Link href="/copilot">
              Generate AI Plan
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Key Stats */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Active Complaints"
          value={`${complaints.length}`}
          caption="6 new reports today"
          icon={FileText}
          trend={{ direction: "up", value: "+2 from yesterday" }}
        />
        <StatsCard
          title="Available Trucks"
          value={`${resourceOverview.availableTrucks}`}
          caption={`${resourceOverview.totalTrucks} total fleet vehicles`}
          icon={Truck}
          trend={{ direction: "down", value: "-1 under maintenance" }}
        />
        <StatsCard
          title="Available Workers"
          value={`${resourceOverview.availableWorkers}`}
          caption={`${resourceOverview.totalWorkers} workers on roster`}
          icon={Users}
          trend={{ direction: "up", value: "Full strength" }}
        />
        <StatsCard
          title="Weather"
          value={weather.temperature}
          caption={weather.trend}
          icon={CloudRain}
          warning
        />
      </section>

      {/* Complaint Distribution */}
      <section>
        <ComplaintMap />
      </section>
    </PageContainer>
  );
}

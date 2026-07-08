import Link from "next/link";
import { CloudRain, FileText, Truck, Users } from "lucide-react";

import { ComplaintMap } from "@/components/dashboard/ComplaintMap";
import { ComplaintSummary } from "@/components/dashboard/ComplaintSummary";
import { ResourceCard } from "@/components/dashboard/ResourceCard";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { WeatherCard } from "@/components/dashboard/WeatherCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { complaints } from "@/data/complaints";
import { resources, resourceOverview } from "@/data/resources";
import { weather } from "@/data/weather";

export default function DashboardPage() {
  return (
    <PageContainer
      title="Dashboard"
      description="Municipal operations overview with placeholder command-center modules."
    >
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Active Complaints" value={`${complaints.length}`} caption="6 new reports today" icon={FileText} />
        <StatsCard title="Available Trucks" value={`${resourceOverview.availableTrucks}`} caption={`${resourceOverview.totalTrucks} total fleet vehicles`} icon={Truck} />
        <StatsCard title="Available Workers" value={`${resourceOverview.availableWorkers}`} caption={`${resourceOverview.totalWorkers} workers on roster`} icon={Users} />
        <StatsCard title="Weather" value={weather.temperature} caption={weather.trend} icon={CloudRain} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
        <ComplaintMap />
        <div className="space-y-6">
          <WeatherCard />
          <Card>
            <CardHeader>
              <CardTitle>Resource Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-4">
            <CardTitle>Recent Complaints</CardTitle>
            <Button asChild variant="outline">
              <Link href="/complaints">View all</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <ComplaintSummary />
          </CardContent>
        </Card>
      </section>

      <section>
        <Card className="overflow-hidden">
          <CardContent className="grid gap-6 p-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-medium text-primary">Quick AI Copilot</p>
              <h2 className="mt-2 text-2xl font-semibold">Today&apos;s Context</h2>
              <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
                Weather: {weather.condition}. Resources: {resourceOverview.availableTrucks} trucks and{" "}
                {resourceOverview.availableWorkers} workers available. Complaint Count: {complaints.length}.
              </p>
            </div>
            <Button asChild className="h-12 px-6">
              <Link href="/copilot">Open AI Copilot</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  );
}

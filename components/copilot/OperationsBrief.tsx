import { Truck, Users, CloudRain, FileText } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { complaints } from "@/data/complaints";
import { resourceOverview } from "@/data/resources";
import { weather } from "@/data/weather";

export function OperationsBrief() {
  const items = [
    { label: "Weather", value: weather.condition, icon: CloudRain },
    { label: "Active Complaints", value: `${complaints.length}`, icon: FileText },
    { label: "Available Trucks", value: `${resourceOverview.availableTrucks}`, icon: Truck },
    { label: "Available Workers", value: `${resourceOverview.availableWorkers}`, icon: Users }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Today&apos;s Context</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.label} className="flex items-center gap-3 rounded-lg border bg-background p-3">
              <Icon className="size-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}

import { Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Crew } from "@/types/workplan";

type CrewCardProps = {
  crew: Crew;
};

export function CrewCard({ crew }: CrewCardProps) {
  return (
    <Card className="animate-in fade-in duration-500">
      <CardContent className="space-y-5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="size-5" />
            </div>
            <div>
              <p className="font-medium">{crew.name}</p>
              <p className="text-sm text-muted-foreground">{crew.vehicle}</p>
            </div>
          </div>
          <Badge tone={crew.priority === "Critical" ? "danger" : crew.priority === "High" ? "warning" : "default"}>
            {crew.priority}
          </Badge>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border bg-background p-3">
            <p className="text-xs text-muted-foreground">Assigned Cluster</p>
            <p className="mt-1 text-sm font-medium">{crew.assignedCluster}</p>
          </div>
          <div className="rounded-lg border bg-background p-3">
            <p className="text-xs text-muted-foreground">Complaints</p>
            <p className="mt-1 text-sm font-medium">{crew.complaints}</p>
          </div>
          <div className="rounded-lg border bg-background p-3">
            <p className="text-xs text-muted-foreground">Estimated Time</p>
            <p className="mt-1 text-sm font-medium">{crew.estimatedTime}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <Badge tone="success">{crew.status}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}

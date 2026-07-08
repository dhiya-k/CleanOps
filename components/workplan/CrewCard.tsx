import { Users, Truck, MapPin, Clock, AlertTriangle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Crew } from "@/types/workplan";

type CrewCardProps = {
  crew: Crew;
};

function getStatusColor(status: string) {
  switch (status) {
    case "Deployed": return "bg-success/10 text-success border-success/20";
    case "En Route": return "bg-primary/10 text-primary border-primary/20";
    case "Standing By": return "bg-warning/10 text-warning border-warning/20";
    case "Assigned": return "bg-muted text-muted-foreground border-border";
    default: return "bg-muted text-muted-foreground border-border";
  }
}

function getPriorityBadge(priority: string) {
  switch (priority) {
    case "Critical": return "danger";
    case "High": return "warning";
    case "Medium": return "default";
    default: return "default";
  }
}

export function CrewCard({ crew }: CrewCardProps) {
  return (
    <Card className="animate-in fade-in duration-500 transition-all hover:-translate-y-0.5 hover:shadow-soft">
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Users className="size-5" />
            </div>
            <div>
              <p className="font-medium">{crew.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <Truck className="size-3.5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{crew.vehicle}</p>
              </div>
            </div>
          </div>
          <Badge tone={getPriorityBadge(crew.priority)}>{crew.priority}</Badge>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border bg-background p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="size-3.5" />
              <span>Cluster</span>
            </div>
            <p className="mt-1 text-sm font-medium">{crew.assignedCluster}</p>
          </div>
          <div className="rounded-lg border bg-background p-3">
            <p className="text-xs text-muted-foreground">Complaints</p>
            <p className="mt-1 text-sm font-medium">{crew.complaints}</p>
          </div>
          <div className="rounded-lg border bg-background p-3">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="size-3.5" />
              <span>ETA</span>
            </div>
            <p className="mt-1 text-sm font-medium">{crew.estimatedTime}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${getStatusColor(crew.status)}`}>
            <span className={`size-1.5 rounded-full ${crew.status === "Deployed" ? "bg-success" : crew.status === "En Route" ? "bg-primary" : crew.status === "Standing By" ? "bg-warning" : "bg-muted-foreground"}`} />
            {crew.status}
          </span>
          {crew.priority === "Critical" && (
            <span className="inline-flex items-center gap-1 text-xs text-danger">
              <AlertTriangle className="size-3" />
              Immediate attention
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

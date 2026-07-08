import { Map } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { WorkCluster } from "@/types/workplan";

type ClusterCardProps = {
  cluster: WorkCluster;
};

export function ClusterCard({ cluster }: ClusterCardProps) {
  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Map className="size-5 text-primary" />
            <p className="font-medium">{cluster.name}</p>
          </div>
          <Badge tone={cluster.priority === "Critical" ? "danger" : cluster.priority === "High" ? "warning" : "default"}>
            {cluster.priority}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">{cluster.area}</p>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Resource } from "@/types/resource";

type ResourceCardProps = {
  resource: Resource;
};

export function ResourceCard({ resource }: ResourceCardProps) {
  const tone = resource.status === "Healthy" ? "success" : resource.status === "Limited" ? "warning" : "danger";

  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-4">
          <p className="font-medium">{resource.name}</p>
          <Badge tone={tone}>{resource.status}</Badge>
        </div>
        <div>
          <div className="mb-2 flex justify-between text-sm text-muted-foreground">
            <span>Available</span>
            <span>
              {resource.available}/{resource.total}
            </span>
          </div>
          <div className="h-2 rounded-full bg-muted">
            <div
              className="h-2 rounded-full bg-success"
              style={{ width: `${(resource.available / resource.total) * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

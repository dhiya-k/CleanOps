import Link from "next/link";
import { ImageIcon, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Complaint } from "@/types/complaint";

type ComplaintCardProps = {
  complaint: Complaint;
};

const priorityTone = {
  Low: "success",
  Medium: "warning",
  High: "danger",
  Critical: "danger"
} as const;

export function ComplaintCard({ complaint }: ComplaintCardProps) {
  return (
    <Link href={`/complaints/${complaint.id}`}>
      <Card className="animate-in fade-in duration-500 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-soft">
        <CardContent className="space-y-4 p-5">
          <div className="flex h-28 items-center justify-center rounded-lg border border-dashed bg-muted text-muted-foreground">
            <ImageIcon className="size-7" />
          </div>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-medium">{complaint.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {complaint.ward} · {complaint.id}
              </p>
            </div>
            <div className="flex gap-2">
              <Badge tone={priorityTone[complaint.priority]}>{complaint.priority}</Badge>
              <Badge>{complaint.status}</Badge>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            <span>{complaint.location}</span>
          </div>
          <div className="flex justify-between gap-4 text-xs text-muted-foreground">
            <span>{complaint.reportedAt}</span>
            <span>Hazard: {complaint.hazardLevel}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

import { ImageIcon, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Complaint } from "@/types/complaint";

type ComplaintDetailsProps = {
  complaint: Complaint;
};

export function ComplaintDetails({ complaint }: ComplaintDetailsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card>
        <CardContent className="p-6">
          <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed bg-muted">
            <div className="text-center text-muted-foreground">
              <ImageIcon className="mx-auto size-10" />
              <p className="mt-2 text-sm">Complaint image placeholder</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{complaint.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge tone="danger">{complaint.priority}</Badge>
            <Badge>{complaint.status}</Badge>
          </div>
          <div>
            <p className="font-medium">Ward</p>
            <p className="mt-2 text-sm text-muted-foreground">{complaint.ward}</p>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 size-4 text-primary" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">{complaint.location}</p>
            </div>
          </div>
          <div>
            <p className="font-medium">Description</p>
            <p className="mt-2 text-sm text-muted-foreground">{complaint.description}</p>
          </div>
          <div>
            <p className="font-medium">Reported</p>
            <p className="mt-2 text-sm text-muted-foreground">{complaint.reportedAt}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm text-muted-foreground">Estimated Waste Volume</p>
              <p className="mt-2 font-semibold">{complaint.estimatedWasteVolume}</p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <p className="text-sm text-muted-foreground">Hazard Level</p>
              <p className="mt-2 font-semibold">{complaint.hazardLevel}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

import { ImageIcon, MapPin, AlertTriangle, Box, Calendar } from "lucide-react";

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
          <div className="flex aspect-video items-center justify-center rounded-lg border-2 border-dashed bg-gradient-to-br from-muted/50 to-muted">
            <div className="text-center text-muted-foreground">
              <ImageIcon className="mx-auto size-12 opacity-40" />
              <p className="mt-3 text-sm font-medium">No image uploaded</p>
              <p className="mt-1 text-xs text-muted-foreground/70">
                Upload field image from the AI Copilot for AI-powered waste assessment
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle>{complaint.title}</CardTitle>
            <Badge tone="danger" className="shrink-0">{complaint.priority}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge>{complaint.status}</Badge>
          </div>
          <div>
            <p className="font-medium">Ward</p>
            <p className="mt-2 text-sm text-muted-foreground">{complaint.ward}</p>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <MapPin className="mt-0.5 size-4 text-primary shrink-0" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-muted-foreground">{complaint.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-3 text-sm">
            <Calendar className="mt-0.5 size-4 text-primary shrink-0" />
            <div>
              <p className="font-medium">Reported</p>
              <p className="text-muted-foreground">{complaint.reportedAt}</p>
            </div>
          </div>
          <div>
            <p className="font-medium">Description</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{complaint.description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Box className="size-4" />
                <span>Estimated Waste Volume</span>
              </div>
              <p className="mt-2 font-semibold">{complaint.estimatedWasteVolume}</p>
            </div>
            <div className="rounded-lg border bg-background p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <AlertTriangle className="size-4" />
                <span>Hazard Level</span>
              </div>
              <p className="mt-2 font-semibold">{complaint.hazardLevel}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

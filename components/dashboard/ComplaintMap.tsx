import { MapPinned } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComplaintMap() {
  return (
    <Card className="min-h-[360px]">
      <CardHeader>
        <CardTitle>Complaint Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-lg border border-dashed bg-[radial-gradient(circle_at_25%_25%,rgba(37,99,235,0.14),transparent_28%),radial-gradient(circle_at_70%_60%,rgba(22,163,74,0.12),transparent_30%)] text-center">
          <div className="absolute left-[18%] top-[24%] size-3 rounded-full bg-danger shadow-[0_0_0_8px_rgba(239,68,68,0.12)]" />
          <div className="absolute right-[24%] top-[34%] size-3 rounded-full bg-warning shadow-[0_0_0_8px_rgba(249,115,22,0.12)]" />
          <div className="absolute bottom-[25%] left-[42%] size-3 rounded-full bg-primary shadow-[0_0_0_8px_rgba(37,99,235,0.12)]" />
          <div className="rounded-lg bg-card/85 p-6 shadow-soft backdrop-blur">
            <MapPinned className="mx-auto size-10 text-primary" />
            <p className="mt-3 font-medium">Map placeholder</p>
            <p className="mt-1 text-sm text-muted-foreground">Marker illustration for complaint hotspots.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

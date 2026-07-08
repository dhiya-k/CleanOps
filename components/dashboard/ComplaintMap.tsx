import { MapPinned, Crosshair } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ComplaintMap() {
  return (
    <Card className="min-h-[360px]">
      <CardHeader>
        <CardTitle>Complaint Distribution — Bengaluru</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-lg border bg-[radial-gradient(circle_at_25%_25%,rgba(37,99,235,0.14),transparent_28%),radial-gradient(circle_at_70%_60%,rgba(22,163,74,0.12),transparent_30%)] text-center">
          {/* Simulated map markers */}
          <div className="absolute left-[18%] top-[24%] flex flex-col items-center">
            <div className="size-4 rounded-full bg-danger shadow-[0_0_0_8px_rgba(239,68,68,0.15)] animate-pulse" />
            <span className="mt-1.5 text-[10px] font-medium text-danger">KR Market</span>
          </div>
          <div className="absolute right-[24%] top-[34%] flex flex-col items-center">
            <div className="size-4 rounded-full bg-warning shadow-[0_0_0_8px_rgba(249,115,22,0.15)]" />
            <span className="mt-1.5 text-[10px] font-medium text-warning">Majestic</span>
          </div>
          <div className="absolute bottom-[25%] left-[42%] flex flex-col items-center">
            <div className="size-4 rounded-full bg-primary shadow-[0_0_0_8px_rgba(37,99,235,0.15)]" />
            <span className="mt-1.5 text-[10px] font-medium text-primary">Jayanagar</span>
          </div>
          <div className="absolute top-[15%] right-[32%] flex flex-col items-center">
            <div className="size-4 rounded-full bg-success shadow-[0_0_0_8px_rgba(22,163,74,0.15)]" />
            <span className="mt-1.5 text-[10px] font-medium text-success">RT Nagar</span>
          </div>
          <div className="rounded-lg bg-card/90 p-6 shadow-soft backdrop-blur-sm">
            <MapPinned className="mx-auto size-10 text-primary" />
            <p className="mt-3 font-medium">Bengaluru City Map</p>
            <p className="mt-1 text-sm text-muted-foreground">6 active complaints across 4 wards</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

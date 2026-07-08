import { CloudRain } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { weather } from "@/data/weather";

export function WeatherCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weather</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <CloudRain className="size-6" />
          </div>
          <div>
            <p className="font-medium">{weather.condition}</p>
            <p className="text-sm text-muted-foreground">
              {weather.temperature} · Humidity {weather.humidity}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{weather.impact}</p>
      </CardContent>
    </Card>
  );
}

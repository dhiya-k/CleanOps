import { Lightbulb } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
type StrategyRecommendationData = {
  title: string;
  strategyName: string;
  confidence: number;
  reasons: string[];
};

type StrategyRecommendationProps = {
  recommendation: StrategyRecommendationData | null;
};

export function StrategyRecommendation({ recommendation }: StrategyRecommendationProps) {
  const title = recommendation ? recommendation.title : "Recommended Strategy";
  const strategyName = recommendation?.strategyName;
  const confidence = recommendation?.confidence;
  const reasons = recommendation?.reasons ?? [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="size-5 text-warning" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <div>
          <p className="text-xl font-semibold">{strategyName ?? "Generate an AI plan to see the recommendation."}</p>
          {confidence ? <p className="mt-1 text-sm text-muted-foreground">{confidence}% confidence</p> : null}
        </div>
        {reasons.length > 0 ? (
          <ul className="space-y-2 text-sm text-muted-foreground">
            {reasons.map((reason) => (
              <li key={reason}>- {reason}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">The API recommendation will appear here after generation.</p>
        )}
      </CardContent>
    </Card>
  );
}

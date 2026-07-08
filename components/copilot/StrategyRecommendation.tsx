"use client";

import { useState } from "react";
import { Lightbulb, MapPin, Route, Fuel, Clock, ChevronDown, ChevronUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export type ImpactMetrics = {
  complaintsCovered: string;
  travelDistance: string;
  fuelUsage: string;
  completionETA: string;
};

type StrategyRecommendationData = {
  title: string;
  strategyName: string;
  confidence: number;
  reasons: string[];
  impact?: ImpactMetrics;
  detailedReasons?: string[];
};

type StrategyRecommendationProps = {
  recommendation: StrategyRecommendationData | null;
};

function getConfidenceColor(score: number) {
  if (score >= 90) return "bg-success";
  if (score >= 75) return "bg-primary";
  if (score >= 50) return "bg-warning";
  return "bg-danger";
}

export function StrategyRecommendation({ recommendation }: StrategyRecommendationProps) {
  const [showFullReasoning, setShowFullReasoning] = useState(false);

  if (!recommendation) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="size-5 text-warning" />
            Recommended Strategy
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <Lightbulb className="mb-3 size-12 text-muted-foreground/30" />
            <p className="text-sm font-medium">No strategy recommended yet</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Generate an AI operational plan to see the recommended strategy.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const displayReasons = recommendation.reasons.slice(0, 4);
  const hasMoreReasons = recommendation.reasons.length > 4 || (recommendation.detailedReasons?.length ?? 0) > 0;
  const fullReasoning = recommendation.detailedReasons ?? recommendation.reasons;

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-background to-primary/5">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="size-5 text-warning" />
          {recommendation.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Strategy name + confidence */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Badge className="bg-primary px-3 py-1.5 text-sm text-primary-foreground">
              {recommendation.strategyName}
            </Badge>
            <span className="text-2xl font-bold">{recommendation.confidence}%</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-muted">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${getConfidenceColor(recommendation.confidence)}`}
              style={{ width: `${recommendation.confidence}%` }}
            />
          </div>
          <p className="text-right text-xs text-muted-foreground">
            AI confidence score
          </p>
        </div>

        {/* Why this strategy? */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Why this strategy?
          </p>
          <ul className="space-y-1.5">
            {displayReasons.map((reason) => (
              <li key={reason} className="flex gap-2 text-sm text-muted-foreground">
                <span className="mt-1 shrink-0 size-1.5 rounded-full bg-primary" />
                {reason}
              </li>
            ))}
          </ul>
        </div>

        {/* Expected Impact */}
        {recommendation.impact ? (
          <div className="rounded-lg border bg-card p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Expected Impact
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="size-4 text-primary" />
                <span>{recommendation.impact.complaintsCovered}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Route className="size-4 text-warning" />
                <span>{recommendation.impact.travelDistance}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Fuel className="size-4 text-danger" />
                <span>{recommendation.impact.fuelUsage}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="size-4 text-success" />
                <span>{recommendation.impact.completionETA}</span>
              </div>
            </div>
          </div>
        ) : null}

        {/* Collapsible full reasoning */}
        {hasMoreReasons ? (
          <div>
            <button
              onClick={() => setShowFullReasoning((prev) => !prev)}
              className="flex w-full items-center justify-between rounded-lg border bg-muted/30 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/50"
            >
              View Full AI Reasoning
              {showFullReasoning ? (
                <ChevronUp className="size-4" />
              ) : (
                <ChevronDown className="size-4" />
              )}
            </button>
            {showFullReasoning ? (
              <ul className="mt-3 space-y-1.5 rounded-lg border bg-muted/10 p-3">
                {fullReasoning.map((reason, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 shrink-0 size-1.5 rounded-full bg-primary" />
                    {reason}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}

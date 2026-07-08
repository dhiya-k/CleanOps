"use client";

import { useEffect, useMemo, useState } from "react";
import { AlertCircle } from "lucide-react";

import { AICopilotCard } from "@/components/copilot/AICopilotCard";
import { ImageAnalyzer } from "@/components/copilot/ImageAnalyzer";
import { OperationsBrief } from "@/components/copilot/OperationsBrief";
import { StrategyComparisonTable } from "@/components/copilot/StrategyComparisonTable";
import { type ImpactMetrics, StrategyRecommendation } from "@/components/copilot/StrategyRecommendation";
import { ClusterCard } from "@/components/workplan/ClusterCard";
import { CrewCard } from "@/components/workplan/CrewCard";
import { WorkPlanSummary } from "@/components/workplan/WorkPlanSummary";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { complaints } from "@/data/complaints";
import { resourceOverview } from "@/data/resources";
import { weather } from "@/data/weather";
import type { AnalyzeImageResponse, GeneratePlanRequest, GeneratePlanResponse } from "@/types/api";
import type { Crew, WorkCluster, WorkPlanSummaryItem } from "@/types/workplan";

const defaultBrief = "Two trucks are under maintenance.\nHeavy rain expected after 2 PM.\nRoad closed near City Market.";
const loadingMessages = ["Analyzing complaints...", "Evaluating resources...", "Generating operational plan..."];

type PlanningState = {
  response: GeneratePlanResponse | null;
  isLoading: boolean;
  toastMessage: string | null;
};

function buildVisionBriefSection(analysis: AnalyzeImageResponse | null): string {
  if (!analysis) return "";
  const parts = [
    "",
    "--- AI Waste Assessment Results ---",
    `Waste Type: ${analysis.waste_type}`,
    `Hazard Level: ${analysis.hazard_level}`,
    `Estimated Volume: ${analysis.estimated_volume}`,
    `Priority Score: ${analysis.priority_score}/100`,
    `Public Health Risk: ${analysis.public_health_risk}`,
    `Environmental Risk: ${analysis.environmental_risk}`,
    `Recommended Workers: ${analysis.recommended_workers}`,
    `Recommended Vehicle: ${analysis.recommended_vehicle}`,
    `Estimated Cleanup Time: ${analysis.estimated_cleanup_time}`,
  ];
  return parts.join("\n");
}

function toApiRequest(brief: string, language: string, visionAnalysis: AnalyzeImageResponse | null): GeneratePlanRequest {
  const briefWithVision = visionAnalysis
    ? brief + buildVisionBriefSection(visionAnalysis)
    : brief;

  return {
    weather: {
      condition: weather.condition,
      temperature: Number.parseInt(weather.temperature, 10)
    },
    resources: {
      available_trucks: resourceOverview.availableTrucks,
      available_workers: resourceOverview.availableWorkers
    },
    complaints: complaints.map((complaint) => ({
      id: complaint.id,
      priority: complaint.priority,
      location: complaint.ward
    })),
    operations_brief: briefWithVision,
    language
  };
}

function getUniqueCount(values: string[]) {
  return new Set(values).size;
}

function toCrewItems(plan: GeneratePlanResponse): Crew[] {
  return plan.workplan.map((item, index) => ({
    id: `API-CREW-${index + 1}`,
    name: item.crew,
    vehicle: item.vehicle,
    assignedCluster: item.cluster,
    complaints: item.complaints,
    estimatedTime: item.eta,
    priority: index === 0 ? "Critical" : index === 1 ? "High" : "Medium",
    status: "Assigned"
  }));
}

function toClusterItems(plan: GeneratePlanResponse): WorkCluster[] {
  return plan.workplan.map((item, index) => ({
    id: `API-CLUSTER-${index + 1}`,
    name: item.cluster,
    area: `${item.complaints} complaints assigned to ${item.crew}`,
    priority: index === 0 ? "Critical" : index === 1 ? "High" : "Medium"
  }));
}

function toSummaryItems(plan: GeneratePlanResponse): WorkPlanSummaryItem[] {
  const complaintsCount = plan.workplan.reduce((total, item) => total + item.complaints, 0);
  const clusterCount = getUniqueCount(plan.workplan.map((item) => item.cluster));
  const vehicleCount = getUniqueCount(plan.workplan.map((item) => item.vehicle));
  const crewCount = getUniqueCount(plan.workplan.map((item) => item.crew));

  return [
    { label: "Today's Clusters", value: `${clusterCount}`, caption: "From generated work plan" },
    { label: "Vehicles Assigned", value: `${vehicleCount}`, caption: "From generated work plan" },
    { label: "Complaints Planned", value: `${complaintsCount}`, caption: "From generated work plan" },
    { label: "Crew Count", value: `${crewCount}`, caption: "From generated work plan" }
  ];
}

export function CopilotWorkspace() {
  const [brief, setBrief] = useState(defaultBrief);
  const [language, setLanguage] = useState("English");
  const [visionAnalysis, setVisionAnalysis] = useState<AnalyzeImageResponse | null>(null);
  const [planning, setPlanning] = useState<PlanningState>({
    response: null,
    isLoading: false,
    toastMessage: null
  });

  const crewItems = useMemo(() => (planning.response ? toCrewItems(planning.response) : []), [planning.response]);
  const clusterItems = useMemo(() => (planning.response ? toClusterItems(planning.response) : []), [planning.response]);
  const summaryItems = useMemo(() => (planning.response ? toSummaryItems(planning.response) : []), [planning.response]);
  const recommendation = useMemo(() => {
    if (!planning.response) return null;

    const plan = planning.response;
    const recRow = plan.comparison.find((c) => c.strategy === plan.recommended_strategy.name);
    const totalComplaints = plan.workplan.reduce((t, w) => t + w.complaints, 0);
    const maxETA = plan.workplan.map((w) => w.eta).sort().pop() ?? "N/A";

    const impact: ImpactMetrics = {
      complaintsCovered: `${totalComplaints} complaints`,
      travelDistance: recRow?.travel ?? "Optimised",
      fuelUsage: recRow?.fuel ?? "Efficient",
      completionETA: maxETA
    };

    const shortReasons = plan.recommended_strategy.reason.slice(0, 4);
    const detailedReasons = plan.recommended_strategy.reason;

    return {
      title: "Recommended Strategy",
      strategyName: plan.recommended_strategy.name,
      confidence: plan.recommended_strategy.confidence,
      reasons: shortReasons,
      impact,
      detailedReasons
    };
  }, [planning.response]);

  useEffect(() => {
    if (!planning.toastMessage) {
      return;
    }

    const timer = window.setTimeout(() => {
      setPlanning((current) => ({ ...current, toastMessage: null }));
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [planning.toastMessage]);

  async function generatePlan() {
    setPlanning((current) => ({
      ...current,
      isLoading: true,
      toastMessage: null
    }));

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/generate-plan`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(toApiRequest(brief, language, visionAnalysis))
      });

      if (!response.ok) {
        throw new Error("Planner API returned an error");
      }

      const data = (await response.json()) as GeneratePlanResponse;
      setPlanning((current) => ({
        ...current,
        response: data,
        isLoading: false
      }));
    } catch {
      setPlanning((current) => ({
        ...current,
        isLoading: false,
        toastMessage: "Unable to generate a new operational plan."
      }));
    }
  }

  return (
    <>
      {/* 1. Today's Context — includes Language + Generate AI Plan */}
      <AICopilotCard
        brief={brief}
        language={language}
        isLoading={planning.isLoading}
        loadingMessages={loadingMessages}
        onBriefChange={setBrief}
        onLanguageChange={setLanguage}
        onGeneratePlan={generatePlan}
      />

      {/* 2. Officer Notes + 4. Image Upload */}
      <div className="grid gap-6 xl:grid-cols-2">
        <OperationsBrief />
        <ImageAnalyzer
          onAnalysisComplete={setVisionAnalysis}
          existingAnalysis={visionAnalysis}
        />
      </div>

      {/* 6. Recommended Strategy */}
      <StrategyRecommendation recommendation={recommendation} />

      {/* 7. Strategy Comparison Table */}
      <StrategyComparisonTable
        plan={planning.response}
        recommendedStrategyName={planning.response?.recommended_strategy.name}
      />

      {/* 8. Work Plan Summary */}
      <WorkPlanSummary items={summaryItems} />

      {/* 9. Crew Assignments */}
      <section>
        <h2 className="mb-4 text-lg font-semibold">Crew Assignments</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Crews
            </h3>
            {crewItems.length > 0 ? (
              crewItems.map((crew) => <CrewCard key={crew.id} crew={crew} />)
            ) : (
              <Card>
                <CardContent className="p-5 text-sm text-muted-foreground">
                  Generate an AI plan to see crew assignments.
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Clusters
            </h3>
            {clusterItems.length > 0 ? (
              clusterItems.map((cluster) => <ClusterCard key={cluster.id} cluster={cluster} />)
            ) : (
              <Card>
                <CardContent className="p-5 text-sm text-muted-foreground">
                  Generate an AI plan to see cluster assignments.
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button className="h-11 px-6" disabled={!planning.response}>
          Accept Plan
        </Button>
        <Button
          variant="outline"
          className="h-11 px-6"
          onClick={generatePlan}
          disabled={planning.isLoading}
        >
          Regenerate
        </Button>
        <Button variant="secondary" className="h-11 px-6" disabled={!planning.response}>
          Customize Strategy
        </Button>
      </div>

      {planning.toastMessage ? (
        <Card className="fixed bottom-4 right-4 z-50 w-[min(24rem,calc(100vw-2rem))] border-danger/30 shadow-lg">
          <CardContent className="flex items-center gap-3 p-4">
            <AlertCircle className="size-5 text-danger" />
            <p className="text-sm font-medium text-danger">{planning.toastMessage}</p>
          </CardContent>
        </Card>
      ) : null}
    </>
  );
}

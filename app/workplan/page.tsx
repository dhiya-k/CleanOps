import { ClusterCard } from "@/components/workplan/ClusterCard";
import { CrewCard } from "@/components/workplan/CrewCard";
import { WorkPlanSummary } from "@/components/workplan/WorkPlanSummary";
import { PageContainer } from "@/components/layout/PageContainer";
import { clusters, crews, workPlanSummary } from "@/data/workplan";

export default function WorkPlanPage() {
  return (
    <PageContainer
      title="Work Plan"
      description="Placeholder crew, cluster, and summary cards for daily municipal operations."
    >
      <WorkPlanSummary items={workPlanSummary} />

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Crews</h2>
          {crews.map((crew) => (
            <CrewCard key={crew.id} crew={crew} />
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Clusters</h2>
          {clusters.map((cluster) => (
            <ClusterCard key={cluster.id} cluster={cluster} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}

import type { GeneratePlanResponse } from "@/types/api";

type StrategyComparisonTableProps = {
  plan?: GeneratePlanResponse | null;
  recommendedStrategyName?: string;
};

export function StrategyComparisonTable({ plan, recommendedStrategyName }: StrategyComparisonTableProps) {
  const rows = plan?.comparison;

  return (
    <div className="overflow-hidden rounded-lg border bg-card shadow-soft">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-medium">Strategy</th>
            <th className="px-4 py-3 font-medium">Complaints Cleared</th>
            <th className="px-4 py-3 font-medium">Travel Distance</th>
            <th className="px-4 py-3 font-medium">Critical Incidents</th>
            <th className="px-4 py-3 font-medium">Fuel Usage</th>
            <th className="px-4 py-3 font-medium">Best Use Case</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows?.length ? (
            rows.map((strategy) => {
              const isRecommended = strategy.strategy === recommendedStrategyName;

              return (
                <tr key={strategy.strategy} className={isRecommended ? "bg-primary/5" : undefined}>
                  <td className="px-4 py-4 font-medium">
                    {isRecommended ? "Recommended: " : ""}
                    {strategy.strategy}
                  </td>
                  <td className="px-4 py-4 text-muted-foreground">{strategy.complaints}</td>
                  <td className="px-4 py-4 text-muted-foreground">{strategy.travel}</td>
                  <td className="px-4 py-4 text-muted-foreground">{strategy.critical}</td>
                  <td className="px-4 py-4 text-muted-foreground">{strategy.fuel}</td>
                  <td className="px-4 py-4 text-muted-foreground">API generated plan</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td className="px-4 py-6 text-sm text-muted-foreground" colSpan={6}>
                Generate an AI plan to compare strategies.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

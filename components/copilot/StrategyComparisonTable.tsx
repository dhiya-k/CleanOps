import { Badge } from "@/components/ui/badge";
import type { GeneratePlanResponse } from "@/types/api";

type StrategyComparisonTableProps = {
  plan?: GeneratePlanResponse | null;
  recommendedStrategyName?: string;
};

export function StrategyComparisonTable({ plan, recommendedStrategyName }: StrategyComparisonTableProps) {
  const rows = plan?.comparison;

  if (!rows?.length) {
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
          <tbody>
            <tr>
              <td className="px-4 py-8 text-center text-sm text-muted-foreground" colSpan={6}>
                Generate an AI operational plan to compare planning strategies.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border bg-card shadow-soft">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="px-4 py-3 font-medium">Strategy</th>
            <th className="px-4 py-3 font-medium">Complaints</th>
            <th className="px-4 py-3 font-medium">Travel</th>
            <th className="px-4 py-3 font-medium">Critical</th>
            <th className="px-4 py-3 font-medium">Fuel</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map((strategy) => {
            const isRecommended = strategy.strategy === recommendedStrategyName;

            return (
              <tr
                key={strategy.strategy}
                className={`transition-colors ${
                  isRecommended
                    ? "bg-success/5 ring-1 ring-inset ring-success/20"
                    : "hover:bg-muted/50"
                }`}
              >
                <td className="px-4 py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{strategy.strategy}</span>
                    {isRecommended && (
                      <Badge className="bg-success text-[10px] text-white">Recommended</Badge>
                    )}
                  </div>
                </td>
                <td className="px-4 py-4 text-muted-foreground">{strategy.complaints}</td>
                <td className="px-4 py-4 text-muted-foreground">{strategy.travel}</td>
                <td className="px-4 py-4 text-muted-foreground">{strategy.critical}</td>
                <td className="px-4 py-4">
                  <span
                    className={`inline-block rounded px-2 py-0.5 text-xs font-medium ${
                      strategy.fuel === "Low"
                        ? "bg-success/10 text-success"
                        : strategy.fuel === "Medium"
                          ? "bg-warning/10 text-warning"
                          : "bg-danger/10 text-danger"
                    }`}
                  >
                    {strategy.fuel}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

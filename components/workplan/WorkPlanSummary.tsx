import { ClipboardCheck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { WorkPlanSummaryItem } from "@/types/workplan";

type WorkPlanSummaryProps = {
  items: WorkPlanSummaryItem[];
};

export function WorkPlanSummary({ items }: WorkPlanSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardCheck className="size-5 text-success" />
          Work Plan Summary
        </CardTitle>
      </CardHeader>
      <CardContent>
        {items.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.label} className="rounded-lg border bg-background p-4">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="mt-2 text-xl font-semibold">{item.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{item.caption}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">Generate an AI plan to see work plan metrics.</p>
        )}
      </CardContent>
    </Card>
  );
}

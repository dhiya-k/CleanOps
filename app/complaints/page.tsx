import { FileText } from "lucide-react";
import { ComplaintCard } from "@/components/complaints/ComplaintCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { complaints } from "@/data/complaints";

export default function ComplaintsPage() {
  return (
    <PageContainer
      title="Complaints"
      description="Active municipal service requests across Bengaluru wards. Track, prioritise, and assign cleanup crews."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {complaints.length > 0 ? (
          complaints.map((complaint) => (
            <ComplaintCard key={complaint.id} complaint={complaint} />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center rounded-lg border border-dashed bg-muted/50 p-12 text-center">
            <FileText className="mb-3 size-12 text-muted-foreground/50" />
            <h3 className="text-lg font-semibold">No complaints reported</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              All wards have been cleared. New citizen reports will appear here automatically.
            </p>
          </div>
        )}
      </div>
    </PageContainer>
  );
}

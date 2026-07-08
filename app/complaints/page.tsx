import { ComplaintCard } from "@/components/complaints/ComplaintCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { complaints } from "@/data/complaints";

export default function ComplaintsPage() {
  return (
    <PageContainer
      title="Complaints"
      description="Placeholder complaint cards for municipal service requests."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {complaints.map((complaint) => (
          <ComplaintCard key={complaint.id} complaint={complaint} />
        ))}
      </div>
    </PageContainer>
  );
}

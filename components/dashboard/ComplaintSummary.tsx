import { ComplaintCard } from "@/components/complaints/ComplaintCard";
import { complaints } from "@/data/complaints";

export function ComplaintSummary() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {complaints.map((complaint) => (
        <ComplaintCard key={complaint.id} complaint={complaint} />
      ))}
    </div>
  );
}

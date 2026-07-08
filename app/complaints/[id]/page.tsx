import { notFound } from "next/navigation";

import { ComplaintDetails } from "@/components/complaints/ComplaintDetails";
import { PageContainer } from "@/components/layout/PageContainer";
import { complaints } from "@/data/complaints";

type ComplaintDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ComplaintDetailsPage({ params }: ComplaintDetailsPageProps) {
  const { id } = await params;
  const complaint = complaints.find((item) => item.id === id);

  if (!complaint) {
    notFound();
  }

  return (
    <PageContainer
      title={complaint.id}
      description={`${complaint.title} — ${complaint.ward}. Priority: ${complaint.priority}.`}
    >
      <ComplaintDetails complaint={complaint} />
    </PageContainer>
  );
}

import LeadDetailView from "@/components/crm/lead-detail-view";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function LeadPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <div className="p-8">
      <LeadDetailView id={id} />
    </div>
  );
}
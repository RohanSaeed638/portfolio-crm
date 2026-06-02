import ProposalEditor from "@/components/crm/proposal-editor";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProposalPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <div className="p-8">
      <ProposalEditor id={id} />
    </div>
  );
}
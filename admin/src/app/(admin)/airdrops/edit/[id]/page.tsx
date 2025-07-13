import { getAirdropById } from "@/lib/server-utils";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import AirdropEditTemplate from "@/components/templates/admin/AirdropEditTemplate";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const airdrop = await getAirdropById(id);
    return {
      title: `Edit ${airdrop.name}`,
      description: `Edit airdrop for ${airdrop.name}`,
    };
  } catch {
    return {
      title: "Airdrop Not Found",
    };
  }
}

export default async function AirdropEditPage({ params }: Props) {
  const { id } = await params;
  try {
    const airdrop = await getAirdropById(id);
    return <AirdropEditTemplate airdrop={airdrop} />;
  } catch {
    redirect("/airdrops");
  }
}

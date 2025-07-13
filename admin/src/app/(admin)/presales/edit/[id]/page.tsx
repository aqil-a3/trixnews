import PresaleEditTemplate from "@/components/templates/admin/PresalesEditTemplate";
import { getPresaleById } from "@/lib/server-utils";
import { redirect } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const presale = await getPresaleById(id);
    return {
      title: `Edit ${presale.name}`,
      description: `Edit presale for ${presale.name}`,
    };
  } catch {
    return {
      title: "Presale Not Found",
    };
  }
}

export default async function PresaleEditPage({ params }: Props) {
  const { id } = await params;
  try {
    const presale = await getPresaleById(id);
    return <PresaleEditTemplate presale={presale} />;
  } catch {
    redirect("/presales");
  }
}

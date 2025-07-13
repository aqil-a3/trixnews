import { Presale } from "@/@types/Posts";
import PresalesTemplate from "@/components/templates/admin/PresalesTemplate";
import { apiGet } from "@/lib/api-server";
import { secretApi } from "@/lib/server-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presales",
};

async function getAllPresales(): Promise<Presale[]> {
  try {
    const response = await apiGet(`${secretApi}/ico-presale`);

    return response.data as Presale[];
  } catch (error) {
    throw error;
  }
}

export default async function PresalesPage() {
  const presales = await getAllPresales();

  return <PresalesTemplate presales={presales} />;
}

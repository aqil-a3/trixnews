import PresalesTemplate from "@/components/templates/admin/PresalesTemplate";
import { getAllPresales } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Presales",
};

export default async function PresalesPage() {
  const presales = await getAllPresales();

  return <PresalesTemplate presales={presales} />;
}

import AirdropsTemplate from "@/components/templates/admin/AirdropsTemplate";
import { getAllAirDrops } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airdrops",
};

export default async function AirdropsPage() {
  const airdrops = await getAllAirDrops();
  return <AirdropsTemplate airdrops={airdrops} />;
}

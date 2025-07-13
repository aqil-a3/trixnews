import AirdropsTemplate from "@/components/templates/admin/AirdropsTemplate";
import { getAllAirdrops } from "@/lib/server-utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airdrops",
};

export default async function AirdropsPage() {
  const airdrops = await getAllAirdrops();

  return <AirdropsTemplate airdrops={airdrops} />;
}

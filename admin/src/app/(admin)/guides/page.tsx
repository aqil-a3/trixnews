import GuidesTemplate from "@/components/templates/admin/GuidesTemplate";
import { getAllGuides } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides",
};

export default async function GuidesPage() {
    const guides = await getAllGuides()
    return <GuidesTemplate guides={guides} />
}

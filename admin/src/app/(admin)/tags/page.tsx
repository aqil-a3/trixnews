import TagsTemplate from "@/components/templates/admin/TagsTemplate";
import { getAllTags } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tags",
};

export default async function TagsPage() {
  const tags = await getAllTags();

  return <TagsTemplate tags={tags} />;
}

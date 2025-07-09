import HomeTemplate from "@/components/templates/HomeTemplate";
import { getAllCategories, getAllPost } from "@/utils/posts";

export default async function HomePage() {
  const [articles, categories] = await Promise.all([
    getAllPost(),
    getAllCategories(),
  ]);
  return <HomeTemplate articles={articles} categories={categories} />;
}

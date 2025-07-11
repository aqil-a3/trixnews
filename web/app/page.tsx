import HomeTemplate from "@/components/templates/HomeTemplate";
import { getAllCategories, getAllGuides, getAllPost } from "@/utils/sanity-posts";

export default async function HomePage() {
  const [articles, categories, guides] = await Promise.all([
    getAllPost(),
    getAllCategories(),
    getAllGuides()
  ]);
  return <HomeTemplate articles={articles} categories={categories} guides={guides} />;
}

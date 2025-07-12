import HomeTemplate from "@/components/templates/HomeTemplate";
import { getCryptoNews } from "@/lib/NewsData/getApiNews";
import {
  getAllCategories,
  getAllGuides,
  getAllPost,
  getAllWeb3Tools,
} from "@/utils/sanity-posts";

export default async function HomePage() {
  const [articles, categories, guides, web3Tools] =
    await Promise.all([
      getAllPost(),
      getAllCategories(),
      getAllGuides(),
      getAllWeb3Tools(),
    ]);

  return (
    <HomeTemplate
      articles={articles}
      categories={categories}
      guides={guides}
      web3Tools={web3Tools}
    />
  );
}

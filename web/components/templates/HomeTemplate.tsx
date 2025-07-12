"use client";

import CategoriesSection from "../organisms/Home/CategoriesSection";
import GuidesTutorialsSection from "../organisms/Home/GuidesTutorialsSection";
import HeroSection from "../organisms/Home/HeroSection";
import InDepthAnalysisSection from "../organisms/Home/InDepthAnalysisSection";
import LatestNews from "../organisms/Home/LatestNews";
import LatestSidebarNews from "../organisms/Home/LatestSidebarNews";
import TrendingTopicsSection from "../organisms/Home/TrendingTopicsSection";
import Web3ToolsSection from "../organisms/Home/Web3ToolsSection";
import { Category, PostDetail } from "@/@types/Posts";
import HomeProvider from "../providers/HomeProvider";
import { SanityGuide, SanityWeb3Tool } from "@/@types/Sanity";
import CryptoNews from "../organisms/Home/CryptoNews";

export default function HomeTemplate({
  articles,
  categories,
  guides,
  web3Tools,
}: {
  articles: PostDetail[];
  categories: Category[];
  guides: SanityGuide[];
  web3Tools: SanityWeb3Tool[];
}) {
  return (
    <HomeProvider
      articles={articles}
      categories={categories}
      guides={guides}
      web3Tools={web3Tools}
    >
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
            <LatestNews />
            <LatestSidebarNews className="mt-[52px]" />
          </div>
          <CryptoNews />
          <CategoriesSection />
          <GuidesTutorialsSection />
          <InDepthAnalysisSection />
          {/* <TrendingTopicsSection /> */}

          <Web3ToolsSection />
        </main>
      </div>
    </HomeProvider>
  );
}

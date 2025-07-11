"use client";

import CategoriesSection from "../organisms/Home/CategoriesSection";
import GuidesTutorialsSection from "../organisms/Home/GuidesTutorialsSection";
import HeroSection from "../organisms/Home/HeroSection";
import InDepthAnalysisSection from "../organisms/Home/InDepthAnalysisSection";
import LatestNews from "../organisms/Home/LatestNews";
import LatestSidebarNews from "../organisms/Home/LatestSidebarNews";
import TrendingTopicsSection from "../organisms/Home/TrendingTopicsSection";
import Web3ToolsSection from "../organisms/Home/Web3ToolsSection";
import { Category, PostDetail, PostSummary } from "@/@types/Posts";
import HomeProvider from "../providers/HomeProvider";
import { SanityGuide } from "@/@types/Sanity";

export default function HomeTemplate({
  articles,
  categories,
  guides
}: {
  articles: PostDetail[];
  categories: Category[];
  guides:SanityGuide[]
}) {
  return (
    <HomeProvider articles={articles} categories={categories}>
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        <main className="container mx-auto px-4 py-8">
          <HeroSection />
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
            <LatestNews />
            <LatestSidebarNews className="mt-[52px]" />
          </div>
          <CategoriesSection />
          <GuidesTutorialsSection guides={guides} />
          <InDepthAnalysisSection />
          <TrendingTopicsSection guides={guides} />

          <Web3ToolsSection />
        </main>
      </div>
    </HomeProvider>
  );
}

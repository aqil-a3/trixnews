import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import LatestNews from "@/components/latest-news"
import CategoriesSection from "@/components/categories-section"
import LatestSidebarNews from "@/components/latest-sidebar-news"
import PopularArticles from "@/components/popular-articles"
import GuidesTutorialsSection from "@/components/guides-tutorials-section"
import InDepthAnalysisSection from "@/components/in-depth-analysis-section"
import Web3ToolsSection from "@/components/web3-tools-section" // Import new component
import Footer from "@/components/footer"
// Import the new component
import TrendingTopicsSection from "@/components/trending-topics-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroSection />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[70%_30%] gap-8">
          <div className="space-y-8">
            <LatestNews />
          </div>
          <aside className="space-y-8">
            <LatestSidebarNews className="mt-[52px]" />
          </aside>
        </div>
        <div className="mt-8">
          <CategoriesSection />
        </div>
        <div className="mt-8">
          <PopularArticles />
        </div>
        <div className="mt-8">
          <GuidesTutorialsSection />
        </div>
        <div className="mt-8">
          <InDepthAnalysisSection />
        </div>
        <div className="mt-8">
          <TrendingTopicsSection />
        </div>
        {/* Add Web3ToolsSection here */}
        <div className="mt-8">
          <Web3ToolsSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}

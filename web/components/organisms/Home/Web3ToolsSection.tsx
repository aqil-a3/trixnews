import ToolCard from "../../tool-card"
import { allWeb3Tools } from "@/lib/web3-tools"

export default function Web3ToolsSection() {
  // Display a subset of tools, e.g., the first 3 or 6 most popular/featured ones
  const featuredTools = allWeb3Tools.slice(0, 3) // Display 3 tools on homepage

  if (featuredTools.length === 0) {
    return null
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Web3 Tools & Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredTools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </section>
  )
}

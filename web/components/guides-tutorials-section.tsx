import type React from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Lightbulb, GraduationCap } from "lucide-react"
import { allGuides } from "@/lib/guides" // Import allGuides from guides.ts

interface GuideDisplay {
  title: string
  description: string
  slug: string
  icon: React.ElementType // To use Lucide icons
}

export default function GuidesTutorialsSection() {
  // Map allGuides from lib/guides.ts to GuideDisplay format
  const guidesToDisplay: GuideDisplay[] = allGuides.map((guide) => {
    let IconComponent: React.ElementType
    switch (guide.slug) {
      case "what-is-blockchain":
        IconComponent = BookOpen
        break
      case "getting-started-with-defi":
        IconComponent = Lightbulb
        break
      case "how-to-buy-your-first-nft":
        IconComponent = GraduationCap
        break
      case "crypto-security-tips":
        IconComponent = BookOpen
        break
      case "understanding-smart-contracts":
        IconComponent = Lightbulb
        break
      case "staking-vs-yield-farming":
        IconComponent = GraduationCap
        break
      default:
        IconComponent = BookOpen // Default icon
    }
    return {
      title: guide.title,
      description: guide.description,
      slug: guide.slug,
      icon: IconComponent,
    }
  })

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Guides & Tutorials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guidesToDisplay.map((guide, index) => {
          const Icon = guide.icon
          return (
            <Link href={`/guides/${guide.slug}`} key={index} className="block group">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Icon className="h-8 w-8 text-primary" />
                  <CardTitle className="group-hover:text-primary transition-colors text-xl">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{guide.description}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

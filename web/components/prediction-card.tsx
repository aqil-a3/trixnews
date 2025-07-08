import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDate, type Prediction } from "@/lib/predictions"
import { CalendarDays, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface PredictionCardProps {
  prediction: Prediction
}

export default function PredictionCard({ prediction }: PredictionCardProps) {
  const statusClasses = cn("absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase", {
    "bg-green-100 text-green-700": prediction.isResolved && (prediction.accuracyScore || 0) >= 70, // High accuracy
    "bg-yellow-100 text-yellow-700": prediction.isResolved && (prediction.accuracyScore || 0) < 70, // Moderate/low accuracy
    "bg-gray-100 text-gray-700": !prediction.isResolved, // Not resolved yet
  })

  return (
    <Card className="relative h-full flex flex-col border border-gray-200 hover:shadow-lg transition-shadow">
      {prediction.isResolved && (
        <div className={statusClasses}>
          {prediction.accuracyScore !== undefined ? `Accuracy: ${prediction.accuracyScore}%` : "Resolved"}
        </div>
      )}
      <div className="relative aspect-video w-full">
        <Image
          src={prediction.imageUrl || "/placeholder.svg?height=200&width=300&text=Prediction"}
          alt={prediction.title}
          layout="fill"
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-300 rounded-t-lg"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {prediction.title}
        </CardTitle>
        <div className="flex items-center text-xs text-gray-500 gap-3">
          <span className="flex items-center gap-1">
            <User className="h-3 w-3" /> {prediction.author}
          </span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3 w-3" /> {formatDate(prediction.date)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between pt-2">
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{prediction.summary}</p>
        <Button asChild variant="outline" className="w-full mt-auto bg-transparent">
          <Link href={`/predictions/${prediction.slug}`}>Read Prediction</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { formatCurrency, formatDate, getPresaleStatus, type Presale } from "@/lib/presales" // Import getPresaleStatus
import { CalendarDays, DollarSign, Coins } from "lucide-react"
import { cn } from "@/lib/utils" // Import cn utility

interface PresaleCardProps {
  presale: Presale
}

export default function PresaleCard({ presale }: PresaleCardProps) {
  const status = getPresaleStatus(presale.startDate, presale.endDate)

  const statusClasses = cn("absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase", {
    "bg-green-100 text-green-700": status === "Live",
    "bg-red-100 text-red-700": status === "Ended",
    "bg-blue-100 text-blue-700": status === "Upcoming",
  })

  return (
    <Card className="relative h-full flex flex-col border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Status Badge */}
      <div className={statusClasses}>{status}</div>

      <CardHeader className="flex items-center gap-6 pt-6 pb-6">
        {presale.imageUrl && (
          <Image
            src={presale.imageUrl || "/placeholder.svg"}
            alt={`${presale.name} logo`}
            width={48}
            height={48}
            className="rounded-full object-cover flex-shrink-0"
          />
        )}
        <CardTitle className="flex-1 text-center text-xl font-semibold text-gray-900">{presale.name}</CardTitle>
      </CardHeader>
      <Separator className="mb-4" />
      <CardContent className="flex-grow text-sm text-gray-700 flex flex-col justify-between">
        <div>
          <p className="mb-4 line-clamp-3">{presale.description}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="bg-gray-50 p-3 rounded-md">
              <span className="text-xs font-medium text-gray-500 flex items-center gap-1 mb-1">
                <CalendarDays className="h-3 w-3" /> Start Date:
              </span>
              <span className="text-sm font-semibold text-gray-800">{formatDate(presale.startDate)}</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <span className="text-xs font-medium text-gray-500 flex items-center gap-1 mb-1">
                <CalendarDays className="h-3 w-3" /> End Date:
              </span>
              <span className="text-sm font-semibold text-gray-800">{formatDate(presale.endDate)}</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <span className="text-xs font-medium text-gray-500 flex items-center gap-1 mb-1">
                <DollarSign className="h-3 w-3" /> Soft Cap:
              </span>
              <span className="text-sm font-semibold text-gray-800">{formatCurrency(presale.softCap)}</span>
            </div>
            <div className="bg-gray-50 p-3 rounded-md">
              <span className="text-xs font-medium text-gray-500 flex items-center gap-1 mb-1">
                <DollarSign className="h-3 w-3" /> Hard Cap:
              </span>
              <span className="text-sm font-semibold text-gray-800">{formatCurrency(presale.hardCap)}</span>
            </div>
          </div>
          <div className="bg-gray-50 p-3 rounded-md text-center mb-4">
            <span className="text-xs font-medium text-gray-500 flex items-center justify-center gap-1 mb-1">
              <Coins className="h-3 w-3" /> Total Token Supply:
            </span>
            <span className="text-sm font-semibold text-gray-800">{presale.tokenSupply.toLocaleString()}</span>
          </div>
        </div>
        <Button asChild className="w-full mt-auto">
          <Link href={`/ico-presale/${presale.slug}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

"use client" // Make this a client component

import * as React from "react" // Import React
import { ArrowUp, ArrowDown, Pause, Play } from "lucide-react" // Import Play icon
import { cn } from "@/lib/utils" // Assuming cn utility is available

interface CryptoData {
  symbol: string
  price: string
  change: string
  changeType: "up" | "down"
}

export default function CryptoTicker() {
  const [isPlaying, setIsPlaying] = React.useState(true) // State to control play/pause

  // Dummy data for cryptocurrency prices
  const cryptoPrices: CryptoData[] = [
    { symbol: "BTC", price: "$68,500.23", change: "+1.25%", changeType: "up" },
    { symbol: "ETH", price: "$3,500.10", change: "-0.80%", changeType: "down" },
    { symbol: "XRP", price: "$0.5234", change: "+0.15%", changeType: "up" },
    { symbol: "BNB", price: "$600.75", change: "-1.10%", changeType: "down" },
    { symbol: "SOL", price: "$150.20", change: "+2.05%", changeType: "up" },
    { symbol: "ADA", price: "$0.4567", change: "-0.55%", changeType: "down" },
    { symbol: "DOGE", price: "$0.1500", change: "+0.30%", changeType: "up" },
    { symbol: "TRX", price: "$0.1234", change: "+0.05%", changeType: "up" },
  ]

  // Duplicate the data multiple times to ensure continuous scrolling
  const repeatedCryptoPrices = Array(5).fill(cryptoPrices).flat()

  return (
    <div className="bg-gray-800 text-white text-sm py-2 overflow-hidden relative">
      <div className="container mx-auto px-4 flex items-center space-x-6 whitespace-nowrap">
        {/* Pause/Play icon */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="flex-shrink-0 z-10 pr-4 focus:outline-none"
          aria-label={isPlaying ? "Pause Ticker" : "Play Ticker"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4 text-gray-400 hover:text-white" />
          ) : (
            <Play className="h-4 w-4 text-gray-400 hover:text-white" />
          )}
        </button>

        {/* Scrolling content */}
        <div className={cn("flex w-max", isPlaying && "animate-scroll-left")}>
          {repeatedCryptoPrices.map((crypto, index) => (
            <div key={index} className="flex items-center space-x-1 flex-shrink-0 mr-6">
              <span className="font-semibold">{crypto.symbol}</span>
              {crypto.changeType === "up" ? (
                <ArrowUp className="h-3 w-3 text-green-400" />
              ) : (
                <ArrowDown className="h-3 w-3 text-red-400" />
              )}
              <span className="text-gray-300">{crypto.price}</span>
              <span className={cn("font-medium", crypto.changeType === "up" ? "text-green-400" : "text-red-400")}>
                {crypto.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

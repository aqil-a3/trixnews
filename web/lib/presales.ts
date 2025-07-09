// lib/presales.ts

export interface Presale {
  id: string
  name: string
  description: string
  startDate: string // YYYY-MM-DD
  endDate: string // YYYY-MM-DD
  softCap: number // In USD or a specific crypto
  hardCap: number // In USD or a specific crypto
  tokenSupply: number
  status: "pending" | "approved" | "rejected"
  contactEmail: string // For internal use, not displayed
  imageUrl?: string // Optional: for token logo
  slug?: string // Unique identifier for the presale URL
}

// Dummy data for approved presales
export const allPresales: Presale[] = [
  {
    id: "presale-1",
    name: "QuantumChain Token (QCT)",
    description: "QuantumChain is a new Layer 1 blockchain focused on scalability and quantum security.",
    startDate: "2025-07-10",
    endDate: "2025-07-25",
    softCap: 500000, // USD
    hardCap: 1500000, // USD
    tokenSupply: 100000000,
    status: "approved",
    contactEmail: "contact@quantumchain.com",
    imageUrl: "/placeholder.svg?height=64&width=64&text=QCT",
    slug: "quantumchain-token-qct",
  },
  {
    id: "presale-2",
    name: "DeFiPulse Coin (DPC)",
    description:
      "DPC is the governance token for a new DeFi platform offering uncollateralized lending and yield farming.",
    startDate: "2025-08-01",
    endDate: "2025-08-15",
    softCap: 200000,
    hardCap: 800000,
    tokenSupply: 50000000,
    status: "approved",
    contactEmail: "info@defipulse.xyz",
    imageUrl: "/placeholder.svg?height=64&width=64&text=DPC",
    slug: "defipulse-coin-dpc",
  },
  {
    id: "presale-3",
    name: "MetaVerse Land (MVL)",
    description: "Utility token for buying and selling virtual land in our expanding metaverse.",
    startDate: "2025-09-01",
    endDate: "2025-09-30",
    softCap: 1000000,
    hardCap: 3000000,
    tokenSupply: 200000000,
    status: "approved",
    contactEmail: "support@metaverseland.io",
    imageUrl: "/placeholder.svg?height=64&width=64&text=MVL",
    slug: "metaverse-land-mvl",
  },
  // Example of an upcoming presale
  {
    id: "presale-4",
    name: "AI Crypto Hub (ACH)",
    description: "Decentralized AI platform for crypto market analysis and automated trading.",
    startDate: "2025-10-01", // Future date
    endDate: "2025-10-15",
    softCap: 750000,
    hardCap: 2000000,
    tokenSupply: 75000000,
    status: "approved",
    contactEmail: "contact@aihub.com",
    imageUrl: "/placeholder.svg?height=64&width=64&text=ACH",
    slug: "ai-crypto-hub-ach",
  },
  // Example of an ended presale
  {
    id: "presale-5",
    name: "Web3 Social Connect (WSC)",
    description: "A decentralized social network focused on user privacy and data ownership.",
    startDate: "2025-05-01",
    endDate: "2025-05-15", // Past date
    softCap: 300000,
    hardCap: 1000000,
    tokenSupply: 60000000,
    status: "approved",
    contactEmail: "info@wsc.com",
    imageUrl: "/placeholder.svg?height=64&width=64&text=WSC",
    slug: "web3-social-connect-wsc",
  },
]

// In a real application, this would interact with a database
// For now, we'll just simulate fetching approved presales
export const getApprovedPresales = (): Presale[] => {
  return allPresales.filter((presale) => presale.status === "approved")
}

// New function to get presale by slug
export const getPresaleBySlug = (slug: string): Presale | null => {
  return allPresales.find((presale) => presale.slug === slug) || null
}

// Helper to format currency
export const formatCurrency = (amount: number, currency = "USD"): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Helper to format date
export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

// New helper to get presale status
export const getPresaleStatus = (startDate: string, endDate: string): "Live" | "Ended" | "Upcoming" => {
  const now = new Date()
  const start = new Date(startDate)
  const end = new Date(endDate)

  if (now < start) {
    return "Upcoming"
  } else if (now >= start && now <= end) {
    return "Live"
  } else {
    return "Ended"
  }
}

// lib/airdrops.ts

export interface Airdrop {
  id: string
  name: string
  description: string
  startDate: string // YYYY-MM-DD
  endDate: string // YYYY-MM-DD
  rewardAmount: string // e.g., "1000 ABC", "50 USD"
  status: "pending" | "approved" | "rejected"
  officialLink: string // Link to official airdrop page/announcement
  contactEmail: string // For internal use, not displayed
  imageUrl?: string // Optional: for token logo
  slug: string // Unique identifier for the airdrop URL
}

// Dummy data for approved airdrops
export const allAirdrops: Airdrop[] = [
  {
    id: "airdrop-1",
    name: "Decentraland (MANA) Airdrop",
    description: "Get free MANA tokens by participating in the Decentraland airdrop campaign.",
    startDate: "2025-07-01",
    endDate: "2025-07-15",
    rewardAmount: "50 MANA",
    status: "approved",
    officialLink: "https://decentraland.org/airdrop",
    contactEmail: "airdrop@decentraland.org",
    imageUrl: "/placeholder.svg?height=64&width=64&text=MANA",
    slug: "decentraland-mana-airdrop",
  },
  {
    id: "airdrop-2",
    name: "Polygon (MATIC) Community Airdrop",
    description: "Join the Polygon community airdrop to get a share of the MATIC distribution.",
    startDate: "2025-07-20",
    endDate: "2025-08-05",
    rewardAmount: "20 MATIC",
    status: "approved",
    officialLink: "https://polygon.technology/airdrop",
    contactEmail: "community@polygon.technology",
    imageUrl: "/placeholder.svg?height=64&width=64&text=MATIC",
    slug: "polygon-matic-airdrop",
  },
  {
    id: "airdrop-3",
    name: "Solana (SOL) Ecosystem Grant",
    description: "A special airdrop for early contributors to the Solana ecosystem.",
    startDate: "2025-08-10",
    endDate: "2025-08-25",
    rewardAmount: "0.5 SOL",
    status: "approved",
    officialLink: "https://solana.com/grants",
    contactEmail: "grants@solana.com",
    imageUrl: "/placeholder.svg?height=64&width=64&text=SOL",
    slug: "solana-sol-airdrop",
  },
  // Example of an upcoming airdrop
  {
    id: "airdrop-4",
    name: "Chainlink (LINK) Oracle Airdrop",
    description: "Earn LINK by participating in the Chainlink oracle airdrop program.",
    startDate: "2025-09-01", // Future date
    endDate: "2025-09-15",
    rewardAmount: "5 LINK",
    status: "approved",
    officialLink: "https://chainlinklabs.com/airdrop",
    contactEmail: "info@chainlinklabs.com",
    imageUrl: "/placeholder.svg?height=64&width=64&text=LINK",
    slug: "chainlink-link-airdrop",
  },
  // Example of an ended airdrop
  {
    id: "airdrop-5",
    name: "Avalanche (AVAX) Early Adopter",
    description: "Airdrop for early users of the Avalanche network.",
    startDate: "2025-06-01",
    endDate: "2025-06-15", // Past date
    rewardAmount: "2 AVAX",
    status: "approved",
    officialLink: "https://avax.network/airdrop",
    contactEmail: "support@avax.network",
    imageUrl: "/placeholder.svg?height=64&width=64&text=AVAX",
    slug: "avalanche-avax-airdrop",
  },
]

export const getApprovedAirdrops = (): Airdrop[] => {
  return allAirdrops.filter((airdrop) => airdrop.status === "approved")
}

export const getAirdropBySlug = (slug: string): Airdrop | null => {
  return allAirdrops.find((airdrop) => airdrop.slug === slug) || null
}

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

export const getAirdropStatus = (startDate: string, endDate: string): "Live" | "Ended" | "Upcoming" => {
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

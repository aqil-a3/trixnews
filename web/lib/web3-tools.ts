// lib/web3-tools.ts

export interface Web3Tool {
  name: string
  description: string
  slug: string // Unique identifier for the tool
  category: string // e.g., "Crypto Wallets", "DEX", "NFT Marketplaces", "DeFi Protocols"
  officialLink: string // URL to the official website
  supportedBlockchains?: string[] // e.g., ["Ethereum", "Polygon", "Solana"]
  keyFeatures?: string[] // e.g., ["Non-custodial", "dApp Integration"]
  imageUrl?: string // Optional: for tool logo/icon
}

export const allWeb3Tools: Web3Tool[] = [
  {
    name: "MetaMask",
    description: "A popular non-custodial crypto wallet for interacting with decentralized applications (dApps).",
    slug: "metamask",
    category: "Crypto Wallets",
    officialLink: "https://metamask.io/",
    supportedBlockchains: ["Ethereum", "Polygon", "BNB Chain", "Arbitrum", "Optimism"],
    keyFeatures: ["Browser Extension", "Mobile App", "dApp Integration", "Token Swaps"],
    imageUrl: "/placeholder.svg?height=64&width=64&text=MM",
  },
  {
    name: "Uniswap",
    description: "The leading decentralized exchange (DEX) protocol for token trading on Ethereum.",
    slug: "uniswap",
    category: "DEX",
    officialLink: "https://uniswap.org/",
    supportedBlockchains: ["Ethereum", "Polygon", "Arbitrum", "Optimism", "BNB Chain"],
    keyFeatures: ["Token Swaps", "Liquidity Provision", "Low Fees"],
    imageUrl: "/placeholder.svg?height=64&width=64&text=UNI",
  },
  {
    name: "OpenSea",
    description: "The world's largest NFT marketplace for buying, selling, and discovering digital collectibles.",
    slug: "opensea",
    category: "NFT Marketplaces",
    officialLink: "https://opensea.io/",
    supportedBlockchains: ["Ethereum", "Polygon", "Klaytn", "Solana"],
    keyFeatures: ["Wide Range of Collections", "Auctions & Offers", "Create NFTs"],
    imageUrl: "/placeholder.svg?height=64&width=64&text=OS",
  },
  {
    name: "Aave",
    description: "A decentralized lending and borrowing protocol that allows users to earn interest or borrow assets.",
    slug: "aave",
    category: "DeFi Protocols",
    officialLink: "https://aave.com/",
    supportedBlockchains: ["Ethereum", "Polygon", "Avalanche", "Arbitrum", "Optimism"],
    keyFeatures: ["Flash Loans", "Flexible Interest Rates", "Multi-chain"],
    imageUrl: "/placeholder.svg?height=64&width=64&text=AAVE",
  },
  {
    name: "Etherscan",
    description:
      "A block explorer for the Ethereum network, allowing users to track transactions, addresses, and smart contracts.",
    slug: "etherscan",
    category: "Blockchain Analytics Tools",
    officialLink: "https://etherscan.io/",
    supportedBlockchains: ["Ethereum"],
    keyFeatures: ["Transaction Tracking", "Address Analysis", "Contract Verification"],
    imageUrl: "/placeholder.svg?height=64&width=64&text=ETH",
  },
  {
    name: "Dune Analytics",
    description:
      "A powerful on-chain data and analytics platform for creating custom dashboards and analyzing blockchain data.",
    slug: "dune-analytics",
    category: "Blockchain Analytics Tools",
    officialLink: "https://dune.com/",
    supportedBlockchains: ["Ethereum", "Polygon", "Optimism", "Arbitrum", "Solana", "BNB Chain"],
    keyFeatures: ["Custom Dashboards", "SQL Queries", "Real-time Data"],
    imageUrl: "/placeholder.svg?height=64&width=64&text=Dune",
  },
  {
    name: "Ledger Nano S Plus",
    description: "A leading hardware wallet for securely storing your crypto assets offline.",
    slug: "ledger-nano-s-plus",
    category: "Crypto Wallets",
    officialLink: "https://www.ledger.com/",
    supportedBlockchains: ["Multi-chain"],
    keyFeatures: ["Offline Security", "Thousands of Coin Support", "Easy Interface"],
    imageUrl: "/placeholder.svg?height=64&width=64&text=Ledger",
  },
  {
    name: "CoinGecko",
    description: "A comprehensive crypto price tracking and market data platform.",
    slug: "coingecko",
    category: "Market Analysis Tools",
    officialLink: "https://www.coingecko.com/",
    supportedBlockchains: [],
    keyFeatures: ["Real-time Prices", "Market Cap", "Historical Data", "Portfolio"],
    imageUrl: "/placeholder.svg?height=64&width=64&text=CG",
  },
]

export const getToolBySlug = (slug: string) => {
  return allWeb3Tools.find((tool) => tool.slug === slug) || null
}

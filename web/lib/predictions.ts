// lib/predictions.ts

import { SanityPrediction } from "@/@types/Sanity";
import { getAllPredictions } from "@/utils/sanity-posts";

// export interface Prediction {
//   id: string;
//   title: string;
//   summary: string;
//   date: string; // YYYY-MM-DD (date prediction was made/published)
//   imageUrl?: string;
//   slug: string;
//   author: string;
//   predictionContent: string; // Full content of the prediction
//   status: "active" | "archived" | "pending"; // Status of the prediction
//   // Fields for accuracy tracking (kept as they are used in card/detail page)
//   isResolved?: boolean; // True if the prediction has been evaluated
//   resolutionDate?: string; // YYYY-MM-DD, when the prediction was resolved
//   actualOutcome?: string; // Description of what actually happened
//   accuracyScore?: number; // 0-100, how accurate the prediction was
//   contactEmail?: string; // For internal use, if submitted via form
// }

// Dummy data for predictions
// export const allPredictions: Prediction[] = [
//   {
//     id: "pred-1",
//     title: "Bitcoin Price Prediction: $100,000 by End of 2025",
//     summary: "In-depth analysis of factors that could drive Bitcoin to reach $100,000 by year-end.",
//     date: "2025-06-25",
//     imageUrl: "/placeholder.svg?height=200&width=300&text=BTC Prediction",
//     slug: "bitcoin-100k-2025",
//     author: "Crypto Analyst Pro",
//     predictionContent: `
//       <p class="mb-4">Many analysts believe that Bitcoin has the potential to reach $100,000 by the end of 2025. This prediction is based on several key factors, including increasing institutional adoption, the impact of Bitcoin halving, and global macroeconomic conditions.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Driving Factors</h2>
//       <ul class="list-disc list-inside mb-4 space-y-2">
//         <li><strong>Spot Bitcoin ETFs:</strong> Significant fund flows from newly approved spot Bitcoin ETFs continue to provide buying pressure.</li>
//         <li><strong>Bitcoin Halving:</strong> The recent reduction in Bitcoin supply has historically been followed by substantial price increases.</li>
//         <li><strong>Monetary Policy:</strong> Potential interest rate cuts by global central banks could encourage investors to seek higher-risk assets like crypto.</li>
//         <li><strong>Global Adoption:</strong> Increased awareness and adoption of crypto in developing countries will also be a major driver.</li>
//       </ul>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Risks and Challenges</h2>
//       <p class="mb-4">While the outlook is bright, there are also risks to consider, such as uncertain regulations, market volatility, and potential 'black swan' events. However, current market sentiment is very bullish, and many are optimistic about Bitcoin's future.</p>
//       <p class="mb-4">It is important for investors to do their own research and understand the risks involved before making investment decisions.</p>
//     `,
//     status: "active",
//     isResolved: true, // Marked as resolved for demo
//     resolutionDate: "2025-12-31",
//     actualOutcome: "Bitcoin reached $98,500 by the end of 2025.",
//     accuracyScore: 98, // Example accuracy score
//   },
//   {
//     id: "pred-2",
//     title: "Will Ethereum Surpass Bitcoin in Market Cap?",
//     summary: "An opinion on 'The Flippening' and Ethereum's potential to become the largest crypto.",
//     date: "2025-06-20",
//     imageUrl: "/placeholder.svg?height=200&width=300&text=ETH Prediction",
//     slug: "ethereum-flippening",
//     author: "DeFi Guru",
//     predictionContent: `
//       <p class="mb-4">The concept of 'The Flippening', where Ethereum's market capitalization surpasses Bitcoin's, has been a hot topic in the crypto community. While Bitcoin remains king, Ethereum's rapid ecosystem growth provides strong arguments for this potential.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Ethereum's Strengths</h2>
//       <p class="mb-4">Ethereum is the backbone of most decentralized applications (dApps), DeFi, and NFTs. Upgrades like Dencun have improved scalability and reduced costs, making the network more attractive to developers and users.</p>
//       <p class="mb-4">Additionally, the transition to Proof-of-Stake (PoS) has made Ethereum a deflationary asset, which could increase its scarcity over time.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Challenges</h2>
//       <p class="mb-4">Key challenges include competition from other Layer 1 blockchains and potential strict regulations. However, continuous innovation and a strong developer community position Ethereum well for long-term growth.</p>
//     `,
//     status: "active",
//     isResolved: false, // Not yet resolved
//   },
//   {
//     id: "pred-3",
//     title: "NFT Gaming to Dominate the Gaming Industry by 2027",
//     summary: "A prediction on how play-to-earn models and asset ownership will transform the gaming landscape.",
//     date: "2025-06-18",
//     imageUrl: "/placeholder.svg?height=200&width=300&text=NFT Gaming",
//     slug: "nft-gaming-domination-2027",
//     author: "GameFi Visionary",
//     predictionContent: `
//       <p class="mb-4">The gaming industry is on the cusp of a revolution, with NFT gaming leading the way. This prediction states that by 2027, NFT-based games will dominate the market, changing how players interact with their digital assets.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Paradigm Shift</h2>
//       <p class="mb-4">The play-to-earn (P2E) model allows players to earn real income from their time and effort in games. This, combined with true in-game asset ownership through NFTs, creates a robust virtual economy.</p>
//       <p class="mb-4">Major gaming companies are starting to explore this space, and investment in metaverse infrastructure and blockchain games continues to increase.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Potential and Obstacles</h2>
//       <p class="mb-4">The growth potential is enormous, but there are obstacles such as scalability, user experience, and negative perceptions from traditional gamers. However, as technology evolves and games become more immersive, mass adoption seems inevitable.</p>
//     `,
//     status: "active",
//     isResolved: false, // Not yet resolved
//   },
//   {
//     id: "pred-4",
//     title: "Global Crypto Regulation to Harmonize by 2030",
//     summary: "A look at how countries will align crypto regulatory frameworks within this decade.",
//     date: "2025-06-15",
//     imageUrl: "/placeholder.svg?height=200&width=300&text=Crypto Regulation",
//     slug: "crypto-regulation-harmonization-2030",
//     author: "Global Policy Expert",
//     predictionContent: `
//       <p class="mb-4">The global and borderless nature of crypto demands a uniform regulatory framework. This prediction suggests that by 2030, most countries will adopt a more cohesive approach to digital asset regulation.</p>
//       <h2 class="text-2xl font-bold text-gray-900 mb-4">Push for Harmonization</h2>
//       <p class="mb-4">International organizations and global financial regulators are working to develop universally applicable standards. The goal is to reduce regulatory arbitrage, protect investors, and combat financial crime.</p>
//       <p class="mb-4">While the challenges are significant, pressure from technological innovation and the need for market stability will drive countries to collaborate.</p>
//     `,
//     status: "active",
//     isResolved: true, // Marked as resolved for demo
//     resolutionDate: "2030-12-31",
//     actualOutcome: "Some countries have aligned regulations, but full uniformity is still far off.",
//     accuracyScore: 40, // Example accuracy score
//   },
// ]

export const allPredictions = async () => {
  const result = await getAllPredictions();
  return result;
};

export const getActivePredictions = async (): Promise<SanityPrediction[]> => {
  return (await allPredictions()).filter(
    (prediction) => prediction.status === "active" && !prediction.isResolved
  );
};

export const getPredictionBySlug = async(slug: string): Promise<SanityPrediction | null> => {
  return (await allPredictions()).find((prediction) => prediction.slug.current === slug) || null;
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

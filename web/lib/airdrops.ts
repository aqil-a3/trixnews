// lib/airdrops.ts

import { Airdrop } from "@/@types/Posts";
import { convertSanityAirdrop } from "@/utils/sanity-convert";
import { getAllAirdrops } from "@/utils/sanity-posts";
import { apiUrl, sharedSecretKey } from "./variables";

// Dummy data for approved airdrops
// export const allAirdrops: Airdrop[] = [
//   {
//     id: "airdrop-1",
//     name: "Decentraland (MANA) Airdrop",
//     description: "Get free MANA tokens by participating in the Decentraland airdrop campaign.",
//     startDate: "2025-07-01",
//     endDate: "2025-07-15",
//     rewardAmount: "50 MANA",
//     status: "approved",
//     officialLink: "https://decentraland.org/airdrop",
//     contactEmail: "airdrop@decentraland.org",
//     imageUrl: "/placeholder.svg?height=64&width=64&text=MANA",
//     slug: "decentraland-mana-airdrop",
//   },
//   {
//     id: "airdrop-2",
//     name: "Polygon (MATIC) Community Airdrop",
//     description: "Join the Polygon community airdrop to get a share of the MATIC distribution.",
//     startDate: "2025-07-20",
//     endDate: "2025-08-05",
//     rewardAmount: "20 MATIC",
//     status: "approved",
//     officialLink: "https://polygon.technology/airdrop",
//     contactEmail: "community@polygon.technology",
//     imageUrl: "/placeholder.svg?height=64&width=64&text=MATIC",
//     slug: "polygon-matic-airdrop",
//   },
//   {
//     id: "airdrop-3",
//     name: "Solana (SOL) Ecosystem Grant",
//     description: "A special airdrop for early contributors to the Solana ecosystem.",
//     startDate: "2025-08-10",
//     endDate: "2025-08-25",
//     rewardAmount: "0.5 SOL",
//     status: "approved",
//     officialLink: "https://solana.com/grants",
//     contactEmail: "grants@solana.com",
//     imageUrl: "/placeholder.svg?height=64&width=64&text=SOL",
//     slug: "solana-sol-airdrop",
//   },
//   // Example of an upcoming airdrop
//   {
//     id: "airdrop-4",
//     name: "Chainlink (LINK) Oracle Airdrop",
//     description: "Earn LINK by participating in the Chainlink oracle airdrop program.",
//     startDate: "2025-09-01", // Future date
//     endDate: "2025-09-15",
//     rewardAmount: "5 LINK",
//     status: "approved",
//     officialLink: "https://chainlinklabs.com/airdrop",
//     contactEmail: "info@chainlinklabs.com",
//     imageUrl: "/placeholder.svg?height=64&width=64&text=LINK",
//     slug: "chainlink-link-airdrop",
//   },
//   // Example of an ended airdrop
//   {
//     id: "airdrop-5",
//     name: "Avalanche (AVAX) Early Adopter",
//     description: "Airdrop for early users of the Avalanche network.",
//     startDate: "2025-06-01",
//     endDate: "2025-06-15", // Past date
//     rewardAmount: "2 AVAX",
//     status: "approved",
//     officialLink: "https://avax.network/airdrop",
//     contactEmail: "support@avax.network",
//     imageUrl: "/placeholder.svg?height=64&width=64&text=AVAX",
//     slug: "avalanche-avax-airdrop",
//   },
// ]

export const allAirdrops = async () => {
  const result = [];
  const raw = await getAllAirdrops();

  for (const r of raw) {
    result.push(convertSanityAirdrop(r));
  }
  return result;
};

export const getApprovedAirdrops = async (): Promise<Airdrop[]> => {
  const res = await fetch(`${apiUrl}/airdrop/approved`, {
    headers: {
      "X-Auth-Secret": sharedSecretKey,
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch approved airdrops: ${res.statusText}`);
  }

  const raw: any[] = await res.json();

  const data: Airdrop[] = raw.map((item) => ({
    id: item.id,
    name: item.name,
    description: item.description,
    startDate: item.startDate?.split("T")[0] ?? "",
    endDate: item.endDate?.split("T")[0] ?? "",
    rewardAmount: item.rewardAmount,
    status: item.status,
    officialLink: item.officialLink,
    contactEmail: item.contactEmail,
    imageUrl: item.image_url ?? undefined,
    slug: item.slug,
  }));

  return data;
};

export const getAirdropBySlug = async (
  slug: string
): Promise<Airdrop | null> => {
  return (await allAirdrops()).find((airdrop) => airdrop.slug === slug) || null;
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export const getAirdropStatus = (
  startDate: string,
  endDate: string
): "Live" | "Ended" | "Upcoming" => {
  const now = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (now < start) {
    return "Upcoming";
  } else if (now >= start && now <= end) {
    return "Live";
  } else {
    return "Ended";
  }
};

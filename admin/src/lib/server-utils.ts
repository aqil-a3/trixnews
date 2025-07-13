import { Airdrop, DBAirdrop, Presale } from "@/@types/Posts";
import { apiGet } from "./api-server";

const isDevelopment = process.env.NODE_ENV === "development";
export const secretApi = isDevelopment
  ? "http://localhost:3001"
  : process.env.SECRET_API_ROUTE;

export function mapDbToAirdrop(record: DBAirdrop): Airdrop {
  return {
    _id: record.id,
    _type: "airdrop",
    id: record.id,
    name: record.name,
    description: record.description,
    startDate: record.start_date,
    endDate: record.end_date,
    rewardAmount: record.reward_amount,
    status: record.status,
    officialLink: record.official_link,
    contactEmail: record.contact_email,
    mainImage: record.image_url
      ? {
          _type: "image",
          asset: {
            _ref: record.image_url,
            _type: "reference",
          },
        }
      : undefined,
    slug: {
      _type: "slug",
      current: record.slug,
    },
  };
}

export async function getAllAirdrops(): Promise<Airdrop[]> {
  try {
    const { data } = await apiGet<DBAirdrop[]>(`${secretApi}/airdrop`);
    const result = [];

    for (const d of data) {
      result.push(mapDbToAirdrop(d));
    }

    return result as Airdrop[];
  } catch (error) {
    throw error;
  }
}

export async function getAllPresales(): Promise<Presale[]> {
  try {
    const response = await apiGet(`${secretApi}/ico-presale`);

    return response.data as Presale[];
  } catch (error) {
    throw error;
  }
}

export async function getPresaleById(id: string): Promise<Presale> {
  try {
    const response = await apiGet(`${secretApi}/ico-presale/${id}`);
    return response.data as Presale;
  } catch (error) {
    throw error;
  }
}

export async function getAirdropById(id: string): Promise<Airdrop> {
  try {
    const response = await apiGet(`${secretApi}/airdrop/${id}`);
    return response.data as Airdrop;
  } catch (error) {
    throw error;
  }
}

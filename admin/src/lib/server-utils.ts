import { Presale } from "@/@types/Posts";
import { apiGet } from "./api-server";

const isDevelopment = process.env.NODE_ENV === "development";
export const secretApi = isDevelopment
  ? "http://localhost:3001"
  : process.env.SECRET_API_ROUTE;

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

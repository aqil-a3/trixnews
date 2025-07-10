import axios from "axios";

const sharedSecret = process.env.SHARED_SECRET as string;
const baseURL = process.env.SECRET_API as string; // atau langsung ganti `secretApi`

const apiClient = axios.create({
  baseURL,
  headers: {
    "X-Auth-Secret": sharedSecret,
  },
});

// Helper untuk POST
export function apiPost<T = unknown>(
  url: string,
  body?: unknown
): Promise<{ data: T }> {
  return apiClient.post(url, body);
}

// Helper untuk GET
export function apiGet<T = unknown>(url: string): Promise<{ data: T }> {
  return apiClient.get(url);
}

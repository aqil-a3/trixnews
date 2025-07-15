const isDevelopment = process.env.NODE_ENV === "development";

export const loginPageUrl = `${process.env.NEXT_PUBLIC_ADMIN_URL}`;
export const sharedSecretKey = `${process.env.SHARED_SECRET}`;

export const apiUrl = isDevelopment
  ? "http://localhost:3001"
  : `${process.env.SECRET_API_URL}`;

const isDevelopment = process.env.NODE_ENV === "development";

export const loginPageUrl = "https://trixnews-5oef.vercel.app/login";
export const sharedSecretKey = `${process.env.SHARED_SECRET}`;

export const apiUrl = isDevelopment ? "http://localhost:3001" : "";

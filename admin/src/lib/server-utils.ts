const isDevelopment = process.env.NODE_ENV === "development";
export const secretApi = isDevelopment
  ? "http://localhost:3001/api"
  : `${process.env.SECRET_API_ROUTE}/api`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
    avatar_url?: string;
  }

  interface Session {
    user: {
      name?: string;
      email?: string;
      image?: string;
      role?: string;
      avatar_url?: string;
    };
  }

  interface JWT {
    role?: string;
    avatar_url?: string;
  }
}

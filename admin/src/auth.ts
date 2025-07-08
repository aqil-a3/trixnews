import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import axios, { isAxiosError } from "axios";
import { secretApi } from "./lib/server-utils";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      try {
        const { data } = await axios.post(
          `${secretApi}/users`,
          {
            email: user.email,
          },
          {
            headers: {
              "X-Auth-Secret": process.env.SHARED_SECRET,
            },
          }
        );

        if (!data) return false;

        return true;
      } catch (error) {
        if (isAxiosError(error)) {
          console.error(error);
        }
        console.error(error);
        return false;
      }
    },
  },
  pages: {
    error: "/auth/error",
  },
});

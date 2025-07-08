import NextAuth, { User } from "next-auth";
import Google from "next-auth/providers/google";
import axios, { isAxiosError } from "axios";
import { secretApi } from "./lib/server-utils";
import { AdminUser } from "./@types/Auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      const admin = await getAdminInfo(user);

      if (!admin) return false;

      user.role = admin.role;
      user.avatar_url = admin.avatar_url ?? user.avatar_url;

      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.avatar_url = user.avatar_url;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.avatar_url = token.avatar_url as string;
      session.user.role = token.role as string;

      return session;
    },
  },
  pages: {
    error: "/auth/error",
  },
});

const getAdminInfo = async (user: User): Promise<AdminUser | null> => {
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

    if (!data) return null;

    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error);
    }
    console.error(error);
    return null;
  }
};

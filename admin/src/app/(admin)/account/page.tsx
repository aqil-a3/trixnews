import { AdminUser } from "@/@types/Auth";
import AccountTemplate from "@/components/templates/admin/AccountTemplate";
import { secretApi } from "@/lib/server-utils";
import axios from "axios";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounts",
};

const getAllUsers = async (): Promise<AdminUser[]> => {
  try {
    const { data } = await axios.get(`${secretApi}/users`, {
      headers: {
        "X-Auth-Secret": process.env.SHARED_SECRET,
      },
    });

    return data as AdminUser[];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default async function AccountPage() {
  const users = await getAllUsers();
  return <AccountTemplate users={users} />;
}

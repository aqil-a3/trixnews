"use client";

import { AdminUser } from "@/@types/Auth";
import MainContainer from "@/components/layouts/MainContainer";
import { adminUserColumns } from "@/components/organisms/Account/columns";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import AccountProvider from "@/components/providers/AccountProvider";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export default function AccountTemplate({ users }: { users: AdminUser[] }) {
  return (
    <AccountProvider users={users}>
      <MainContainer className="py-4">
        <div>
          <h1 className="text-2xl font-bold">Manage Admin Accounts</h1>
          <p className="text-sm text-muted-foreground">
            View, create, edit, and delete admin users in the system.
          </p>
        </div>

        <AddNewUserButton />

        <DataTable columns={adminUserColumns} data={users} />
      </MainContainer>
    </AccountProvider>
  );
}

const AddNewUserButton = () => {
  const { data } = useSession();
  const user = data?.user;

  if (!user) return <Skeleton className="h-[36px] w-[140px] rounded-2xl" />;
  const role = user.role!.toLowerCase();
  const isHidden = role !== "admin" && role !== "developer";

  if (isHidden) return null;

  return (
    <div className="mb-4 flex justify-end">
      <Link href="/account/new">
        <Button className="flex gap-2">
          <Plus className="w-4 h-4" />
          Add New User
        </Button>
      </Link>
    </div>
  );
};

"use client";

import { AdminUser } from "@/@types/Auth";
import MainContainer from "@/components/layouts/MainContainer";
import { adminUserColumns } from "@/components/organisms/Account/colums";
import { DataTable } from "@/components/ui/data-table";

export default function AccountTemplate({ users }: { users: AdminUser[] }) {
  return (
    <MainContainer>
      <DataTable columns={adminUserColumns} data={users} />
    </MainContainer>
  );
}

"use client";

import MainContainer from "@/components/layouts/MainContainer";
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/table-core";

interface EntityTableTemplateProps<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
  HeaderComponent: React.ComponentType;
}

export default function EntityTableTemplate<TData, TValue>({
  data,
  columns,
  HeaderComponent,
}: EntityTableTemplateProps<TData, TValue>) {
  return (
    <MainContainer>
      <HeaderComponent />
      <DataTable data={data} columns={columns} />
    </MainContainer>
  );
}

"use client";

import { Presale } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import PresalesHeader from "@/components/organisms/Presales/Header";
import { presaleColumns } from "@/components/organisms/Presales/presaleColumns";
import { DataTable } from "@/components/ui/data-table";


export default function PresalesTemplate({ presales }: { presales: Presale[] }) {
  return (
      <MainContainer>
        <PresalesHeader />
        <DataTable data={presales} columns={presaleColumns} />
      </MainContainer>
  );
}

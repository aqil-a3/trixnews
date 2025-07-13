"use client";

import { Presale } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import EntityTableHeader from "@/components/organisms/header/EntityTableHeader";
import { presaleColumns } from "@/components/organisms/columnTable/presaleColumns";
import EntityTableTemplate from "../reuseability/EntityTableTemplate";

const Header = () => {
  return (
    <EntityTableHeader
      description="Manage and organize presales to classify your content."
      newLink="/presales/add"
      title="Presales"
    />
  );
};

export default function PresalesTemplate({
  presales,
}: {
  presales: Presale[];
}) {
  return (
    <MainContainer>
      <EntityTableTemplate
        HeaderComponent={Header}
        columns={presaleColumns}
        data={presales}
      />
    </MainContainer>
  );
}

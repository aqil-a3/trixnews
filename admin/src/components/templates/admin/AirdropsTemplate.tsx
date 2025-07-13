"use client";

import { Airdrop } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import EntityTableTemplate from "../reuseability/EntityTableTemplate";
import EntityTableHeader from "@/components/organisms/header/EntityTableHeader";
import { airdropColumns } from "@/components/organisms/columnTable/airdropColumns";

const Header = () => {
  return (
    <EntityTableHeader
      title="Airdrops"
      description="Manage and organize your content airdrops"
      newLink="/airdrops/add"
    />
  );
};

export default function AirdropsTemplate({
  airdrops,
}: {
  airdrops: Airdrop[];
}) {
  return (
    <MainContainer>
      <EntityTableTemplate
        HeaderComponent={Header}
        columns={airdropColumns}
        data={airdrops}
      />
    </MainContainer>
  );
}

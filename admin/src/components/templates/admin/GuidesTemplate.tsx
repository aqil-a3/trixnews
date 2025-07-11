"use client";

import MainContainer from "@/components/layouts/MainContainer";
import EntityTableHeader from "@/components/organisms/header/EntityTableHeader";
import EntityTableTemplate from "../reuseability/EntityTableTemplate";
import { Guide } from "@/@types/Posts";
import { guideColumns } from "@/components/organisms/columnTable/guidesColumns";

const Header = () => {
  return (
    <EntityTableHeader
      description="Manage and organize your content guides."
      title="Guides"
      newLink="/studio/desk/guide"
    />
  );
};

export default function GuidesTemplate({ guides }: { guides: Guide[] }) {
  return (
    <MainContainer>
      <EntityTableTemplate
        HeaderComponent={Header}
        columns={guideColumns}
        data={guides}
      />
    </MainContainer>
  );
}

"use client";

import { Tag } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import EntityTableHeader from "@/components/organisms/header/EntityTableHeader";
import { tagColumns } from "@/components/organisms/columnTable/tagColumns";
import EntityTableTemplate from "../reuseability/EntityTableTemplate";

const Header = () => {
  return (
    <EntityTableHeader
      description="Manage and organize your content tags."
      title="Tags"
      newLink="/studio/desk/tag"
    />
  );
};

export default function TagsTemplate({ tags }: { tags: Tag[] }) {
  return (
    <MainContainer>
      <EntityTableTemplate
        HeaderComponent={Header}
        columns={tagColumns}
        data={tags}
      />
    </MainContainer>
  );
}

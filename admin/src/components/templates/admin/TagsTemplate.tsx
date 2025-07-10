"use client";

import { Tag } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import TagsHeader from "@/components/organisms/Tables/Header";
import { tagColumns } from "@/components/organisms/Tables/tagColumns";
import { DataTable } from "@/components/ui/data-table";


export default function TagsTemplate({ tags }: { tags: Tag[] }) {
  return (
      <MainContainer>
        <TagsHeader />
        <DataTable data={tags} columns={tagColumns} />
      </MainContainer>
  );
}

"use client";

import { Category } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import { categoryColumns } from "@/components/organisms/columnTable/categoryColumns";
import EntityTableHeader from "@/components/organisms/header/EntityTableHeader";
import EntityTableTemplate from "../reuseability/EntityTableTemplate";

const Header = () => {
  return (
    <EntityTableHeader
      description="Manage and organize your content categories."
      title="Categories"
      newLink="/studio/deskt/category"
    />
  );
};

export default function CategoriesTemplate({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <MainContainer>
      <EntityTableTemplate
        HeaderComponent={Header}
        columns={categoryColumns}
        data={categories}
      />
    </MainContainer>
  );
}

"use client";

import { Category } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import { categoryColumns } from "@/components/organisms/Categories/categoryColumns";
import CategoriesHeader from "@/components/organisms/Categories/Header";
import { DataTable } from "@/components/ui/data-table";


export default function CategoriesTemplate({ categories }: { categories: Category[] }) {
  return (
      <MainContainer>
        <CategoriesHeader />
        <DataTable data={categories} columns={categoryColumns} />
      </MainContainer>
  );
}

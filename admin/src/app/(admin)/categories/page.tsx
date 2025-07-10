import CategoriesTemplate from "@/components/templates/admin/CategoriesTemplate";
import { getAllCategory } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
};

export default async function Categories() {
  const categories = await getAllCategory();
  
  return <CategoriesTemplate categories={categories} />;
}

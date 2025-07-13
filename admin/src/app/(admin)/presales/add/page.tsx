import AddPresaleTemplate from "@/components/templates/admin/PresalesAddTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Add Presale",
};

export default function AddPresalePage() {
  return <AddPresaleTemplate />;
}

import NewAccountTemplate from "@/components/templates/admin/AccountNewTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Account",
};

export default function NewAccountPage() {
  return <NewAccountTemplate />;
}

import DashboardTemplate from "@/components/templates/admin/DashboardTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return <DashboardTemplate />;
}

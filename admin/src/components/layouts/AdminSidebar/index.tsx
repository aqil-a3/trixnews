import { Sidebar } from "@/components/ui/sidebar";
import AdminSidebarFooter from "./Footer";
import AdminSidebarHeader from "./Header";
import AdminSidebarContent from "./Content";

export function AdminSidebar() {
  return (
    <Sidebar>
      <AdminSidebarHeader />
      <AdminSidebarContent />
      <AdminSidebarFooter />
    </Sidebar>
  );
}

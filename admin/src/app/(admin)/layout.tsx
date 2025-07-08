import { auth } from "@/auth";
import AdminHeader from "@/components/layouts/AdminHeader";
import { AdminSidebar } from "@/components/layouts/AdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <SessionProvider>
      <SidebarProvider>
        <AdminSidebar />
        <main className="w-full">
          <AdminHeader />
          {children}
        </main>
      </SidebarProvider>
    </SessionProvider>
  );
}

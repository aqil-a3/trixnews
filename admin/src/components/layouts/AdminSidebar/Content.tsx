"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  FileText,
  Tag,
  Folder,
  Image as IconImage,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Posts", href: "/posts", icon: FileText },
  { label: "Categories", href: "/categories", icon: Folder },
  { label: "Tags", href: "/tags", icon: Tag },
  { label: "Media", href: "/media", icon: IconImage },
];

export default function AdminSidebarContent() {
  const pathname = usePathname();

  return (
    <SidebarContent>
      {/* Sanity Studio */}
      <SidebarGroup>
        <SidebarGroupLabel>Studio</SidebarGroupLabel>
        <Link
          href={"/studio"}
          target="_blank"
          className="flex px-3 py-2 w-full justify-start gap-2 bg-muted border border-dashed hover:scale-[1.02] transition-all text-sm font-medium"
        >
          <ExternalLink className="w-4 h-4 text-primary my-auto" />
          <span className="truncate">Open Sanity Studio</span>
        </Link>
      </SidebarGroup>

      {/* Navigation */}
      <SidebarGroup>
        <SidebarGroupLabel>Navigation</SidebarGroupLabel>
        <SidebarMenu>
          {sidebarLinks.map(({ label, href, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <SidebarMenuItem key={href}>
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm transition",
                    isActive
                      ? "bg-muted font-semibold text-primary"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
  );
}

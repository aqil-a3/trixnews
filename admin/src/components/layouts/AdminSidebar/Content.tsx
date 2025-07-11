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
  ExternalLink,
  User,
  Book,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { label: "Account", href: "/account", icon: User },
  { label: "Posts", href: "/posts", icon: FileText },
  { label: "Categories", href: "/categories", icon: Folder },
  { label: "Tags", href: "/tags", icon: Tag },
  { label: "Presales", href: "/presales", icon: Tag },
  { label: "Airdrops", href: "/airdrops", icon: Tag },
  { label: "Guides", href: "/guides", icon: Book },
  { label: "Predictions", href: "/predictions", icon: Book },
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
            const isActive = pathname.startsWith(href);

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

"use client";

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronUp, User2, LogOut, CreditCard, Settings } from "lucide-react";
import { useAdminSidebarFooterLogics } from "./logics";
import { useSession } from "next-auth/react";

export default function AdminSidebarFooter() {
  const { signoutHandler } = useAdminSidebarFooterLogics();
  const session = useSession();

  return (
    <SidebarFooter className="border-t pt-2">
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton className="flex items-center w-full px-3 py-2 rounded-md hover:bg-muted transition text-sm">
                <User2 className="mr-2 h-4 w-4" />
                <span className="truncate">{session.data?.user?.name}</span>
                <ChevronUp className="ml-auto h-4 w-4" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-full min-w-[180px]"
              align="start"
            >
              <DropdownMenuItem className="flex items-center gap-2">
                <Settings className="h-4 w-4 text-muted-foreground" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button
                  onClick={signoutHandler}
                  className="flex items-center gap-2 w-full px-2 py-1.5 text-sm text-red-600 hover:text-red-700 focus:outline-none"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign out</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}

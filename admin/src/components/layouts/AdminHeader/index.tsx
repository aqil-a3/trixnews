"use client"

import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Bell, User2 } from "lucide-react"

export default function AdminHeader() {
  return (
    <header className="w-full border-b bg-white px-6 py-4 shadow-sm">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Left - Logo / Menu */}
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Trixnews Admin</h1>
        </div>

        {/* Right - Actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <User2 className="w-4 h-4" />
            <span>Username</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

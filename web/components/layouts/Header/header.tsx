"use client";

import Link from "next/link";
import SearchInput from "../../search-input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { loginPageUrl } from "@/lib/variables";
import { dropdownLinks, mainNavLinks } from "./links";
import SearchPopover from "./Search";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-2 md:px-6 flex items-center justify-between w-full">
      <div className="flex items-center justify-between gap-4 md:w-auto">
        {/* Mobile Menu Trigger */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4">
              <SheetTitle>trixnews.com</SheetTitle>
              <nav className="flex flex-col gap-4 mt-4">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-primary text-sm uppercase"
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="border-t pt-4 mt-4 flex flex-col gap-4">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Resources
                  </p>
                  {dropdownLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-gray-700 hover:text-primary text-sm uppercase"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                <div className="pt-6">
                  <Link href={loginPageUrl} target="_blank">
                    <Button className="w-full uppercase">Login</Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <Link
        href="/"
        className="text-center text-xl md:text-2xl font-bold text-gray-900"
      >
        trixnews.com
      </Link>

      {/* Main nav (desktop only) */}
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex space-x-6">
          {mainNavLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="text-gray-600 hover:text-primary transition-colors whitespace-nowrap uppercase"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-600 hover:text-primary transition-colors whitespace-nowrap focus:outline-none uppercase">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {dropdownLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link href={link.href} className="uppercase">
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>
      </nav>

      <div className="block md:hidden">
        <SearchPopover />
      </div>

      {/* Search + Login (desktop only) */}
      <div className="hidden md:flex flex-shrink-0 items-center gap-4">
        <SearchInput />
        <Button>
          <Link href={loginPageUrl} target="_blank">
            Login
          </Link>
        </Button>
      </div>
    </header>
  );
}

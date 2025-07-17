"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Search } from "lucide-react";

export default function SearchPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size={"icon"} variant={"ghost"}>
          <Search />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-screen space-y-2">
        <form action="/search" method="get"></form>
        <Label htmlFor="search">Search Anything</Label>
        <Input id="search" name="q" type="text" placeholder="Search anything..." />
      </PopoverContent>
    </Popover>
  );
}

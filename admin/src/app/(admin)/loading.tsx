"use client";

import MainContainer from "@/components/layouts/MainContainer";
import { Loader2 } from "lucide-react";

export default function AccountLoading() {
  return (
    <MainContainer className="flex flex-col items-center justify-center h-[80vh] text-muted-foreground animate-fade-in">
      <Loader2 className="w-8 h-8 animate-spin mb-4" />
      <p className="text-sm">Loading...</p>
    </MainContainer>
  );
}

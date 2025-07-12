"use client";
import { EventRegistryNewsItem } from "@/@types/Posts";
import React, { createContext, useContext } from "react";

interface CryptoNewsContextState {
  articles: EventRegistryNewsItem[];
}

const CryptoNewsContext = createContext<CryptoNewsContextState>(
  {} as CryptoNewsContextState
);

interface CryptoNewsProviderProps {
  articles: EventRegistryNewsItem[];
  children: React.ReactNode;
}

export default function CryptoNewsProvider({
  articles,
  children,
}: CryptoNewsProviderProps) {
  const value: CryptoNewsContextState = {
    articles,
  };

  return (
    <CryptoNewsContext.Provider value={value}>
      {children}
    </CryptoNewsContext.Provider>
  );
}

export const useCryptoNewsData = () => useContext(CryptoNewsContext);

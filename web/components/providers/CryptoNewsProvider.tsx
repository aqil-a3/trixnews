"use client";
import { EventRegistryNewsItem, PostDetail } from "@/@types/Posts";
import React, { createContext, useContext } from "react";

interface CryptoNewsContextState {
  // articles: EventRegistryNewsItem[];
  allArticles: PostDetail[];
}

const CryptoNewsContext = createContext<CryptoNewsContextState>(
  {} as CryptoNewsContextState
);

interface CryptoNewsProviderProps {
  // articles: EventRegistryNewsItem[];
  allArticles: PostDetail[];
  children: React.ReactNode;
}

export default function CryptoNewsProvider({
  // articles,
  children,
  allArticles
}: CryptoNewsProviderProps) {
  const value: CryptoNewsContextState = {
    // articles,
    allArticles
  };

  return (
    <CryptoNewsContext.Provider value={value}>
      {children}
    </CryptoNewsContext.Provider>
  );
}

export const useCryptoNewsData = () => useContext(CryptoNewsContext);

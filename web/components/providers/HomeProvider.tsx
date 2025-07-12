"use client";
import { Category, PostDetail } from "@/@types/Posts";
import { SanityGuide, SanityWeb3Tool } from "@/@types/Sanity";
import React, { createContext, useContext } from "react";

interface HomeContextState {
  articles: PostDetail[];
  categories: Category[];
  guides: SanityGuide[];
  web3Tools: SanityWeb3Tool[];
}

const HomeContext = createContext<HomeContextState>({} as HomeContextState);

interface HomeProviderProps {
  articles: PostDetail[];
  categories: Category[];
  guides: SanityGuide[];
  web3Tools: SanityWeb3Tool[];
  children: React.ReactNode;
}

export default function HomeProvider({
  articles,
  categories,
  children,
  guides,
  web3Tools
}: HomeProviderProps) {
  const value: HomeContextState = {
    articles,
    categories,
    guides,
    web3Tools
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export const useHomeData = () => useContext(HomeContext);

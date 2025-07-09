"use client";
import { Category, PostDetail, PostSummary } from "@/@types/Posts";
import React, { createContext, useContext } from "react";

interface HomeContextState {
  articles: PostDetail[];
  categories: Category[];
}

const HomeContext = createContext<HomeContextState>({} as HomeContextState);

interface HomeProviderProps {
  articles: PostDetail[];
  categories: Category[];
  children: React.ReactNode;
}

export default function HomeProvider({
  articles,
  categories,
  children,
}: HomeProviderProps) {
  const value: HomeContextState = {
    articles,
    categories,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export const useHomeData = () => useContext(HomeContext);

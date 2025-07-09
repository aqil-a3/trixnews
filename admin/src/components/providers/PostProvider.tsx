import { PostSummary } from "@/@types/Posts";
import React, { createContext, useContext } from "react";

interface PostContextState {
  posts: PostSummary[];
}

const PostContext = createContext<PostContextState>({} as PostContextState);

interface PostProviderProps {
  posts: PostSummary[];
  children: React.ReactNode;
}

export default function PostProvider({ children, posts }: PostProviderProps) {
  const value: PostContextState = {
    posts,
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export const usePostData = () => useContext(PostContext);

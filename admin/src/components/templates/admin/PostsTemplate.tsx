"use client";

import { PostSummary } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import { postSummaryColumns } from "@/components/organisms/Posts/columns";
import PostProvider from "@/components/providers/PostProvider";
import { DataTable } from "@/components/ui/data-table";
import PostsHeader from "@/components/organisms/Posts/Header";

export default function PostsTemplate({ posts }: { posts: PostSummary[] }) {
  return (
    <PostProvider posts={posts}>
      <MainContainer>
        <PostsHeader />

        <DataTable data={posts} columns={postSummaryColumns} />
      </MainContainer>
    </PostProvider>
  );
}

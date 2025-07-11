"use client";

import { PostSummary } from "@/@types/Posts";
import MainContainer from "@/components/layouts/MainContainer";
import { postSummaryColumns } from "@/components/organisms/columnTable/postsColumns";
import EntityTableHeader from "@/components/organisms/header/EntityTableHeader";
import EntityTableTemplate from "../reuseability/EntityTableTemplate";

const Header = () => {
  return (
    <EntityTableHeader
      title="Posts"
      description="Manage and review all published or draft posts."
      newLink="/studio/desk/post"
    />
  );
};

export default function PostsTemplate({ posts }: { posts: PostSummary[] }) {
  return (
    <MainContainer>
      <EntityTableTemplate
        HeaderComponent={Header}
        columns={postSummaryColumns}
        data={posts}
      />
    </MainContainer>
  );
}

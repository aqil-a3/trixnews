import PostsTemplate from "@/components/templates/admin/PostsTemplate";
import { getAllPost } from "@/utils/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
};

export default async function PostPage() {
  const posts = await getAllPost();

  return <PostsTemplate posts={posts} />;
}

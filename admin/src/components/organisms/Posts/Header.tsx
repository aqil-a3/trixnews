import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function PostsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Posts</h1>
        <p className="text-muted-foreground text-sm">
          Manage and review all published or draft posts.
        </p>
      </div>
      <Link href="/studio/desk/post" target="_blank">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Post
        </Button>
      </Link>
    </div>
  );
}

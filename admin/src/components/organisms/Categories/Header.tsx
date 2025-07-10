import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function CategoriesHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Categories</h1>
        <p className="text-muted-foreground text-sm">
          Manage and organize your content categories.
        </p>
      </div>
      <Link href="/studio/desk/category" target="_blank">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Category
        </Button>
      </Link>
    </div>
  );
}

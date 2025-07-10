import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function TagsHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Tags</h1>
        <p className="text-muted-foreground text-sm">
          Manage and organize tags to classify your content.
        </p>
      </div>
      <Link href="/studio/desk/tag" target="_blank">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Tag
        </Button>
      </Link>
    </div>
  );
}

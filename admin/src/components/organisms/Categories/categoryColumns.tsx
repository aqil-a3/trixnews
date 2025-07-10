import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import { webUrl } from "@/lib/client-variables";
import { Category } from "@/@types/Posts";

export const categoryColumns: ColumnDef<Category>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.title}</span>
    ),
  },
  {
    accessorKey: "slug.current",
    header: "Slug",
    cell: ({ row }) => (
      <code className="text-muted-foreground">{row.original.slug.current}</code>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) =>
      row.original.description ? (
        <span className="line-clamp-2 text-muted-foreground">
          {row.original.description}
        </span>
      ) : (
        <span className="italic text-muted-foreground">No description</span>
      ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const category = row.original;
      const slug = category.slug.current;

      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`/studio/desk/category;${category._id}`, "_blank")
            }
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`${webUrl}/categories/${slug}`, "_blank")
            }
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Pencil, Eye } from "lucide-react";
import { webUrl } from "@/lib/client-variables";
import { Tag } from "@/@types/Posts";

export const tagColumns: ColumnDef<Tag>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <span className="font-medium">{row.original.title}</span>,
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
      const tag = row.original;
      const slug = tag.slug.current;

      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`/studio/desk/tag;${tag._id}`, "_blank")
            }
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`${webUrl}/tags/${slug}`, "_blank")
            }
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

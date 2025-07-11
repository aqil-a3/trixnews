import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import { PostSummary } from "@/@types/Posts";
import { webUrl } from "@/lib/client-variables";

export const postSummaryColumns: ColumnDef<PostSummary>[] = [
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
    accessorKey: "publishedAt",
    header: "Published At",
    cell: ({ row }) =>
      format(new Date(row.original.publishedAt), "dd MMM yyyy, HH:mm"),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const post = row.original;
      const slug = row.original.slug.current;

      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`/studio/desk/post;${post._id}`, "_blank")
            }
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`${webUrl}/articles/${slug}`, "_blank")
            }
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

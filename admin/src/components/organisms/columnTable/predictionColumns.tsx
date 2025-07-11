import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Prediction } from "@/@types/Posts";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import { webUrl } from "@/lib/client-variables";

export const predictionColumns: ColumnDef<Prediction>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.title}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <span className="capitalize text-sm text-muted-foreground">
        {row.original.status}
      </span>
    ),
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => format(new Date(row.original.date), "dd MMM yyyy"),
  },
  {
    accessorKey: "author",
    header: "Author",
    cell: ({ row }) => row.original.author,
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
              window.open(`/studio/desk/prediction;${post._id}`, "_blank")
            }
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => window.open(`${webUrl}/predictions/${slug}`, "_blank")}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

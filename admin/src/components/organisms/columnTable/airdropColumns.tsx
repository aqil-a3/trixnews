import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import { Airdrop } from "@/@types/Posts";

export const airdropColumns: ColumnDef<Airdrop>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <span className="font-medium">{row.original.name}</span>,
  },
  {
    accessorKey: "slug.current",
    header: "Slug",
    cell: ({ row }) => (
      <code className="text-muted-foreground">
        {row.original.slug.current}
      </code>
    ),
  },
  {
    accessorKey: "rewardAmount",
    header: "Reward",
    cell: ({ row }) => row.original.rewardAmount,
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => format(new Date(row.original.startDate), "yyyy-MM-dd"),
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => format(new Date(row.original.endDate), "yyyy-MM-dd"),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const color =
        status === "approved"
          ? "green"
          : status === "rejected"
          ? "red"
          : "yellow";

      return (
        <Badge
          variant="outline"
          className={`capitalize text-${color}-600 border-${color}-500`}
        >
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const airdrop = row.original;
      const slug = airdrop.slug.current;

      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`/studio/desk/airdrop;${airdrop._id}`, "_blank")
            }
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`/airdrops/${slug}`, "_blank")
            }
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

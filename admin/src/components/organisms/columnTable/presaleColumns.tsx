import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Pencil } from "lucide-react";
import { Presale } from "@/@types/Posts";
import { webUrl } from "@/lib/client-variables";
import DeleteDialog from "@/components/molecules/dialog/DeleteDialog";
import axios, { isAxiosError } from "axios";
import { toast } from "react-toastify";

export const presaleColumns: ColumnDef<Presale>[] = [
  {
    accessorKey: "name",
    header: "Project",
    cell: ({ row }) => <div className="font-semibold">{row.original.name}</div>,
  },
  {
    accessorKey: "id",
    header: "Presale ID",
    cell: ({ row }) => (
      <code className="text-muted-foreground">{row.original.id}</code>
    ),
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: ({ row }) => format(new Date(row.original.startDate), "dd MMM yyyy"),
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: ({ row }) => format(new Date(row.original.endDate), "dd MMM yyyy"),
  },
  {
    accessorKey: "softCap",
    header: "Soft Cap (USD)",
    cell: ({ row }) => `$${row.original.softCap.toLocaleString()}`,
  },
  {
    accessorKey: "hardCap",
    header: "Hard Cap (USD)",
    cell: ({ row }) => `$${row.original.hardCap.toLocaleString()}`,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      const color =
        status === "approved"
          ? "green"
          : status === "pending"
            ? "yellow"
            : "red";

      return (
        <Badge variant="outline" className={`capitalize border-${color}-500`}>
          {status}
        </Badge>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const id = row.original._id;
      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="duration-200 hover:scale-95 cursor-pointer"
            onClick={() => window.open(`/presales/edit/${id}`, "_blank")}
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hover:opacity-85 hover:scale-95 cursor-pointer"
            onClick={() =>
              window.open(
                `${webUrl}/ico-presale/${row.original.slug?.current}`,
                "_blank"
              )
            }
          >
            <Eye className="w-4 h-4" />
          </Button>
          <DeleteDialog
            dataSummary={[{ label: "Presale Name", value: row.original.name }]}
            onConfirm={() => deleteHandler(row.original)}
          />
        </div>
      );
    },
  },
];

const deleteHandler = async (formData: Presale) => {
  try {
    const { data } = await axios.delete("/api/presales", {
      data: formData,
    });
    toast.success(data.message);
  } catch (error) {
    if (isAxiosError(error)) {
      const data = error.response?.data;
      toast.error(data.message);
    }
    console.error(error);
  }
};

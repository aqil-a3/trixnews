import { ColumnDef } from "@tanstack/react-table";
import { Web3Tool } from "@/@types/Posts";

export const web3ToolColumns: ColumnDef<Web3Tool>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "officialLink",
    header: "Website",
    cell: ({ row }) => {
      const url = row.original.officialLink;
      return <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{url}</a>;
    },
  },
  {
    accessorKey: "supportedBlockchains",
    header: "Blockchains",
    cell: ({ row }) =>
      row.original.supportedBlockchains?.join(", ") ?? "-",
  },
];

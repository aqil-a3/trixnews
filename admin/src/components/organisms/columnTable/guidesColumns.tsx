import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { Eye, Pencil } from "lucide-react"
import { webUrl } from "@/lib/client-variables"
import { Guide } from "@/@types/Posts"

export const guideColumns: ColumnDef<Guide>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <span className="font-medium">{row.original.title}</span>
    ),
  },
  {
    accessorKey: "slug",
    header: "Slug",
    cell: ({ row }) => (
      <code className="text-muted-foreground">{row.original.slug.current}</code>
    ),
  },
  {
    accessorKey: "popularity",
    header: "Popularity",
    cell: ({ row }) => row.original.popularity ?? "-",
  },
  {
    accessorKey: "icon",
    header: "Icon",
    cell: ({ row }) => (
      <code className="text-muted-foreground">{row.original.icon ?? "-"}</code>
    ),
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const guide = row.original
      const slug = guide.slug

      return (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`/studio/desk/guide;${slug}`, "_blank")
            }
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              window.open(`${webUrl}/guides/${slug.current}`, "_blank")
            }
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      )
    },
  },
]

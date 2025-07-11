// components/organisms/EntityTables/EntityTableHeader.tsx
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

interface EntityTableHeaderProps {
  title: string;
  description: string;
  newLink: string;
  newLabel?: string;
}

export default function EntityTableHeader({
  title,
  description,
  newLink,
  newLabel,
}: EntityTableHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
      <Link href={newLink} target="_blank">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          {newLabel || `Add New ${title}`}
        </Button>
      </Link>
    </div>
  );
}

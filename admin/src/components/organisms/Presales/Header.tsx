import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function PresalesHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Presales</h1>
        <p className="text-muted-foreground text-sm">
          Manage and organize presales to classify your content.
        </p>
      </div>
      <Link href="/studio/desk/presales" target="_blank">
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Presales
        </Button>
      </Link>
    </div>
  );
}

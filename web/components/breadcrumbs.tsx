import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="breadcrumb"
      className={cn(
        // Mobile: scrollable — Desktop: normal
        "overflow-x-auto lg:overflow-visible -mx-2 px-2 lg:mx-0 lg:px-0 text-sm text-gray-600",
        className
      )}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <ol
        className={cn(
          // Mobile: nowrap, scroll — Desktop: wrap normal
          "flex items-center gap-x-2 whitespace-nowrap lg:whitespace-normal"
        )}
      >
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-800 font-medium">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400 shrink-0" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

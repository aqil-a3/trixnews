import { cn } from "@/lib/utils";

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function MainContainer({
  children,
  className,
}: MainContainerProps) {
  return (
    <div className={cn("min-h-screen bg-gray-100 px-6 py-8 w-full", className)}>
      {children}
    </div>
  );
}

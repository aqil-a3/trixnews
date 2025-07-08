import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"; // Import Separator
import { ExternalLink, Layers, Key } from "lucide-react"; // For external link icon, and new icons for features

interface ToolCardProps {
  tool: typeof import("../lib/web3-tools").allWeb3Tools[0]; // Type based on a tool from allWeb3Tools
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="h-full flex flex-col border border-gray-200 hover:shadow-lg transition-shadow">
      <CardHeader className="flex items-center gap-6 pt-6 pb-6">
        {" "}
        {/* Adjusted padding and gap */}
        {tool.imageUrl && (
          <Image
            src={tool.imageUrl || "/placeholder.svg"}
            alt={`${tool.name} logo`}
            width={48} // Increased size
            height={48} // Increased size
            className="rounded-full object-cover flex-shrink-0"
          />
        )}
        <CardTitle className="flex-1 text-center text-xl font-semibold text-gray-900">
          {" "}
          {/* Centered title */}
          {tool.name}
        </CardTitle>
      </CardHeader>
      <Separator className="mb-4" /> {/* Added separator */}
      <CardContent className="flex-grow text-sm text-gray-700 flex flex-col justify-between">
        <div>
          <p className="mb-4 line-clamp-3">{tool.description}</p>{" "}
          {/* Added line-clamp-3 */}
          <div className="space-y-3 mb-4">
            {" "}
            {/* Group details with spacing */}
            {tool.supportedBlockchains &&
              tool.supportedBlockchains.length > 0 && (
                <div className="bg-gray-50 p-3 rounded-md">
                  <span className="text-xs font-medium text-gray-500 flex items-center gap-1 mb-1">
                    <Layers className="h-3 w-3" /> Supported Blockchains:
                  </span>
                  <span className="text-sm font-semibold text-gray-800">
                    {tool.supportedBlockchains.join(", ")}
                  </span>
                </div>
              )}
            {tool.keyFeatures && tool.keyFeatures.length > 0 && (
              <div className="bg-gray-50 p-3 rounded-md">
                <span className="text-xs font-medium text-gray-500 flex items-center gap-1 mb-1">
                  <Key className="h-3 w-3" /> Key Features:
                </span>
                <ul className="list-disc list-inside text-sm font-semibold text-gray-800 space-y-1">
                  {tool.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <Button asChild className="w-full mt-auto">
          <Link
            href={tool.officialLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center justify-center gap-2">
              Visit Site <ExternalLink className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

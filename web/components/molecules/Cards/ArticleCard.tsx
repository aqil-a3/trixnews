"use client";

import Image from "next/image";
import Link from "next/link";
import { PostDetail } from "@/@types/Posts";
import { format } from "date-fns";
import { useState } from "react";

export default function ArticleCard({ article }: { article: PostDetail }) {
  const { slug, title, publishedAt, summary, mainImage } = article;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Link href={`/articles/${slug.current}`} className="block group">
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex flex-col h-full">
        <div className="relative aspect-video w-full">
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
          <Image
            src={mainImage ? mainImage.asset.url : "/placeholder.svg"}
            alt={title}
            layout="fill"
            objectFit="cover"
            className={`transition-transform duration-300 group-hover:scale-105 ${
              isImageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
        </div>

        <div className="p-4 flex flex-col justify-between flex-grow min-h-[160px]">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-3">{summary}</p>
          </div>
          <p className="text-xs text-gray-500 mt-auto">
            {format(new Date(publishedAt), "dd MMM yyyy, HH:mm")}
          </p>
        </div>
      </div>
    </Link>
  );
}

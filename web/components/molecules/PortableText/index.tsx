"use client";

import { PortableText } from "@portabletext/react";
import { portableTextComponents } from "./components";

export default function RichText({ value }: { value: any }) {
  return (
    <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
      <PortableText value={value} components={portableTextComponents} />
    </div>
  );
}

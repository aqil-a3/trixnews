"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useHomeData } from "@/components/providers/HomeProvider";

export default function CategoriesSection() {
  const { categories } = useHomeData();

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <Link
            href={`/categories/${category.slug?.current}`}
            key={index}
            className="block group"
          >
            <Card className="hover:shadow-lg transition-shadow h-full min-h-[120px]">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{category.description ?? "There is no description Here"}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

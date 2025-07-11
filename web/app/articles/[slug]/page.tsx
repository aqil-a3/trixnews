import Image from "next/image";
import Footer from "@/components/layouts/Footer";
import { Separator } from "@/components/ui/separator";
import ArticleComments from "@/components/article-comments";
import SocialShareButtons from "@/components/social-share-buttons";
import Breadcrumbs from "@/components/breadcrumbs";
import { headers } from "next/headers";
import { getPostBySlug } from "@/utils/sanity-posts";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import RichText from "@/components/molecules/PortableText";

interface ArticlePageProps {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getPostBySlug(params.slug);
  const headersList = await headers();

  if (!article) {
    notFound();
  }

  const fullUrl = headersList.get("x-url") || "";


  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    {
      label: article.categories?.[0]?.title || "Uncategorized",
      href: `/categories/${article.categories?.[0]?.title?.toLowerCase().replace(/\s/g, "-")}`,
    },
    { label: article.title },
  ];

  console.log(article.body)

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-1">
        <article className="max-w-3xl mx-auto">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="text-gray-600 text-sm mb-6 flex items-center space-x-4">
            <span>
              By{" "}
              <span className="font-medium">
                {article.author?.name || "Anonymous"}
              </span>
            </span>
            <Separator orientation="vertical" className="h-4" />
            <span>{format(new Date(article.publishedAt), "dd MMM yyyy")}</span>
          </div>

          {article.mainImage?.asset?.url && (
            <div className="relative aspect-video w-full mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.mainImage.asset.url}
                alt={article.mainImage.alt || article.title}
                fill
                className="rounded-lg object-cover"
              />
            </div>
          )}

          <RichText value={article.body} />

          <SocialShareButtons title={article.title} url={fullUrl} />
          <ArticleComments />
          {/* <RelatedArticlesSection currentArticleSlug={article.slug.current} /> */}
        </article>
      </main>
      <Footer />
    </div>
  );
}

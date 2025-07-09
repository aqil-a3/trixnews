"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link"; // Import Link for navigation
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, Newspaper } from "lucide-react"; // Add icons for articles/guides
import { searchContent } from "@/lib/search"; // Import searchContent function
import type { Article } from "@/lib/articles"; // Import Article type
import type { Guide } from "@/lib/guides"; // Import Guide type
import { cn } from "@/lib/utils"; // Import cn utility

export default function SearchInput() {
  const [query, setQuery] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<{
    articles: Article[];
    guides: Guide[];
  }>({
    articles: [],
    guides: [],
  });
  const [showSuggestions, setShowSuggestions] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1); // For keyboard navigation
  const router = useRouter();
  const searchTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const suggestionsRef = React.useRef<HTMLDivElement>(null);

  // Debounce search input
  React.useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (query.trim().length > 1) {
      // Only search if query is at least 2 characters
      searchTimeoutRef.current = setTimeout(() => {
        const results = searchContent(query);
        setSuggestions(results);
        setShowSuggestions(true);
        setActiveIndex(-1); // Reset active index on new search
      }, 300); // 300ms debounce
    } else {
      setSuggestions({ articles: [], guides: [] });
      setShowSuggestions(false);
    }

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [query]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery(""); // Clear input after search
      setShowSuggestions(false); // Hide suggestions
    }
  };

  const handleSuggestionClick = (path: string) => {
    router.push(path);
    setQuery(""); // Clear input
    setShowSuggestions(false); // Hide suggestions
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const allSuggestions = [...suggestions.articles, ...suggestions.guides];
    if (allSuggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prevIndex) => (prevIndex + 1) % allSuggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(
        (prevIndex) =>
          (prevIndex - 1 + allSuggestions.length) % allSuggestions.length
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex !== -1) {
        const selectedItem = allSuggestions[activeIndex];
        //@ts-ignore
        const path =
        "slug" in selectedItem
        ? `/articles/${selectedItem.slug}`
        //@ts-ignore
            : `/guides/${selectedItem.slug}`;
        handleSuggestionClick(path);
      } else {
        handleSearch(e); // If no suggestion is highlighted, perform regular search
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setActiveIndex(-1);
      inputRef.current?.blur(); // Remove focus from input
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Delay hiding suggestions to allow click events on suggestions to fire
    setTimeout(() => {
      if (!suggestionsRef.current?.contains(e.relatedTarget as Node)) {
        setShowSuggestions(false);
        setActiveIndex(-1);
      }
    }, 100);
  };

  const totalSuggestions =
    suggestions.articles.length + suggestions.guides.length;

  return (
    <div className="relative w-full max-w-sm">
      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search articles or guides..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() =>
            query.trim().length > 1 &&
            setSuggestions(searchContent(query)) &&
            setShowSuggestions(true)
          }
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="flex-1"
          aria-label="Search articles or guides"
          aria-autocomplete="list"
          aria-controls="search-suggestions"
          aria-expanded={showSuggestions}
          role="combobox"
        />
        <Button type="submit" size="icon" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
      </form>

      {showSuggestions && totalSuggestions > 0 && (
        <div
          id="search-suggestions"
          ref={suggestionsRef}
          className="absolute z-10 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-80 overflow-y-auto"
          role="listbox"
        >
          {suggestions.articles.length > 0 && (
            <>
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase border-b border-gray-100">
                Articles
              </div>
              {suggestions.articles.map((article, index) => (
                <Link
                  key={`article-${article.slug}`}
                  href={`/articles/${article.slug}`}
                  onClick={() =>
                    handleSuggestionClick(`/articles/${article.slug}`)
                  }
                  className={cn(
                    "flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer",
                    activeIndex === index && "bg-gray-100"
                  )}
                  role="option"
                  aria-selected={activeIndex === index}
                >
                  <Newspaper className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-800 line-clamp-1">
                    {article.title}
                  </span>
                </Link>
              ))}
            </>
          )}

          {suggestions.guides.length > 0 && (
            <>
              <div
                className={cn(
                  "px-3 py-2 text-xs font-semibold text-gray-500 uppercase",
                  suggestions.articles.length > 0 && "border-t border-gray-100"
                )}
              >
                Guides
              </div>
              {suggestions.guides.map((guide, index) => (
                <Link
                  key={`guide-${guide.slug}`}
                  href={`/guides/${guide.slug}`}
                  onClick={() => handleSuggestionClick(`/guides/${guide.slug}`)}
                  className={cn(
                    "flex items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer",
                    activeIndex === suggestions.articles.length + index &&
                      "bg-gray-100" // Adjust index for guides
                  )}
                  role="option"
                  aria-selected={
                    activeIndex === suggestions.articles.length + index
                  }
                >
                  <BookOpen className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-800 line-clamp-1">
                    {guide.title}
                  </span>
                </Link>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}

"use client";
import React, { useEffect, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";

export function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");
  // Get the current search query from URL
  const debouncedUpdateURL = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams.toString());
    console.log(params);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    // Update URL without full page reload
    router.push(`/jobs?${params.toString()}`, { scroll: false });
  }, 300);
  // Handle search
  const handleSearch = (value: string) => {
    setQuery(value);
    debouncedUpdateURL(value);
  };

  // Sync URL with input on mount and URL changes
  useEffect(() => {
    // if (query == "") {
    //   router.push(`/jobs`);
    // }
    const currentSearch = searchParams.get("search");
    if (currentSearch !== query) {
      setQuery(currentSearch || "");
    }
  }, [searchParams]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <Input
        placeholder="Search jobs..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="bg-white dark:bg-gray-950 pr-10"
      />
      <Button
        size="icon"
        variant="ghost"
        className="absolute right-0 top-0 h-full px-3"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}

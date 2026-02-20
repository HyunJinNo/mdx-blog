"use client";

import { useSearchInputStore } from "@/features/searchPostListByTitle";
import { useEffect, useEffectEvent, useState } from "react";
import { SearchResult } from "./SearchResult";

interface SearchResultViewerProps {
  postList: {
    title: string;
    description: string;
    category: string;
    tagList: string[];
    postPath: string;
  }[];
}

export const SearchResultViewer = ({ postList }: SearchResultViewerProps) => {
  const [searchResultList, setSearchResultList] = useState<
    {
      title: string;
      description: string;
      category: string;
      tagList: string[];
      postPath: string;
    }[]
  >([]);

  const updateSearchResultList = useEffectEvent((input: string) => {
    setSearchResultList(
      postList.filter((post) =>
        post.title
          .replaceAll(" ", "")
          .toLowerCase()
          .includes(input.replaceAll(" ", "").toLowerCase()),
      ),
    );
  });

  const { input } = useSearchInputStore();

  useEffect(() => {
    updateSearchResultList(input);
  }, [input]);

  return (
    <div className="w-full px-6">
      {searchResultList.length === 0 ? (
        <div className="mt-24 flex items-center justify-center">
          <p className="text-custom-gray">검색 결과가 없습니다.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          {searchResultList.map((post) => (
            <SearchResult
              key={post.postPath}
              title={post.title}
              description={post.description}
              category={post.category}
              tagList={post.tagList}
              postPath={post.postPath}
            />
          ))}
        </div>
      )}
    </div>
  );
};

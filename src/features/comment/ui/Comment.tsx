"use client";

import Giscus from "@giscus/react";

export const Comment = () => {
  return (
    <div className="mt-20">
      <Giscus
        id="comments"
        repo="HyunJinNo/mdx-blog"
        repoId="R_kgDOQ9dfZA"
        category="Announcements"
        categoryId="DIC_kwDOQ9dfZM4C285K"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="preferred_color_scheme"
        lang="ko"
        loading="lazy"
      />
    </div>
  );
};

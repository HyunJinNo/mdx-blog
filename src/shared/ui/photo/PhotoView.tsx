"use client";

import dynamic from "next/dynamic";
import { JSXElementConstructor, ReactElement } from "react";

const BasePhotoView = dynamic(
  () => import("react-photo-view").then((mod) => mod.PhotoView),
  { ssr: false },
);

interface PhotoViewProps {
  src: string;
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}

export const PhotoView = ({ src, children }: PhotoViewProps) => {
  return <BasePhotoView src={src}>{children}</BasePhotoView>;
};

"use client";

import { JSXElementConstructor, ReactElement } from "react";
import { PhotoView as BasePhotoView } from "react-photo-view";

interface PhotoViewProps {
  src: string;
  children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}

export const PhotoView = ({ src, children }: PhotoViewProps) => {
  return <BasePhotoView src={src}>{children}</BasePhotoView>;
};

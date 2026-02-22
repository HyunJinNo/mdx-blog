"use client";

import { PhotoProvider as BasePhotoProvider } from "react-photo-view";

interface PhotoProviderProps {
  children: React.ReactNode;
}

export const PhotoProvider = ({ children }: PhotoProviderProps) => {
  return <BasePhotoProvider>{children}</BasePhotoProvider>;
};

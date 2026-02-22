"use client";

import { PhotoProvider as BasePhotoProvider } from "react-photo-view";
import { AiOutlinePlusCircle } from "@react-icons/all-files/ai/AiOutlinePlusCircle";
import { AiOutlineMinusCircle } from "@react-icons/all-files/ai/AiOutlineMinusCircle";
import { FiRotateCw } from "@react-icons/all-files/fi/FiRotateCw";
import { MdFullscreen } from "@react-icons/all-files/md/MdFullscreen";
import { MdFullscreenExit } from "@react-icons/all-files/md/MdFullscreenExit";
import { useEffect, useState } from "react";

interface PhotoProviderProps {
  children: React.ReactNode;
}

export const PhotoProvider = ({ children }: PhotoProviderProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange);
    };
  }, []);

  return (
    <BasePhotoProvider
      toolbarRender={({ onScale, scale, onRotate, rotate }) => {
        return (
          <div className="flex flex-row items-center gap-3">
            <AiOutlinePlusCircle
              className="cursor-pointer text-xl text-white/75 duration-300 hover:text-white"
              onClick={() => onScale(scale + 1)}
            />
            <AiOutlineMinusCircle
              className="cursor-pointer text-xl text-white/75 duration-300 hover:text-white"
              onClick={() => onScale(scale - 1)}
            />
            <FiRotateCw
              className="cursor-pointer text-xl text-white/75 duration-300 hover:text-white"
              onClick={() => onRotate(rotate + 90)}
            />
            {isFullscreen ? (
              <MdFullscreenExit
                className="cursor-pointer text-2xl text-white/75 duration-300 hover:text-white"
                onClick={() => {
                  document.exitFullscreen();
                }}
              />
            ) : (
              <MdFullscreen
                className="cursor-pointer text-2xl text-white/75 duration-300 hover:text-white"
                onClick={() => {
                  document.documentElement.requestFullscreen();
                }}
              />
            )}
          </div>
        );
      }}
      onVisibleChange={() => {
        if (isFullscreen) {
          document.exitFullscreen();
        }
      }}
    >
      {children}
    </BasePhotoProvider>
  );
};

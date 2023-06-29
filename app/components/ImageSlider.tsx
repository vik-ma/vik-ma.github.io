"use client";
import { ImageSliderProps } from "@/typings";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ImageSlider({
  name,
  previewImgSrcList,
  previewImgMainWidth,
  previewImgMainHeight,
  previewImgBase64DataList,
  previewImgMenuWidthList,
  previewImgMenuHeightList,
}: ImageSliderProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(900);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  return (
    <div className="flex justify-center mt-0.5">
      <div className="flex flex-col items-center">
        <div
          className={`flex flex-col p-1.5 justify-center rounded-md main-image-container`}
          style={{
            width:
              windowWidth > 870
                ? `${previewImgMainWidth}px`
                : `${Math.floor(previewImgMainWidth * 0.7)}px`,
            height:
              windowWidth > 870
                ? `${previewImgMainHeight}px`
                : `${Math.floor(previewImgMainHeight * 0.7)}px`,
          }}
        >
          <Image
            className="rounded"
            src={previewImgSrcList[currentImageIndex]}
            alt={`${name} Preview Image ${currentImageIndex + 1}`}
            width={
              windowWidth > 870
                ? previewImgMainWidth
                : Math.floor(previewImgMainWidth * 0.7)
            }
            height={previewImgMainHeight}
            placeholder="blur"
            blurDataURL={previewImgBase64DataList[currentImageIndex]}
          />
        </div>
        <div className="flex justify-center mt-2">
          {previewImgSrcList?.map((imageSrc: string, index: number) => (
            <div
              className="mx-[1px] border-2 border-stone-700 hover:border-stone-300 hover:bg-stone-50 rounded-sm"
              key={`thumbnail-div-${index + 1}`}
            >
              <Image
                className="max-w-[50px] max-[870px]:max-w-none cursor-pointer hover:opacity-70"
                key={`thumbnail-image-${index + 1}`}
                src={imageSrc}
                alt={`${name} Preview Image ${index + 1}`}
                width={previewImgMenuWidthList[index]}
                height={previewImgMenuHeightList[index]}
                placeholder="blur"
                blurDataURL={previewImgBase64DataList[index]}
                onClick={() => setCurrentImageIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

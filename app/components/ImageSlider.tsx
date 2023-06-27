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
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="flex mt-0.5">
      <div className="flex flex-col items-center">
        <div
          className={`flex flex-col p-1.5 justify-center bg-neutral-800 rounded-md border border-1 border-neutral-500`}
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
          />
        </div>
        <div className="flex justify-center mt-1.5">
          {previewImgSrcList?.map((imageSrc: string, index: number) => (
            <Image
              className="max-w-[50px] max-[870px]:max-w-none border border-neutral-700 mx-[1px]"
              key={index + 1}
              src={imageSrc}
              alt={`${name} Preview Image ${index + 1}`}
              width={previewImgMenuWidthList[index]}
              height={previewImgMenuHeightList[index]}
              placeholder="blur"
              blurDataURL={previewImgBase64DataList[index]}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

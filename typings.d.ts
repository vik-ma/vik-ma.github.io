import { ReactNode } from "react";

export interface ProjectsInfoProps {
    [key: string]: {
        name: string;
        shortDescription: string;
        fullDescription: ReactNode;
        cssId: string;
        cssGradient: string;
        techStack: string[];
        thumbnailImgSrc: string;
        thumbnailBase64Data: string;
        previewImgSrcList: string[];
        previewImgMainWidthList: number[];
        previewImgMainHeightList: number[];
        previewImgBase64DataList: string[];
        previewImgMenuWidthList: number[];
        previewImgMenuHeightList: number[];
      };
  };

export interface ProjectProps {
    project: {
        name: string;
        shortDescription: string;
        fullDescription: ReactNode;
        cssId: string;
        cssGradient: string;
        techStack: string[];
        thumbnailImgSrc: string;
        thumbnailBase64Data: string;
        previewImgSrcList: string[];
        previewImgMainWidthList: number[];
        previewImgMainHeightList: number[];
        previewImgBase64DataList: string[];
        previewImgMenuWidthList: number[];
        previewImgMenuHeightList: number[];
        };
};

export interface ImageSliderProps {
    name: string;
    previewImgSrcList: string[];
    previewImgMainWidthList: number[];
    previewImgMainHeightList: number[];
    previewImgBase64DataList: string[];
    previewImgMenuWidthList: number[];
    previewImgMenuHeightList: number[];
}

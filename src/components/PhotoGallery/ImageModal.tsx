import useClickAway from "@/hooks/useClickAway";
import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

interface ImageModalProps {
  close: () => void;
  data: {
    id: number;
    url: string;
  }[];
  imageRef: React.RefObject<HTMLDivElement>;
  currentImgIndex: number;
  setSelectedImageIndex: React.Dispatch<React.SetStateAction<number>>; 
}

export default function ImageModal({
  close,
  data,
  imageRef,
  currentImgIndex,
  setSelectedImageIndex,
}: ImageModalProps) {


  const prevImage = () => {
    if (currentImgIndex > 0) {
      setSelectedImageIndex(currentImgIndex - 1);
    } else {
      setSelectedImageIndex(data.length - 1);
    }
  };
  
  const nextImage = () => {
    if (currentImgIndex < data.length - 1) {
      setSelectedImageIndex(currentImgIndex + 1);
    } else {
      setSelectedImageIndex(0);
    }
  };
  
  useClickAway([imageRef], close);

  return (
    <div  id="popup-modal" className="absolute left-0 top-0 z-30 flex h-screen w-screen items-center justify-center overflow-y-auto bg-black bg-opacity-30">
      <div ref={imageRef}>
      <div  className="flex max-h-full w-full max-w-md items-center justify-center">
        <div className="relative rounded-lg">
          {data && data.length > 0 && (
            <div className="p-6 text-center">
              <img
                src={data[currentImgIndex].url}
                alt="Image"
                className="h-full w-full rounded-[4px]"
         
              />
            </div>
          )}
        </div>
      </div>
      {currentImgIndex > 0 && (
        <div className="absolute left-10 top-1/2 -translate-y-1/2 rotate-90 transform">
          <RiArrowDropDownLine
            size={40}
            onClick={prevImage}
            className="inline-flex items-center justify-center rounded-[2px] bg-white text-black hover:text-gray-900 cursor-pointer" // Added cursor-pointer to make it clickable
          />
        </div>
      )}

      {currentImgIndex < data.length - 1 && (
        <div className="absolute right-10 top-1/2 -translate-y-1/2 -rotate-90 transform">
          <RiArrowDropDownLine
            size={40}
            onClick={nextImage}
            className="inline-flex items-center justify-center rounded-[2px] bg-white text-black hover:text-gray-900 cursor-pointer" // Added cursor-pointer to make it clickable
          />
        </div>
      )}
      </div>
    </div>
  );
}

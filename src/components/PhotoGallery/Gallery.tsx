import React, { useRef, useState } from 'react';
import ImageModal from './ImageModal';
import { imagesData } from '@/data/imagesData';

export default function Gallery() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const imageModalRef = useRef<HTMLDivElement>(null);

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };
  
  


  return (
    <div className="p-5 sm:p-8">
      {isImageModalOpen && (
        <ImageModal
          imageRef={imageModalRef}
          close={closeImageModal}
          data={imagesData}
          currentImgIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
        />
      )}
     
      <div className="  columns-1 gap-5 gap-y-10 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-3">
        {imagesData.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt="image"
            className="rounded-md mb-6"
            onClick={() => openImageModal(index)}
          />
        ))}
      </div>

    </div>
  );
}

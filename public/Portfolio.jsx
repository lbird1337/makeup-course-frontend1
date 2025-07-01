import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useWindowSize } from '../hooks/useWindowSize';

// All 15 photos with consistent aspect ratios
const allImages = Array.from({ length: 15 }, (_, i) => ({
  src: `/portfolio/${i + 1}.jpg`,
  // Using consistent aspect ratios for better grid stability
  aspect: i % 3 === 0 ? 'aspect-[4/5]' : 'aspect-square',
}));

const Portfolio = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { width } = useWindowSize();

  const getNumVisibleImages = () => {
    if (width < 768) return 5;
    if (width < 1024) return 7;
    return 9;
  };
  
  const numVisibleImages = getNumVisibleImages();
  const previewImages = allImages.slice(0, numVisibleImages - 1);
  const overlayImage = allImages[numVisibleImages - 1];
  const hiddenCount = allImages.length - numVisibleImages;

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };
  
  const ImageItem = ({ index, src, aspect }) => (
    <div 
      className={`relative cursor-pointer overflow-hidden ${aspect} group`} 
      onClick={() => openLightbox(index)}
    >
      <img 
        src={src} 
        alt={`Portfolio ${index + 1}`} 
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
      />
    </div>
  );

  return (
    <>
      <section className="py-20 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="font-heading text-fluid-2xl font-black text-accent uppercase tracking-widest whitespace-nowrap">
              Портфолио
            </h2>
            <div className="flex-grow h-px bg-brand-text ml-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {previewImages.map((image, index) => (
              <ImageItem 
                key={index} 
                index={index} 
                src={image.src} 
                aspect={image.aspect} 
              />
            ))}
            
            {overlayImage && (
              <div 
                className={`relative cursor-pointer overflow-hidden ${overlayImage.aspect} group`} 
                onClick={() => openLightbox(numVisibleImages - 1)}
              >
                <img 
                  src={overlayImage.src} 
                  alt={`Portfolio ${numVisibleImages}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/70 flex justify-center items-center transition-opacity duration-300 group-hover:opacity-80">
                  <span className="font-heading text-2xl font-bold text-white">
                    +{hiddenCount} фото
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Lightbox
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={allImages}
        index={currentImageIndex}
        styles={{ container: { backgroundColor: "rgba(13, 13, 13, .95)" } }}
      />
    </>
  );
};

export default Portfolio; 
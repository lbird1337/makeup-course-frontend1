import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useWindowSize } from '../hooks/useWindowSize';

// Все 15 фотографий с разными пропорциями
const allImages = Array.from({ length: 15 }, (_, i) => ({
  src: `${import.meta.env.BASE_URL}portfolio/${i + 1}.jpg`,
  aspect: 'aspect-square',
}));

const Portfolio = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { width } = useWindowSize();

  // --- ЛОГИКА АДАПТИВНОГО КОНТЕНТА ---
  const getNumVisibleImages = () => {
    if (width < 768) return 5;  // md
    if (width < 1024) return 7; // lg
    return 9;                   // xl и шире
  };
  
  const numVisibleImages = getNumVisibleImages();
  const previewImages = allImages.slice(0, numVisibleImages - 1); // Фото для превью
  const overlayImage = allImages[numVisibleImages - 1]; // Фото для кнопки "+N"
  const hiddenCount = allImages.length - numVisibleImages; // Считаем скрытые

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsLightboxOpen(true);
  };
  
  // Маленький компонент для чистоты кода
  const ImageItem = ({ index, src, aspect }) => (
    <div className={`cursor-pointer overflow-hidden ${aspect}`} onClick={() => openLightbox(index)}>
      <img 
        src={src} 
        alt={`Portfolio ${index + 1}`} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
      />
    </div>
  );

  return (
    <>
      <section id="portfolio" className="py-20 px-4 sm:px-6 md:px-8">
        <div className="container mx-auto">
          <div className="flex items-center mb-12">
            <h2 className="font-heading text-fluid-2xl font-black text-accent uppercase tracking-widest whitespace-nowrap">Портфолио</h2>
            <span className="hidden md:inline-block align-middle w-full bg-brand-900/25 ml-6" style={{height: '1.2px'}} />
          </div>

          {/* Сетка теперь сама подстраивается под количество элементов */}
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
                className={`relative cursor-pointer overflow-hidden ${overlayImage.aspect}`} 
                onClick={() => openLightbox(numVisibleImages - 1)}
              >
                <img 
                  src={overlayImage.src} 
                  alt={`Portfolio ${numVisibleImages}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 flex justify-center items-center">
                  <span className="font-heading text-2xl font-bold text-white">+{hiddenCount} фото</span>
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
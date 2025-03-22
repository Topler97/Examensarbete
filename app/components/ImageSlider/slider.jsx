'use client'
import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/sliders/Berry-Mojito-Mocktail.png',
  '/sliders/drink_strawberry.png',
  '/sliders/drink.png',
  '/sliders/lime.png',
  '/sliders/mocktail.png',
  '/sliders/suger.png',
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-full mx-auto py-8 overflow-hidden md:bg-[#F0F0F0]">
      <div className="flex items-center justify-center gap-2">
        
        {/* Föregående bild - endast synlig på större skärmar */}
        <div className="hidden md:block w-1/4 opacity-60 scale-95 transition-transform duration-500 ease-in-out">
          <Image
            src={images[(currentIndex - 1 + images.length) % images.length]}
            alt="Previous slide"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
        
        {/* Aktiv bild */}
        <div className="w-full md:w-1/2 transition-transform duration-500 ease-in-out relative flex justify-center" style={{ height: '300px' }}>
          <Image
            src={images[currentIndex]}
            alt="Current slide"
            width={500}
            height={500}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
        
        {/* Nästa bild - endast synlig på större skärmar */}
        <div className="hidden md:block w-1/4 opacity-60 scale-95 transition-transform duration-500 ease-in-out">
          <Image
            src={images[(currentIndex + 1) % images.length]}
            alt="Next slide"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

      </div>

      <button 
        onClick={prevSlide} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75">
        ◀
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75">
        ▶
      </button>
    </div>
  );
}






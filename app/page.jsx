'use client';
import { Category } from './components/Category';
import { Hero } from './components/Hero';
import { ImageBoxTextBtn } from './components/ImageBoxTextBtn';
import ImageSlider from './components/ImageSlider/slider';
import OurAssortment from './components/ourAssortment/Supplay';
import { useRouter } from "next/navigation";
import { useState } from 'react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    router.push(`/products/${category}`);
  };

  return (
    <main>
      <Hero />
      <Category onSelectCategory={handleSelectCategory} />

      <div className="flex flex-col items-center my-12 md:w-2/3 md:m-auto md:py-12">
        <h2 className="text-[20px] font-bold text-[#333] pb-3 md:text-[26px]">
          Utforska våra favoritdrinkar
        </h2>
        <p className="text-[#666] mx-5 text-center">
          Blanda, skaka och njut av våra noggrant utvalda favoritdrinkar - varje
          recept är noggrant testat för att ge dig den bästa smakupplevelsen.
          Perfekta för alla tillfällen, från helgmys till festligheter med
          vänner.
        </p>
      </div>

      <ImageSlider />

      <ImageBoxTextBtn />

      <OurAssortment />
    </main>
  );
}

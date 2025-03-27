'use client'
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Vin', image: '/supply/vin.png', link: '/products/Vin' },
  { name: 'Drinkar', image: '/supply/drinkar.png', link: '/products/Drinkar' },
  { name: 'Öl', image: '/supply/öl.png', link: '/products/Öl' },
  { name: 'Shots', image: '/supply/shots.png', link: '/products/Shots' },
  { name: 'Cider', image: '/supply/cider.png', link: '/products/Cider' },
  { name: 'Alkoholfritt', image: '/supply/soda.png', link: '/products/Alkoholfritt' }
]
export default function OurAssortment() {
  return (
    <div className="lg:mx-15 lg:pb-12">
      <h2 className="lg:text-[26px] text-[20px] font-bold mb-6 ml-5">Utforska våra kategorier</h2>

      {/* Bildgalleri */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {categories.map((category, index) => (
          <Link key={index} href={category.link} className="relative group">
            <div className="mx-5 mb-5 h-64 overflow-hidden rounded-lg shadow-lg relative">
              <Image 
                src={category.image} 
                alt={category.name} 
                layout="fill" 
                objectFit="cover" 
                className="transition-all duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
              {/* Hover content */}
              <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}



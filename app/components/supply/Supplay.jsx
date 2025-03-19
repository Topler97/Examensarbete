'use client'
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Vin', image: '/supply/vin.png', link: '/categories/vin' },
  { name: 'Drinkar', image: '/supply/drinkar.png', link: '/categories/drinkar' },
  { name: 'Öl', image: '/supply/öl.png', link: '/categories/ol' },
  { name: 'Shots', image: '/supply/shots.png', link: '/categories/shots' },
  { name: 'Cider', image: '/supply/cider.png', link: '/categories/cider' },
  { name: 'Alkoholfritt', image: '/supply/soda.png', link: '/categories/alkoholfritt' }
];

export default function ImageGallery() {
  return (
    <div className="p-6">
      {/* H1 Titel */}
      <h1 className="text-4xl font-bold text-center mb-4">Utforska populära sidor</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
      {categories.map((category, index) => (
        <Link key={index} href={category.link} className="relative group">
          <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg relative">
            {/* Bild */}
            <Image 
              src={category.image} 
              alt={category.name} 
              layout="fill" 
              objectFit="cover" 
              className="transition-all duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105"
            />
            {/* Text (dold först, visas vid hover) */}
            <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {category.name}
            </h3>
          </div>
        </Link>
      ))}
      </div>
    </div>
  );
}


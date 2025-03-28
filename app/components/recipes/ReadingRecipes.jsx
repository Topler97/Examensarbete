/* 'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function ReadingRecipes() {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query; 

  
  useEffect(() => {
    if (!id) return;

    const fetchRecipes = async () => {
      const res = await fetch(`/recipes/${id}`); 
      const newsData = await res.json();
      setRecipes(newsData);
      setLoading(false);
    };

    fetchRecipes();
  }, [id]); 

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (!recipes) {
    return <div>Receptet kunde inte hittas.</div>; 
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl mb-4">
        <Link
          href="/recipes"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
          <Image
            src="/arrow/arrow.png" 
            alt="Tillbaka"
            width={20}
            height={20}
          />
          <span>Tillbaka</span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Image
            src={recipes.image || "/sliders/suger.png"} 
            alt={recipes.title}
            width={400}
            height={400}
            className="rounded-lg mx-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="w-full md:w-1/2 md:pr-6 order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-2">{recipes.title}</h2>
          <p className="text-gray-600">{recipes.content}</p>
        </div>
      </div>
    </div>
  );
}
 */
'use client';
import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Recipes } from '../components/recipes/Recipes';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('/api/recipes');
        const data = await res.json();
        setRecipes(data);
      } catch (error) {
        console.error('Fel vid hämtning av recept:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <main>
      <Hero />

      <div className="flex flex-col items-center my-12 md:w-[100%]">
        <h2 className="text-[20px] font-bold text-[#333] pb-6 md:text-[26px]">
          Senaste recepten hos oss
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:mx-15">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Recipes
                key={recipe._id}
                title={recipe.title}
                imgUrl={recipe.imgUrl}
                _id={recipe._id}
              />
            ))
          ) : (
            <p>Laddar nyheter...</p>
          )}
        </div>
      </div>
    </main>
  );
}

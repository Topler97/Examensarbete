'use client'
import { useState, useEffect } from "react"; 
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
        console.log(data)
      } catch (error) {
        console.error('Fel vid hämtning av recept:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <main>
      <Hero />
      <div>
        <h2 className="text-[20px] font-bold text-[#333] pb-3 md:text-[26px] lg:ml-20 lg:my-10">
          Senaste recepten hos oss
        </h2>

        <div>
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

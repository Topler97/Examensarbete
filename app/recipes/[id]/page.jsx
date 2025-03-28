"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Instructions } from "../../components/Instructions";

export default function ReadRecipes() {
  const [recipes, setRecipes] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchRecipes = async () => {
        try {
            const res = await fetch(`/api/recipes/${id}`); 
            if (!res.ok) throw new Error("Kunde inte hämta receptet");
            const data = await res.json();
            setRecipes(data);
        } catch (error) {
            console.error("Fel vid hämtning av recept:", error);
        }
    };

    if (id) fetchRecipes(); 
}, [id]);

  if (!recipes) return <p>Laddar...</p>;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="md:mx-18">
        <Link
          href="/recipes"
          className="mb-4 flex text-gray-600 hover:text-gray-900"
        >
          <Image
            src="/arrow/arrow.png"
            alt="Tillbaka"
            width={20}
            height={20}
            className="mr-2"
          />
          Tillbaka
        </Link>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={recipes.imgUrl || "/default-image.jpg"}
              alt={recipes.title}
              width={300}
              height={300}
              className="rounded-lg w-full"
              
              priority
            />
          </div>

          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-bold text-[#333] py-4">{recipes.title}</h2>

            <ul className="list-disc list-inside mt-2">
              {recipes.ingredients.split(",").map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
              ))}
            </ul>

            <ol className="list-decimal list-inside text-gray-600 pb-6">
              <Instructions />
              {recipes.instructions.split(",").map((step, index) => (
                <li key={index}>{step.trim()}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

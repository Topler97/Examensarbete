"use client";
import { useEffect, useState } from "react";
import { router, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ReadRecipes() {
  const [recipes, setNews] = useState(null);
  const router = useRouter();
  const { id } = useParams();
  console.log("📌 ID från useParams:", id);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(`/api/recipes/${id}`);
        if (!res.ok) throw new Error("Kunde inte hämta recept");
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Fel vid hämtning av recept:", error);
      }
    };

    if (id) fetchRecipes();
  }, [id]);

  if (!recipes) return <p>Laddar...</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-5xl w-full">
        <Link
          href="/recipes"
          className="mb-4 flex items-center text-gray-600 hover:text-gray-900"
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

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <Image
              src={recipes.imgUrl || "/default-image.jpg"}
              alt={recipes.title}
              width={600}
              height={400}
              className="rounded-lg w-full max-h-[500px] mx-auto"
              style={{ width: "auto" }}
              priority
            />
          </div>

          <div className="md:w-1/2 md:pl-6">
            <h2 className="text-2xl font-bold">{recipes.title}</h2>
            <ul className="list-disc list-inside mt-2">
              {recipes.ingredients.split(",").map((ingredient, index) => (
                <li key={index}>{ingredient.trim()}</li>
              ))}
            </ul>

            <ol className="list-decimal list-inside mt-2 text-gray-600">
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

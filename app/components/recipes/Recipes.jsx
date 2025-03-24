'use client'
import { useState, useEffect } from "react"; 
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";


export const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const router = useRouter(); 
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch("/api/recipes"); 
                const data = await res.json();
                setRecipes(data);
            } catch (error) {
                console.error("Fel vid hämtning av recept:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recipes.length > 0 ? (
                recipes.map((article) => (
                    <div key={article._id} className="bg-white shadow-md rounded-lg p-4">
                       
                        <div className="w-full h-[300px] overflow-hidden rounded-lg">
                            <Image 
                                src={article.imgUrl || "/default-image.jpg"}
                                alt={article.title}
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                    
                            
                            />
                        </div>

                       
                        <h2 className="text-lg font-bold py-3">{article.title}</h2>

                       
                        <button
                            className="bg-[#5B3636] text-white py-2 px-4 rounded-md"
                            onClick={() => router.push(`/recipes/${article._id}`)} 
                        >
                            Läs mer
                        </button>
                    </div>
                ))
            ) : (
                <p>Laddar recept...</p>
            )}
        </section>
    );
};
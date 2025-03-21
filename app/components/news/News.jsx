'use client'
import { useState, useEffect } from "react"; // ✅ Lägg till detta
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";


export const News = () => {
    const [news, setNews] = useState([]);
    const router = useRouter(); // Lägg till router för navigation

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch("/api/news"); // Hämta nyheter från API
                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.error("Fel vid hämtning av nyheter:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {news.length > 0 ? (
                news.map((article) => (
                    <div key={article._id} className="bg-white shadow-md rounded-lg p-4">
                        {/* Bild */}
                        <div className="w-full h-[300px] overflow-hidden rounded-lg">
                            <Image 
                                src={article.imgUrl || "/default-image.jpg"}
                                alt={article.title}
                                width={200}
                                height={200}
                                className="w-full h-full object-cover"
                    
                            
                            />
                        </div>

                        {/* Titel */}
                        <h2 className="text-lg font-bold py-3">{article.title}</h2>

                        {/* Läs mer-knapp */}
                        <button
                            className="bg-[#5B3636] text-white py-2 px-4 rounded-md"
                            onClick={() => router.push(`/news/${article._id}`)} // Navigera med ID
                        >
                            Läs mer
                        </button>
                    </div>
                ))
            ) : (
                <p>Laddar nyheter...</p>
            )}
        </section>
    );
};


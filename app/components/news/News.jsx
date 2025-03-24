'use client'
import { useState, useEffect } from "react"; 
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../Button";

export const News = () => {
    const [news, setNews] = useState([]);
    const router = useRouter(); 
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch("/api/news"); 
                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.error("Fel vid hämtning av nyheter:", error);
            }
        };

        fetchNews();
    }, []);

    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:mx-15 lg:mb-5">
            {news.length > 0 ? (
                news.map((article) => (
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
                       
                        <h2 className="text-lg py-3">{article.title}</h2>

                        <Button 
                            buttonText={'Läs mer'}
                            buttonColor={'#5B3636'}
                            onClick={() => router.push(`/news/${article._id}`)}
                        />
                    </div>
                ))
            ) : (
                <p>Laddar nyheter...</p>
            )}
        </section>
    );
};


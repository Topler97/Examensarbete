'use client';
import Image from "next/image";
import { Button } from "../Button";
import { useState, useEffect } from "react";

export const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch('/api/news'); // Hämta nyheter från API
                const data = await res.json(); // Omvandla svaret till JSON-format
                setNews(data); // Sätt nyheterna i state
                console.log(data, 'news');
            } catch (error) {
                console.error("Fel vid hämtning av nyheter:", error);
            }
        };

        fetchNews(); // Hämta nyheter när komponenten laddas
    }, []);

    return (
        <section className="md:ml-18 my-20 grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-3 gap-6 h-full">
            {news.length > 0 ? (
                news.map((article) => (
                    <div key={article._id} className="w-full max-w-[300px] flex flex-col h-full items-center text-center bg-white shadow-md rounded-lg p-4">
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
                        <h2 className="text-[16px] lg:text-[18px] pt-3 pb-5 flex-grow">{article.title}</h2>

                        {/* Knapp som alltid ligger längst ner */}
                        {article.button && (
                            <div className="mt-auto">
                                <Button buttonText={'Läs mer'} 
                                buttonColor={'#5B3636'} />
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <p>Laddar nyheter...</p>
            )}
        </section>
    );
};


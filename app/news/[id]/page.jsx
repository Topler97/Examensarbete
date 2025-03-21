"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useParams } from 'next/navigation'; // Importera useParams

export default function ReadNews() {
    const [news, setNews] = useState(null);
    const router = useRouter();
    const { id } = useParams(); // Använd useParams istället för props.params

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`/api/news/${id}`); // Hämta nyheten med ID
                if (!res.ok) throw new Error("Kunde inte hämta nyheten");
                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.error("Fel vid hämtning av nyhet:", error);
            }
        };

        if (id) fetchNews(); // Hämta endast om ID finns
    }, [id]);

    if (!news) return <p>Laddar...</p>;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="max-w-5xl w-full">
                {/* Tillbaka-knapp */}
                <button 
                    className="mb-4 bg-gray-300 px-4 py-2 rounded-md"
                    onClick={() => router.push("/news")}
                >
                    Tillbaka
                </button>

                {/* Nyhetsinnehåll */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row">
                    {/* Bild */}
                    <div className="md:w-1/2">
                        <Image
                            src={news.imgUrl || "/default-image.jpg"}
                            alt={news.title}
                            width={600}
                            height={400}
                            className="rounded-lg w-full"
                            style={{ width: "auto", height: "auto" }}
                            priority
                        />
                    </div>

                    {/* Text */}
                    <div className="md:w-1/2 md:pl-6">
                        <h2 className="text-2xl font-bold">{news.title}</h2>
                        <p className="text-gray-600 mt-2">{news.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

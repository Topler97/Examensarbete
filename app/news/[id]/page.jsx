"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; 
import { useParams } from 'next/navigation'; 
import CallToAction from "../../components/calltoaction/Calltoaction";

export default function ReadNews() {
    const [news, setNews] = useState(null);
    const { id } = useParams(); 

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`/api/news/${id}`); 
                if (!res.ok) throw new Error("Kunde inte hämta nyheten");
                const data = await res.json();
                setNews(data);
            } catch (error) {
                console.error("Fel vid hämtning av nyhet:", error);
            }
        };

        if (id) fetchNews(); 
    }, [id]);

    if (!news) return <p>Laddar...</p>;

    return (
        <main>
            <div className="flex flex-col items-center justify-center p-4 lg:mx-18">
                <div className="w-full">
                    <Link 
                        href="/news" 
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
                                src={news.imgUrl || "/default-image.jpg"}
                                alt={news.title}
                                width={600}
                                height={400}
                                className="rounded-lg w-full max-h-[500px] mx-auto"
                                style={{ width: "auto" }}
                                priority
                            />
                        </div>

                        
                        <div className="md:w-1/2 md:pl-6 pt-6">
                            <h2 className="text-2xl font-bold lg:pb-5">{news.title}</h2>
                            <p className="text-[#666] mt-2">{news.description}</p>
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction />
        </main>
    );
}

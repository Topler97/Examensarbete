'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'; // Lägg till useRouter

export default function ReadingNews() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query; // Använd `router.query.id` för att hämta id från URL

  // Fetchar ut nyheter baserat på id
  useEffect(() => {
    if (!id) return; // Vänta tills id är tillgängligt

    const fetchNews = async () => {
      const res = await fetch(`/api/news/${id}`); // API-anrop för att hämta den specifika nyheten
      const newsData = await res.json();
      setNews(newsData);
      setLoading(false);
    };

    fetchNews();
  }, [id]); // Kör useEffect när id ändras

  if (loading) {
    return <div>Loading...</div>; // Visa en loading-indikator
  }

  if (!news) {
    return <div>Nyheten kunde inte hittas.</div>; // Hantera om ingen nyhet finns
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl mb-4">
        <Link
          href="/news"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <Image
            src="/arrow/arrow.png" // Byt ut mot din faktiska bild
            alt="Tillbaka"
            width={20}
            height={20}
          />
          <span>Tillbaka</span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Image
            src={news.image || "/sliders/suger.png"} // Använd nyhetens bild eller en default-bild
            alt={news.title}
            width={400}
            height={400}
            className="rounded-lg mx-auto"
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="w-full md:w-1/2 md:pr-6 order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
          <p className="text-gray-600">{news.content}</p>
        </div>
      </div>
    </div>
  );
}







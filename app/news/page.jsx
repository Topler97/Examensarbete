"use client";

import { useEffect, useState } from "react";
import { Hero } from "../components/Hero";
import { News } from "../components/news/News";

export default function NewsPage() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("/api/news");
        const data = await res.json();
        setNews(data);
        console.log(data);
      } catch (error) {
        console.error("Fel vid hämtning av nyheter:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <main>
      <Hero />
      <div>
        <h2 className="text-[20px] font-bold text-[#333] mt-4 pb-3 md:text-[26px] lg:my-10 text-center">
          Senaste nyheterna hos oss
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 lg:mx-15 lg:mb-5 auto-rows-fr">
          {news.length > 0 ? (
            news.map((article) => (
              <News
                key={article._id}
                imgUrl={article.imgUrl}
                title={article.title}
                _id={article._id}
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

'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductNews() {
  const [news, setNews] = useState();
  const [recipes, setRecipes] = useState();
  
  useEffect(() => {
    const fetchNewsProducts = async () => {
      const res = await fetch('/api/news');  // Gör ett fetch-anrop till API-routen
      const newsData = await res.json();  // Omvandla svaret till JSON-format
      setNews(newsData);  // Sätt produkterna i state
      console.log(newsData, 'newsData')
    };

    fetchNewsProducts();  // Anropa fetchProducts när komponenten laddas

    const fetchRecipesProducts = async () => {
      const res = await fetch('/api/recipes');  // Gör ett fetch-anrop till API-routen
      const recipesData = await res.json();  // Omvandla svaret till JSON-format
      setRecipes(recipesData);  // Sätt produkterna i state
      console.log(recipesData, 'recipesData')
    };

    fetchRecipesProducts(); 
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Tillbaka-knapp, nu placerad i linje med kortet */}
      <div className="w-full max-w-5xl mb-4">
        <Link
          href="/news"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
        >
          <Image
            src="/arrow/arrow.png" // Byt ut mot ditt faktiska filnamn
            alt="Tillbaka"
            width={20}
            height={20}
          />
          <span>Tillbaka</span>
        </Link>
      </div>

      {/* Innehåll */}
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white shadow-lg rounded-lg p-6">
        {/* Bild (till vänster på desktop, längst ner på små skärmar) */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <Image
            src="/sliders/suger.png" // Byt ut mot din faktiska bild
            alt="Drink"
            width={400}
            height={400}
            className="rounded-lg mx-auto"
          />
        </div>

        {/* Info-text (till höger på desktop, först på små skärmar) */}
        <div className="w-full md:w-1/2 md:pr-6 order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-2">
            Vi har fått in Rosévin i vårt sortiment
          </h2>
          <p className="text-gray-600">
            Rosévin är en av de mest älskade och mångsidiga dryckerna på
            marknaden. Med sin läckra rosa färg och friska, fruktiga smak har
            det blivit ett populärt val både för festliga tillfällen och
            avslappnade kvällar. Men vad gör rosévin så speciellt? Och vad bör
            man tänka på när man väljer en flaska? I denna artikel går vi
            igenom allt du behöver veta om rosévin – från tillverkning och
            smakprofiler till tips på hur du serverar det.
          </p>
          <h3 className="text-xl font-bold mt-4 mb-2">Vad är rosévin?</h3>
          <p className="text-gray-600">
            Rosévin är ett vin som tillverkas genom en blandning av rödvin och
            vitt vin, eller genom en särskild metod där druvorna får en kort
            kontakt med skalen. Denna korta kontakt med skalen ger rosévinet
            sin karakteristiska rosa färg. Färgen kan variera från ljusrosa
            till mörkare rosa, beroende på hur länge skalen får ligga i
            kontakt med musten. Det finns olika sätt att göra rosévin på.
          </p>
        </div>
      </div>
    </div>
  );
}





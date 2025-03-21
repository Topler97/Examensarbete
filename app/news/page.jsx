import { News } from "../components/news/News"; // Importera komponenten

export default function NewsPage() {
    return (
        <div className="min-h-screen p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Nyheter</h1>
            <News /> {/* Använd komponenten */}
        </div>
    );
}

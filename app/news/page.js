import { Hero } from "../components/Hero";
import { News } from "../components/news/News";

export default function NewsPage() {
    return(
        <main>
            <Hero />
            <div>
                <h2 className="text-[20px] font-bold text-[#333] pb-3 md:text-[26px] lg:ml-20 lg:my-10">Senaste nyheterna hos oss</h2>

                <News />
            </div>
        </main>
    )
}

import { Hero } from "../components/Hero";
import { Recipes } from "../components/recipes/Recipes";


export default function RecipesPage() {
    return(
        <main>
            <Hero />
            <div>
                <h2 className="text-[20px] font-bold text-[#333] pb-3 md:text-[26px] lg:ml-20 lg:my-10">Senaste recepten hos oss</h2>

                <Recipes />
            </div>
        </main>
    )
}

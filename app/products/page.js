'use client';

import { Category } from "../components/Category";
import { Hero } from "../components/Hero";
import { ProductsComponent } from "../components/Products";
import { useState } from "react";


export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
    };

    return(
        <main>
            <Hero />
            <div className="flex flex-col items-center my-12 md:w-2/3 md:m-auto md:py-12">
                <h2 className="text-[20px] font-bold text-[#333] pb-3 md:text-[26px]">Alla våra produkter</h2>
                <p className="text-[#666] mx-5 text-center">
                    Utforska vårt breda sortiment av noggrant utvalda produkter, skapade för att möta dina behov och önskemål. Oavsett om du letar efter högkvalitativa material, smarta lösningar eller stilrena detaljer, har vi något för dig. Våra produkter kombinerar funktionalitet, design och hållbarhet för att säkerställa att du alltid får det bästa.
                </p>
            </div>

            <Category onSelectCategory={handleSelectCategory} />

            <ProductsComponent selectedCategory={selectedCategory} />
        </main>
    )
}
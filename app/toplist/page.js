'use client';
import { useEffect, useState } from "react";
import CallToActionProductComponent from "../components/CTAProduct/CTAProduct";
import { Hero } from "../components/Hero";
import { ProductsComponent } from "../components/Products";


export default function TopList() {
    const [randomProducts, setRandomProducts] = useState([]);
    
    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch('/api/products');
            const data = await res.json();
            
            const shuffled = [...data].sort(() => 0.5 - Math.random());
            setRandomProducts(shuffled.slice(0, 10));
        };

        fetchProducts();
    }, []);

    return(
        <main>
            <Hero />

            <div className="flex flex-col items-center my-12 md:w-2/3 md:m-auto md:pt-12">
                <h2 className="text-[20px] font-bold text-[#333] pb-3 md:text-[26px] text-center">
                    Topplistan: Våra och era absoluta favoriter!
                </h2>
                <p className="text-[#666] mx-5 text-center">
                    Vill du lyxa till det med ett glas vin eller imponera med en välgjord drink? Vi har valt ut de mest smakrika, eleganta och trendiga alternativen för alla tillfällen. Oavsett om du föredrar något fruktigt, friskt eller fylligt, finns något här för dig!
                </p>
            </div>
            
            {randomProducts.map((product) => (
                <ProductsComponent
                    key={product.title}
                    imgUrl={product.imgUrl}
                    title={product.title}
                    description={product.description}
                    sort={product.sortProducts}
                    country={product.country}
                    button={product.button}
                />
            ))}

            <CallToActionProductComponent />
        </main>
    )
}
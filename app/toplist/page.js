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
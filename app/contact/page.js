'use client';
import { Category } from "../components/Category";
import ContactForm from "../components/contactform/contactform";
import { Hero } from "../components/Hero";
import { ImageComp } from "../components/ImageComponent";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const router = useRouter();

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        router.push(`/products/${category}`);
      };

    return(
        <main>
            <Hero />
            <Category onSelectCategory={handleSelectCategory} />

            <ContactForm />

            <ImageComp />
        </main>
    )
}
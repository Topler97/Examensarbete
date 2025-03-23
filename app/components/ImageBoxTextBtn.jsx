'use client';
import Image from "next/image";
import { Button } from './Button';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export const ImageBoxTextBtn = () => {
    
    const [isMounted, setIsMounted] = useState(false); // State för att kontrollera när komponenten är monterad på klienten
    const [isAboutPage, setIsAboutPage] = useState(false); // State för att kontrollera om vi är på /about-sidan
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true); // Sätt isMounted till true när komponenten är monterad på klienten
    }, []);

    useEffect(() => {
        if (isMounted && router.pathname === '/about') {
            setIsAboutPage(true);
        } else {
            setIsAboutPage(false);
        }
    }, [isMounted, router.pathname]); // Kör när isMounted eller router.pathname ändras

    // Om komponenten inte har monterats än (dvs på servern), rendera inget eller en fallback
    if (!isMounted) {
        return null; // Eller rendera en fallback om så önskas
    }

    return(
        <section className="">
            {/* Mobile */}
            <div className="md:hidden my-10">
                <div className="p-5 pb-10">
                    <h2 className="font-bold text-[20px] text-[#333] pb-4">Vår resa - Från idéer till perfekta drinkar, vi älskar att dela vår passion</h2>
                    <p className="text-[#666] pb-4">
                    Vi är passionerade drinkälskare som strävar efter att ge dig de bästa recepten och inspirationen för alla tillfällen. Från enkla vardagsdrinkar till festliga cocktails - vårt mål är att göra din dryckesupplevelse både rolig och minnesvärd.
                    </p>
                    <Button buttonText={'Läs mer om oss'} buttonColor={'#5B3636'}/>
                </div>
                <div className="flex justify-center pb-6">
                    <Image 
                        src="/bartender.png"
                        alt="bild på enn bartender"
                        width={350}
                        height={350}
                    />
                </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:flex md:mx-20 md:py-10">
                <div className="flex justify-center pb-6">
                    <Image 
                        src="/bartender.png"
                        alt="bild på enn bartender"
                        width={1000}
                        height={1000}
                    />
                </div>

                <div className="p-5 lg:flex lg:flex-col lg:justify-center">
                    <h2 className="font-bold md:text-[20px] lg:text-[26px] text-[#333] pb-4">Vår resa - Från idéer till perfekta drinkar, vi älskar att dela vår passion</h2>
                    <p className="text-[#666] pb-8">
                       Vi är passionerade drinkälskare som strävar efter att ge dig de bästa recepten och inspirationen för alla tillfällen. Från enkla vardagsdrinkar till festliga cocktails - vårt mål är att göra din dryckesupplevelse både rolig och minnesvärd.
                    </p>
                    {!isAboutPage && (
                        <div>
                            <Button 
                                buttonText={'Läs mer om oss'} 
                                buttonColor={'#5B3636'}
                                link="/about"
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
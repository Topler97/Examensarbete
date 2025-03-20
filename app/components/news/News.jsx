'use client';
import Image from "next/image"
import { Button } from "../Button"
import { useState, useEffect } from "react";

export const News = () => {
    const [news, setNews] = useState();
    
    // Fetchar ut alla nyheter
    useEffect(() => {
        const fetchNews = async () => {
            const res = await fetch('/api/news');
            const data = await res.json();
            setNews(data);
        };

        fetchNews();
        }, []);

    return(
        <section className="md:ml-18 my-20 flex flex-col items-center sm:grid sm:grid-cols-2 xl:grid-cols-3">
            <div className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[400px] text-center pb-8 md:text-left">
                <Image 
                    src="/mojito.jpg"
                    alt="bild på mojito drink"
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
                <h2 className="text-[16px] lg:text-[18px] pt-3 pb-5">Ny uppfriskande cocktail för sommaren: Mojito!</h2>
                <Button buttonText={'Läs mer'} buttonColor={'#5B3636'}/>
            </div>
            <div className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[400px] text-center pb-8 md:text-left">
                <Image 
                    src="/mojito.jpg"
                    alt="bild på mojito drink"
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
                <h2 className="text-[16px] lg:text-[18px] pt-3 pb-5">Ny uppfriskande cocktail för sommaren: Mojito!</h2>
                <Button buttonText={'Läs mer'} buttonColor={'#5B3636'}/>
            </div>
            <div className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[400px] text-center pb-5 md:text-left">
                <Image 
                    src="/mojito.jpg"
                    alt="bild på mojito drink"
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
                <h2 className="text-[16px] lg:text-[18px] pt-3 pb-5">Ny uppfriskande cocktail för sommaren: Mojito!</h2>
                <Button buttonText={'Läs mer'} buttonColor={'#5B3636'}/>
            </div>
            <div className="w-[300px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[400px] text-center pb-5 md:text-left">
                <Image 
                    src="/mojito.jpg"
                    alt="bild på mojito drink"
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
                <h2 className="text-[16px] lg:text-[18px] pt-3 pb-5">Ny uppfriskande cocktail för sommaren: Mojito!</h2>
                <Button buttonText={'Läs mer'} buttonColor={'#5B3636'}/>
            </div>
        </section>
    )
}
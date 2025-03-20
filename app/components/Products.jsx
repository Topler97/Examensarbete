'use client';
import Image from "next/image"
import { Button } from "./Button"
import { useEffect, useState } from "react";

export const ProductsComponent = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
          const res = await fetch('/api/products');  // Gör ett fetch-anrop till API-routen
          const data = await res.json();  // Omvandla svaret till JSON-format
          setProducts(data);  // Sätt produkterna i state
          console.log(data, 'fetch')
        };

        fetchProducts();  // Anropa fetchProducts när komponenten laddas
      }, []);

    return(
        <section className="my-20 lg:flex lg:justify-center">
            <div className="flex flex-col items-center mx-5 sm:flex-row lg:w-2/3">
                <Image 
                    src="/lynx.png"
                    alt="vin"
                    width={60}
                    height={60}
                    
                />

                <div className="sm:flex sm:flex-col">
                    <h3 className="text-[#8B6060] font-bold text-[20px] py-3 text-center sm:text-start sm:mx-10">
                        Lynx - 2023
                    </h3>

                    <div className="sm:mx-10">
                        <p className="text-[#666] text-center pb-3 sm:text-start">Smakrikt, fruktigt vin med tydlig fatkaraktär, inslag av gula äpplen, mango, brynt smör, valnötter, kardemumma och apelsin. Serveras vid 8-10°C till smakrika rätter av fisk eller till ljust kött.</p>
                    </div>

                    <div className="sm:flex sm:justify-between sm:mx-10 sm:py-5 text-center">
                        <p className="text-[#8B6060] pt-5 sm:p-0">Vitt vin - fylligt & smakrikt</p>
                        <p className="text-[#8B6060] pb-8 sm:p-0">USA, 750ml</p>
                    </div>
                    

                    <div className="flex justify-center sm:flex sm:flex-col sm:items-start sm:ml-10">
                        <Button buttonText={'Läs mer'} buttonColor={'#8B6060'} />
                    </div>
                </div>
            </div>

        </section>
    )
}
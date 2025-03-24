'use client';
import Image from "next/image"
import { Button } from "./Button"
import { useEffect, useState } from "react";

export const ProductsComponent = ({ selectedCategory, imgUrl, title, description, sortProducts, country, button }) => {
   /*  const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const res = await fetch('/api/products');
          const data = await res.json();
          setProducts(data);
        };

        fetchProducts();
    }, []); */

    /* const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products; */

    return(
        <section className="my-20 lg:flex lg:items-center lg:flex-col">
                    <div className="flex flex-col items-center mx-5 sm:flex-row border-b-2 border-[#F0F0F0] py-10 lg:w-2/3">
                        <Image 
                            src={imgUrl}
                            alt="vin"
                            width={80}
                            height={80}
                        />

                        <div className="sm:flex sm:flex-col">
                            <h3 className="text-[#8B6060] font-bold text-[20px] py-3 text-center sm:text-start sm:mx-10">
                                {title}
                            </h3>

                            <div className="sm:mx-10">
                                <p className="text-[#666] text-center pb-3 sm:text-start">
                                    {description}
                                </p>
                            </div>

                            <div className="sm:flex sm:justify-between sm:mx-10 sm:py-5 text-center">
                                <p className="text-[#8B6060] pt-5 sm:p-0">{sortProducts}</p>
                                <p className="text-[#8B6060] pb-8 sm:p-0">{country}</p>
                            </div>

                            {button && (
                                <div className="flex justify-center sm:flex sm:flex-col sm:items-start sm:ml-10">
                                    <Button buttonText={'Läs mer'} buttonColor={'#8B6060'} />
                                </div>
                            )}
                            
                        </div>
                    </div>
                

        </section>
    )
}
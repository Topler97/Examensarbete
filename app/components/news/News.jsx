'use client'
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "../Button";

export const News = ({ imgUrl, title, _id}) => {
    const router = useRouter(); 

    return (
        <section>
            <div className="bg-white shadow-md rounded-lg p-4 h-full flex flex-col min-h-[350px]">
                
                <div className="w-full h-[250px] overflow-hidden rounded-lg">
                    <Image 
                        src={imgUrl || "/default-image.jpg"}
                        alt={title}
                        width={250}
                        height={250}
                        className="w-full h-full object-cover"
                    />
                </div>
                
                <h2 className="text-lg py-3 flex-grow">{title}</h2>

                <Button 
                    buttonText={'Läs mer'}
                    buttonColor={'#5B3636'}
                    onClick={() => router.push(`/news/${_id}`)}
                />
            </div>
           
        </section>
    );
};


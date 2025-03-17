import Image from "next/image";
import { Button } from './Button';

export const Hero = () => {
    return(
        <header className="relative">
            <Image 
                src="/hero.png" 
                alt="hero image" 
                width={1000} 
                height={750}
                className="h-[350px] w-full md:h-full"
            />

            <div className="absolute inset-0 bg-black opacity-62 z-10"></div>

            <div className="absolute inset-0 flex flex-col z-20 text-white px-6 pt-12 md:w-1/2 lg:top-[200px]">
                <h1 className="text-[24px] font-bold font-primary pb-4 lg:text-[40px]">Välkommen till dina FavoritDrinkar</h1>
                <span className="md:text-[18px]">Utforska våra bästa drinkrecept och lär dig blanda som ett proffs - enkelt, roligt och alltid med smak.</span>
            </div>

            <div className="absolute inset-0 z-20 top-[200px] left-5 flex md:items-center md:top-[120px] lg:top-[450px] xl:top-[150px]">
                <div className="mr-4">
                    <Button 
                        buttonText={'Kontakt'}
                        buttonColor={'#8B6060'}
                    />
                </div>
                <div>
                    <Button 
                        buttonText={'Våra produkter'}
                        buttonColor={'#5B3636'}
                    />
                </div>
            </div>
            
        </header>
    )
}
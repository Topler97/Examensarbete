'use client';

import Image from "next/image";
import { Button } from './Button';
import { useRouter } from 'next/navigation';

export const Hero = () => {
    const router = useRouter();

    const heroText = () => {
        switch (router.pathname) {
            case '/om-oss':
                return {
                    heading: 'Om oss',
                    description: 'Drinkexperterna som gör varje sipp minnesvärd.',
                };
            case '/kontakt':
                return {
                    heading: 'Kontakta oss',
                    description: 'Vi är här för att hjälpa dig! Om du har några frågor eller vill komma i kontakt med oss, skicka ett meddelande så svarar vi så snabbt vi kan.',
                };
            case '/nyheter':
                return {
                    heading: 'Våra nyheter',
                    description: 'Vår nyhetssida är din go-to för att upptäcka de senaste drinktrenderna, nya recept och spännande uppdateringar från världen av cocktails och drycker. Håll dig uppdaterad med allt nytt!',
                };
            case '/topplistan':
                return {
                    heading: 'Topplistan',
                    description: 'Vi är passionerade drinkälskare som strävar efter att ge dig de bästa recepten och inspirationen för alla tillfällen. Från enkla vardagsdrinkar till festliga cocktails - vårt mål är att göra din dryckesupplevelse både rolig och minnesvärd.',
                };
            case '/produkter':
                return {
                    heading: 'Alla produkter',
                    description: 'Upptäck en värld av smaker med våra noggrant utvalda spritsorter och inspirerande drinkrecept. Oavsett om du är en erfaren bartender eller en nybörjare i drinkmixandets konst, har vi allt du behöver för att skapa minnesvärda stunder. Från klassiska favoriter till unika kreationer - här finns något för alla smaker och tillfällen.',
                };
            case '/recept':
                return {
                    heading: 'Våra recept',
                    description: 'Välkommen till en värld av inspiration där vi samlat de bästa drinkrecepten för alla smaker och tillfällen. Oavsett om du vill skapa en festlig stämning med en uppfriskande cocktail eller njuta av en lugn kväll med en klassisk drink, har vi recepten som hjälper dig att lyfta varje ögonblick.',
                };
            case '/tillbehor':
                return {
                    heading: 'Våra tillbehör',
                    description: 'För att skapa den perfekta drinken behövs mer än bara rätt ingredienser. Våra tillbehör är designade för att ge dig allt du behöver för att blanda, servera och njuta av dina favoritcocktails.',
                };
            default:
                return {
                    heading: 'Välkommen till dina FavoritDrinkar',
                    description: 'Utforska våra bästa drinkrecept och lär dig blanda som ett proffs - enkelt, roligt och alltid med smak.',
                };
        }
    };

    const { heading, description } = heroText();

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

            <div className="xl:ml-15 absolute inset-0 flex flex-col z-20 text-white px-6 pt-12 md:w-1/2 lg:top-[200px]">
                <h1 className="text-[24px] font-bold font-primary pb-4 lg:text-[40px]">{heading}</h1>
                <span className="md:text-[18px]">{description}</span>
            </div>

            <div className="xl:ml-15 absolute inset-0 z-20 top-[200px] left-5 flex xl:items-center md:top-[250px] lg:top-[450px] xl:top-[320px] sm:top-[150px]">
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
'use client';

import Image from 'next/image';
import { Button } from './Button';
import { usePathname } from 'next/navigation';

export const Hero = () => {
  const pathname = usePathname();

  if (!pathname) {
    return null;
  }

  const heroText = () => {
    switch (pathname) {
      case '/about':
        return {
          heading: 'Om oss',
          description: 'Drinkexperterna som gör varje sipp minnesvärd.',
        };
      case '/contact':
        return {
          heading: 'Kontakta oss',
          description:
            'Vi är här för att hjälpa dig! Om du har några frågor eller vill komma i kontakt med oss, skicka ett meddelande så svarar vi så snabbt vi kan.',
        };
      case '/news':
        return {
          heading: 'Våra nyheter',
          description:
            'Vår nyhetssida är din go-to för att upptäcka de senaste drinktrenderna, nya recept och spännande uppdateringar från världen av cocktails och drycker. Håll dig uppdaterad med allt nytt!',
        };
      case '/toplist':
        return {
          heading: 'Topplistan',
          description:
            'Vi är passionerade drinkälskare som strävar efter att ge dig de bästa recepten och inspirationen för alla tillfällen. Från enkla vardagsdrinkar till festliga cocktails - vårt mål är att göra din dryckesupplevelse både rolig och minnesvärd.',
        };
      case '/products':
        return {
          heading: 'Alla produkter',
          description:
            'Upptäck en värld av smaker med våra noggrant utvalda spritsorter och inspirerande drinkrecept. Oavsett om du är en erfaren bartender eller en nybörjare i drinkmixandets konst, har vi allt du behöver för att skapa minnesvärda stunder. Från klassiska favoriter till unika kreationer - här finns något för alla smaker och tillfällen.',
        };
      case '/recipes':
        return {
          heading: 'Våra recept',
          description:
            'Välkommen till en värld av inspiration där vi samlat de bästa drinkrecepten för alla smaker och tillfällen. Oavsett om du vill skapa en festlig stämning med en uppfriskande cocktail eller njuta av en lugn kväll med en klassisk drink, har vi recepten som hjälper dig att lyfta varje ögonblick.',
        };
      case '/products/Drink':
        return {
          heading: 'Våra drinkar',
          description:
            'Välkommen till vår drinksektion, där du hittar ett varierat utbud av både klassiska och nyskapande drinkar. Oavsett om du är på jakt efter en fräsch sommar-cocktail, en festlig drink för den stora tillställningen eller något unikt att imponera på vännerna med, har vi något för alla smaker.',
        };
      case '/products/Vin':
        return {
          heading: 'Vårt vin-sortiment',
          description:
            'Välkommen till vårt noggrant utvalda sortiment av viner. Från eleganta röda viner till friska vita och bubblande mousserande viner, erbjuder vi något för alla smaker och tillfällen. Oavsett om du är en vinentusiast eller nybörjare, kommer vårt breda urval av viner från världens bästa vinregioner att ge dig en smakupplevelse utöver det vanliga.',
        };
        case '/products/Öl':
        return {
          heading: 'Vårt öl-sortiment',
          description:
            'Utforska vårt breda utbud av öl, där vi har samlat både klassiska favoriter och unika, hantverksöl från både lokala bryggerier och internationella märken. Från lätta lager och friska IPA:s till robusta stouts och smakrika veteöl - vårt sortiment erbjuder något för alla ölintresserade.',
        };
        case '/products/Shots':
        return {
          heading: 'Våra shots',
          description:
            'Vårt shots-sortiment erbjuder en spännande blandning av smaker och intensitet, perfekt för alla tillfällen som kräver något extra. Från klassiska favoriter som Tequila och Jägermeister till kreativa och färgstarka mixar.',
        };
        case '/products/Cider':
        return {
          heading: 'Vårt cider-sortiment',
          description:
            'Vårt cider-sortiment erbjuder en fräsch och sprudlande upplevelse för alla som älskar en läskande och fruktig dryck. Här hittar du både klassiska äppelciders och mer innovativa smakkombinationer som ger en ny twist på den traditionella drycken. ',
        };
        case '/products/Alkoholfritt':
        return {
          heading: 'Våra Alkohola alternativ',
          description:
            'I vårt alkoholfri sortiment hittar du ett brett utbud av smakfulla alternativ som passar både till vardags och fest. Vi erbjuder noggrant utvalda drycker som kombinerar den fulla smaken av traditionella drycker med fördelarna av att vara alkoholfria.',
        };
      default:
        return {
          heading: 'Välkommen till dina FavoritDrinkar',
          description:
            'Utforska våra bästa drinkrecept och lär dig blanda som ett proffs - enkelt, roligt och alltid med smak.',
        };
    }
  };

  const { heading, description } = heroText();

  return (
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
        <h1 className="text-[24px] font-bold font-primary pb-4 lg:text-[40px]">
          {heading}
        </h1>
        <span className="md:text-[18px]">{description}</span>
      </div>

      <div className="xl:ml-15 absolute inset-0 z-20 top-[230px] left-5 flex xl:items-center md:top-[250px] lg:top-[450px] xl:top-[320px] sm:top-[150px]">
        <div>
          <Button
            buttonText={'Våra produkter'}
            buttonColor={'#5B3636'}
            link="/products"
          />
        </div>
      </div>
    </header>
  );
};

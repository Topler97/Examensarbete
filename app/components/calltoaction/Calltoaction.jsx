import Image from "next/image";
import { Button } from "../Button";

// Definiera actionText-funktionen utanför JSX
const actionText = () => {
  return {
    heading: "Tveka inte att höra av dig!", // Skicka in rubriken för <h1>
    description: "Vi är här för att hjälpa dig! Om du har några frågor eller vill komma i kontakt med oss, skicka ett meddelande så svarar vi så snabbt vi kan."
  };
};

export default function Action() {
  // Hämta data från actionText
  const { heading, description } = actionText();

  return (
    <header className="relative">
      {/* Bilden */}
      <Image 
        src="/callaction.png" 
        alt="action image" 
        width={1000} 
        height={750}
        className="w-full h-auto md:h-[350px]" // Gör bilden responsiv
      />

      
       {/* Overlay */}
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-full bg-black opacity-60 z-20 flex flex-col items-center justify-center text-left px-4"> </div>

      {/* Text och Knapp */}
      <div className="absolute left-0 top-0 w-full md:w-1/2 h-full z-30 flex flex-col items-center md:items-start justify-center px-6 gap-y-2">

      {/* H1 Text */}
      <h1 className="text-white text-lg md:text-xl font-bold max-w-[90%] md:max-w-md text-left">
        {heading}
      </h1>

      {/* Overlay Text */}
      <p className="text-white text-sm md:text-base font-medium max-w-[90%] md:max-w-md text-left">
        {description}
      </p>

      {/* Knapp */}
      <div className="w-full md:w-auto self-center md:self-start mt-2 md:mt-4">
        <Button 
          buttonText="Kontakta oss"
          buttonColor="#5B3636"
          className="py-2 px-6"
        />
      </div>
      </div>

    </header>
  );
}





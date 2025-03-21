import Image from "next/image";
import { Button } from "../Button";

const actionText = () => {
  return {
    heading: "Tveka inte att höra av dig!",
    description: "Vi är här för att hjälpa dig! Om du har några frågor eller vill komma i kontakt med oss, skicka ett meddelande så svarar vi så snabbt vi kan."
  };
};

export default function CallToAction() {
  const { heading, description } = actionText();

  return (
    <header className="relative">
      <Image 
        src="/callaction.png" 
        alt="action image" 
        width={1000} 
        height={750}
        className="w-full h-[250px] md:h-[350px]"
      />

      <div className="absolute left-0 top-0 w-full md:w-1/2 h-full bg-black opacity-60 z-20 flex flex-col items-center justify-center text-left px-4"></div>

      <div className="absolute left-0 top-0 w-full md:w-1/2 h-full z-30 flex flex-col md:items-start justify-center px-6 gap-y-2">

        <h1 className="text-white text-lg md:text-xl font-bold lg:pb-5 md:max-w-md text-start">
          {heading}
        </h1>

        {/* Overlay Text */}
        <p className="text-white text-sm md:text-base font-medium md:max-w-md text-left">
          {description}
        </p>

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





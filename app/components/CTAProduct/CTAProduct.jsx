import { Button } from "../Button";
import Image from 'next/image';

const CallToActionProductComponent = () => {
  return (
    <div className="relative flex justify-center p-6">
      <div className="w-full h-64 overflow-hidden rounded-lg shadow-lg relative lg:w-[92%]">
        <Image 
          src="/allproducts/ananas.png" 
          alt="pineapple image" 
          layout="fill" 
          objectFit="cover"
          className="transition-all duration-300 ease-in-out group-hover:brightness-50 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 lg:mb-7">Alla produkter</h1>
        <Button 
          buttonText="Se alla produkter"
          buttonColor="#8B6060"
          className="py-2 px-6"
        />
      </div>
    </div>
  );
};

export default CallToActionProductComponent;






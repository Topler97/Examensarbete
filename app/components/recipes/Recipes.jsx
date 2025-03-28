'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '../Button';

export const Recipes = ({ 
  _id, 
  imgUrl, 
  title
}) => {
  const router = useRouter();

  return (
    <section>
      <div className="flex flex-col items-center pb-10 pt-4 mx-5">
        <Image
          src={imgUrl || '/default-image.jpg'}
          alt={title}
          width={200}
          height={200}
          className="w-[400px] rounded-lg h-[400px] object-cover"
        />
    
        <h2 className="text-lg font-bold py-3">{title}</h2>

        <div>
          <Button
            buttonText={'Läs mer'}
            buttonColor={'#5B3636'}
            onClick={() => router.push(`/recipes/${_id}`)}
          />
        </div>
        
      </div>
    </section>
  );
};

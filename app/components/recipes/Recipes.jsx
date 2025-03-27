'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '../Button';

export const Recipes = ({ _id, imgUrl, title, instructions, ingredients }) => {
  const router = useRouter();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="w-full h-[300px] overflow-hidden rounded-lg">
          <Image
            src={imgUrl || '/default-image.jpg'}
            alt={title}
            width={200}
            height={200}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-lg font-bold py-3">{title}</h2>

        <Button
          buttonText={'Läs mer'}
          buttonColor={'#5B3636'}
          onClick={() => router.push(`/recipes/${_id}`)}
        />
        
      </div>
    </section>
  );
};

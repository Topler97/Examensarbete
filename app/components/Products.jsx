'use client';
import Image from 'next/image';

export const ProductsComponent = ({
  imgUrl,
  title,
  description,
  sortProducts,
  country,
}) => {

  return (
    <section className="my-20 lg:flex lg:items-center lg:flex-col">
      <div className="flex flex-col items-center mx-5 sm:flex-row border-b-2 border-[#F0F0F0] py-10 lg:w-2/3">
        <Image src={imgUrl} alt="vin" width={80} height={80} />

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
        </div>
      </div>
    </section>
  );
};

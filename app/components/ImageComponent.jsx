import Image from "next/image"

export const ImageComp = () => {
    return(
        <section className="m-5 md:flex md:gap-8 lg:flex lg:justify-center lg:gap-10">
            <Image 
                src="/imgComp.png" 
                alt="bild på ett vinförråd"
                width={500}
                height={500}
                className="mb-5 md:mb-0"
            />

            <Image 
                src="/wineCork.png" 
                alt="bild på vin korkar"
                width={500}
                height={500}
            />
        </section>
    )
}
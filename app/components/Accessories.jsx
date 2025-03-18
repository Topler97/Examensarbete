import Image from "next/image"

export const Accessories = () => {
    return(
        <section className="my-5 lg:mx-20">
            <div className="bg-primary text-white uppercase font-bold flex justify-center py-2 md:justify-start md:pl-5">
                <h3>Tillbehör</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-4 py-5 gap-5 lg:flex-row lg:items-center">
                <Image
                    src="/iceShaker.jpg"
                    alt="bild på tillbehör, en shaker med is"
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
                <Image
                    src="/shaker.jpg"
                    alt="bild på tillbehör, en shaker"
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
                <Image
                    src="/accessories.png"
                    alt="bild på tillbehör"
                    width={400}
                    height={400}
                    className="rounded-lg"
                />
            </div>
        </section>
    )
}
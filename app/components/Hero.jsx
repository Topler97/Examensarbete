import Image from "next/image";

export const Hero = () => {
    return(
        <header>
            <Image 
                src="/hero.png" 
                alt="hero image" 
                width={1500} 
                height={752}
            />
        </header>
    )
}
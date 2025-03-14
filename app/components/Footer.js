import Image from "next/image";
import Logo from "../public/Logo.png";

export const Footer = () => {
    return(
        <footer className="bg-primary text-white">
            <div className="md:container md:m-auto">
                <div className="md:flex">
                    <section className="py-10">
                        <div className="flex justify-center md:justify-start">
                            <Image src={Logo} alt="footer logo"/>
                        </div>
                        <h2 className="flex justify-center font-bold pt-4 md:justify-start md:pt-6 md:pb-4">Välkommen till Favoritdrinkar</h2>
                        <span className="hidden md:flex md:text-[14px]">Utforska våra bästa drinkrecept och lär dig blanda som ett proffs - enkelt, roligt och alltid med smak.</span>
                    </section>
                    <section className="flex gap-10 w-full justify-center mb-16 md:justify-between md:mt-12">
                        <div className="flex flex-col md:ml-20">
                            <h3 className="uppercase font-bold border-b-1 mb-3">Information</h3>
                            <a href="#" className="mb-3 font-secondary">Våra produkter</a>
                            <a href="#" className="mb-3">Topplistan</a>
                            <a href="#" className="mb-3">Nyheter</a>
                            <a href="#" className="mb-3">Tillbehör</a>
                            <a href="#">Om oss</a>
                        </div>
                        <div className="flex flex-col md:mr-12">
                            <h3 className="uppercase font-bold mb-3 w-max border-b">Kontakt</h3>
                            <a href="#" className="mb-3">favoritdrinkar@hotmail.com</a>
                            <a href="#" className="mb-3">Instagram</a>
                            <a href="#">Facebook</a>
                        </div>
                    </section>
                </div>
                {/* Mobile */}
                <section className="font-secondary md:hidden">
                    <div className="flex justify-center text-[12px]">Byggd av Amanda Topler & Julia Bengtsson</div>
                    <div className="flex justify-center text-[12px] pt-2 pb-4">2025 © Copyright</div>
                </section>
                {/* Desktop */}
                <section className="font-secondary hidden md:flex md:justify-between md:pb-4">
                    <div className="flex justify-center text-[12px]">2025 © Copyright</div>
                    <div className="flex justify-center text-[12px]">Byggd av Amanda Topler & Julia Bengtsson</div>
                </section>
            </div>
        </footer>
    )
}
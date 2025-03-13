import Image from "next/image";
import Logo from "../public/Logo.png";

export const Footer = () => {
    return(
        <footer className="bg-red-300">
            <section>
                <div>
                    <Image src={Logo} />
                </div>
                <div className="text-5xl">Välkommen till Favoritdrinkar</div>
            </section>
            <section></section>
            <section>
                <div className="bg-red-500 text-white p-4">Byggd av Amanda Topler & Julia Bengtsson</div>
                <div>2025 © Copyright</div>
            </section>
        </footer>
    )
}
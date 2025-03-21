import { Category } from "../components/Category";
import ContactForm from "../components/contactform/contactform";
import { Hero } from "../components/Hero";
import { ImageComp } from "../components/ImageComponent";


export default function Contact() {
    return(
        <main>
            <Hero />
            <Category />

            <ContactForm />

            <ImageComp />
        </main>
    )
}
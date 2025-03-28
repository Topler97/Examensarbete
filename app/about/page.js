'use client';
import CallToAction from "../components/calltoaction/Calltoaction";
import ContactForm from "../components/contactform/contactform";
import { Hero } from "../components/Hero";
import { ImageBoxTextBtn } from "../components/ImageBoxTextBtn";

export default function AboutPage() {
    return(
        <main>
            <Hero />
            <ImageBoxTextBtn />

            <CallToAction />

            <ContactForm />
        </main>
    )
}
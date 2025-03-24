import CallToActionProductComponent from "../components/CTAProduct/CTAProduct";
import { Hero } from "../components/Hero";
import { ProductsComponent } from "../components/Products";

export default function TopList() {


    return(
        <main>
            <Hero />
            
            <ProductsComponent />

            <CallToActionProductComponent />
        </main>
    )
}
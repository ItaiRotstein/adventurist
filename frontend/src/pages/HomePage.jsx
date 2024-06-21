
import Contact from "../cmps/Contact";
import Faq from "../cmps/Faq";
import Hero from "../cmps/Hero";
import Search from "../cmps/Search";

export function HomePage() {
    return (
        <main className="">
            <Hero />
            <Search parent='HomePage'/>
            <Faq />
            <Contact />
        </main>
    );
}

import Contact from "../cmps/Contact";
import Faq from "../cmps/Faq";
import Hero from "../cmps/Hero";
import Search from "../cmps/Search";

export function HomePage() {
    return (
        <main className="bg-white">
            <Hero />
            <Search />
            <Faq />
            <Contact />
        </main>
    );
}
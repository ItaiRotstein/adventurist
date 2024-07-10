
import Contact from "../cmps/Contact";
import Faq from "../cmps/Faq";
import Hero from "../cmps/Hero";
import Search from "../cmps/Search";
import { BlogPreview } from "../cmps/BlogPreview";

export function HomePage() {
    return (
        <main className="">
            <Hero />
            <Search parent='HomePage' />
            <BlogPreview />
            <Faq />
            <Contact />
        </main>
    );
}
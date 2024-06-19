
import { useEffect, useRef, useState } from "react";
import { heroList } from '../../heroList';
import { Link } from "react-router-dom";


const Hero = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const scrollPositionX = scrollContainerRef.current.scrollLeft; // Use scrollLeft for horizontal scrolling
                const viewportWidth = scrollContainerRef.current.offsetWidth; // Use the div's width
                const newIndex = Math.abs(Math.floor(scrollPositionX / viewportWidth));

                if (newIndex < heroList.length) {
                    setActiveIndex(newIndex);
                }
            }
        };

        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (
        <section className="relative">
            <div ref={scrollContainerRef} style={{ overflowX: 'auto' }} className="w-full carousel relative">
                {heroList.map((hero, index) =>
                    <div id={`item${index}`} key={hero + index} className="carousel-item w-full flex items-center bg-cover bg-center"
                        style={{ backgroundImage: `url(${hero.image})` }}
                    >
                        <div className="ps-8 pe-32">
                            <h1 className="text-5xl mt-10 text-right text-white">
                                {hero.title}
                            </h1>
                            <Link to={hero.buttonLink} className="btn-main my-12">
                                לחץ כאן
                            </Link>
                        </div>
                    </div>
                )}
            </div>
            <div className="absolute bottom-0 flex justify-center w-full py-2 gap-3">
                {heroList.map((_, idx) => (
                    <a
                        key={idx}
                        href={`#item${idx}`}
                        className={`${activeIndex === idx ? 'bg-clr3 scale-150' : 'bg-gray-200'} w-3 h-3 rounded-full  transition-all duration-300`}
                        onClick={() => setActiveIndex(idx)}
                    ></a>
                ))}
            </div>
        </section>
    );
};

export default Hero;
import { Link } from "react-router-dom";
import { heroList } from "../../heroList";

export const HeroCircles = () => {
    const shadowClass = {boxShadow: '0 3.2vw 3.2vw rgba(0, 0, 0, 0.1)'}
    return (
        <div className="pb-8">
            <h2 className="text-center text-xl font-bold">
                איזה סוג הרפתקאה אתם מחפשים?
            </h2>
            <div className="flex gap-2 overflow-x-auto no-scrollbar mx-auto">
                {heroList.map((hero) => (
                    <Link
                        key={hero.image}
                        to={hero.buttonLink}
                        className="rounded-full min-w-28 flex flex-col items-center"
                    >
                        <img
                            src={hero.image}
                            alt={hero.title} 
                            className="rounded-full object-cover w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 mx-4 mt-8 mb-2 hover:scale-105 transition-transform duration-300 ease-in-out outline outline-white"
                            style={shadowClass}
                        />
                        <p className="text-center hover:text-clr2">{hero.title}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};
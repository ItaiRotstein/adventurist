import { useContext, useEffect, useState } from "react";
import { SpotContext } from "../context/SpotContext";
import { Icon } from "./Icon";
import { ShareButtons } from "./ShareButtons";

export function SpotDetails({ spot }) {
    const { favorites, toggleFavorite } = useContext(SpotContext);
    const [isShowMore, setIsShowMore] = useState(false);
    const [activeTooltip, setActiveTooltip] = useState(null); // Store the currently active tooltip
    let timeout;

    const handleMouseEnter = (tooltipKey) => {
        timeout = setTimeout(() => {
            setActiveTooltip(tooltipKey); // Set the active tooltip
        }, 300); 
    };

    const handleMouseLeave = () => {
        clearTimeout(timeout); // Clear timeout if the user leaves quickly
        setActiveTooltip(null); // Hide the tooltip instantly
    };

    const isFavorite = favorites.includes(spot._id);

    // Define keys and labels for dynamic rendering
    const moreDetailsKeys = [
        { key: "instructor", label: "מדריך" },
        { key: "group", label: "קבוצות" },
        { key: "kids", label: "ילדים" },
        { key: "disabled", label: "נגישות" },
        { key: "parking", label: "חנייה" },
        { key: "shower", label: "מקלחות" },
        { key: "toilet", label: "שירותים" },
        { key: "changing", label: "מלתחות" },
        { key: "storage", label: "אחסון חפצים אישיים" },
        { key: "events", label: "אופציה לאירועים" },
        { key: "lessons", label: "שיעורים" },
        { key: "rentals", label: "השכרת ציוד" },
        { key: "shop", label: "חנות" }
    ];

    return (
        <div className="mt-4">
            <h1 className="main-layout text-2xl py-4 font-bold text-center">{spot?.name}</h1>
            <div className="main-layout flex gap-2 justify-end items-center mb-4">
                <div
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter("share")}
                    onMouseLeave={handleMouseLeave}
                >
                    <ShareButtons />
                    {/* tooltip */}
                    {activeTooltip === "share" &&
                        <div className="hidden md:flex absolute -left-7 top-[50px] mb-2 items-center justify-center bg-gray-800 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap before:content-['▲'] before:text-gray-800 before:absolute before:bottom-7 before:left-[40px]">
                            שתף ברשתות
                        </div>
                    }
                </div>
                <div
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter("favorite")}
                    onMouseLeave={handleMouseLeave}
                >
                    <button className="shadow p-2 rounded-full hover:brightness-75" onClick={() => toggleFavorite(spot._id)}>
                        <Icon icon="FaHeart" className={`text-[24px] ${isFavorite ? 'text-clr3' : 'text-gray-300'}`} />
                    </button>
                    {/* tooltip */}
                    {activeTooltip === "favorite" &&
                        <div className="hidden md:flex absolute left-0 top-[50px] mb-2 items-center justify-center bg-gray-800 text-white text-sm px-3 py-2 rounded-md whitespace-nowrap before:content-['▲'] before:text-gray-800 before:absolute before:bottom-7 before:left-3">
                            {isFavorite ? 'הסר ממועדפים' : 'הוסף למועדפים'}
                        </div>
                    }
                </div>
            </div>
            <div className="w-full h-60">
                <img src={spot?.img} alt={spot?.name} className="w-full h-full object-cover rounded" />
            </div>
            <ul className="main-layout py-8 font-medium">
                <li>
                    <p className="text-lg">{spot?.details}</p>
                </li>
                <li className="border-b py-3">
                    <Icon icon="TbWorldWww" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>אתר: </strong>
                    <a target="_blank" rel="noopener noreferrer" dir="ltr" href={spot?.website}>{spot?.website}</a>
                </li>
                <li className="border-b py-3">
                    <Icon icon="CiClock1" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>שעות פתיחה:</strong> {spot?.hours}
                </li>
                <li className="border-b py-3">
                    <Icon icon="FaPhone" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>טלפון:</strong> {spot?.phone}
                </li>
                <li className="border-b py-3">
                    <Icon icon="MdOutlineEmail" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>דוא״ל:</strong> {spot?.email}
                </li>
                <li className="border-b py-3">
                    <Icon icon="IoLocationOutline" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>כתובת:</strong> {spot?.address}
                </li>
                <li className="border-b py-3">
                    <a href={`https://wa.me/${spot?.whatsapp}`}>
                        <Icon icon="FaWhatsapp" className="inline me-2 w-6 h-6 text-clr4" />
                        <strong>וואטסאפ:</strong> {spot?.whatsapp}
                    </a>
                </li>

                {isShowMore ? (
                    <>
                        {moreDetailsKeys.map(({ key, label }) => (
                            <li key={key} className="border-b py-3 flex items-center gap-2">
                                <strong>{label}:</strong>
                                {spot?.[key] ? (
                                    <span className="inline text-green-600 text-2xl"> ✔︎ </span>
                                ) : (
                                    <span className="inline text-red-600 text-2xl"> ✕ </span>
                                )}
                            </li>
                        ))}
                        <li className="border-b py-3">
                            <button onClick={() => setIsShowMore(false)} className="text-clr4 font-bold">פחות פרטים</button>
                        </li>
                    </>
                ) : (
                    <li className="border-b py-3">
                        <button onClick={() => setIsShowMore(true)} className="text-clr4 font-bold">עוד פרטים</button>
                    </li>
                )}
            </ul>
        </div>
    );
}

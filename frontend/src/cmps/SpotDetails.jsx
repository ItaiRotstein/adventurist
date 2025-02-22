import { useContext, useEffect, useState } from "react";
import { SpotContext } from "../context/SpotContext";
import { Icon } from "./Icon";
import { ShareButtons } from "./ShareButtons";

export function SpotDetails({ spot }) {
    const { favorites, toggleFavorite } = useContext(SpotContext);
    const [isShowMore, setIsShowMore] = useState(false);

    const isFavorite = favorites.includes(spot._id);

    return (
        <div className="mt-4">
            <h1 className="main-layout text-2xl py-4 font-bold text-center">{spot?.name}</h1>
            <div className="main-layout flex gap-2 justify-end items-center mb-4">
                <ShareButtons />
                <button className="shadow p-2 rounded-full hover:brightness-75" onClick={() => toggleFavorite(spot._id)}>
                    <Icon icon="FaHeart" className={`text-[24px] ${isFavorite ? 'text-clr3' : 'text-gray-300'}`} />
                </button>
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
                        <li className="border-b py-3">
                            <Icon icon="GiTeacher" className="inline me-2 w-6 h-6 text-clr4" />
                            <strong>מדריך:</strong>
                            {spot?.instructor ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                        </li>
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

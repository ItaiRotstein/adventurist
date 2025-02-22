import { Link } from 'react-router-dom';

import { Icon } from "../cmps/Icon";
import { useState } from "react";

export const SpotPreview = ({ spot }) => {
    const [isFavorite] = useState(JSON.parse(localStorage.getItem('favorites'))?.includes(spot._id));
    const shadowClass = { boxShadow: '0 1.6vw 3.2vw rgba(0, 0, 0, 0.15)' };

    return (
        <Link to={`/spot/${spot._id}`}>
            <li style={shadowClass} className="bg-white mb-4 py-4 px-2 list-none rounded-xl">
                <div className={`flex flex-col justify-between gap-2`}>
                    <div className="relative w-full">
                        <img
                            src={spot.img}
                            alt={spot.name}
                            className="object-cover w-full h-[400px] rounded"
                            loading="lazy"
                        />
                        <Icon icon="FaHeart" className={`absolute top-2 left-2  text-2xl ${isFavorite ? 'text-clr3' : 'text-gray-300'}`} />
                        <div className="absolute top-2 right-2 btn-main">{spot.category}</div>
                    </div>
                    <h4 className="font-bold text-lg text-center pb-4">
                        {spot.name}
                    </h4>
                    <div className="w-full flex justify-center gap-8 text-gray-300">
                        <button
                            className="flex items-center justify-center"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(spot.mapsLink, '_blank');
                            }}
                        >
                            <Icon icon="IoLocationOutline" className=" text-clr3 me-1 w-7 h-7 hover:brightness-75" />
                        </button>
                        |
                        <button
                            className="flex items-center justify-center"
                            onClick={(e) => {
                                e.preventDefault();
                                window.open(spot.website, '_blank');
                            }}
                        >
                            <Icon icon="TbWorldWww" className=" text-clr3 me-1 w-7 h-7 hover:brightness-75" />
                        </button>
                        |
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                // Replace `<PhoneNumber>` with the actual phone number in international format
                                spot.whatsapp && window.open(`https://wa.me/${spot.whatsapp}`, '_blank');
                            }}
                        >
                            <Icon icon="FaWhatsapp" className=" text-clr3 me-1 w-7 h-7 hover:brightness-75" />
                        </button>
                    </div>
                </div>
            </li>
        </Link>
    );
};
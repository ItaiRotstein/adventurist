import { Link } from 'react-router-dom';

import { Icon } from "../cmps/Icon";
import { useState } from "react";

export const SpotPreview = ({ spot, parentCmp }) => {
    const [isFavorite] = useState(JSON.parse(localStorage.getItem('favorites'))?.includes(spot._id));

    // const style = parentCmp === 'SpotsPage' ? 'flex-row' : 'flex-col';

    return (
        <Link to={`/spot/${spot._id}`}>
            <li className="mb-4 flex flex-col justify-between py-8 px-4 list-none shadow-lg rounded">
                <div className={`flex flex-col justify-between gap-2`}>
                    <div className="relative w-full h-32">
                        <img
                            src={spot.img}
                            alt={spot.name}
                            className="object-cover w-full h-full rounded-sm"
                            loading="lazy"
                        />
                        <button className="absolute top-2 left-2 shadow p-2 rounded-full hover:brightness-75">
                            <Icon icon="FaHeart" className={`text-2xl ${isFavorite ? 'text-clr3' : 'text-gray-300'}`} />
                        </button>
                    </div>
                    <div className="w-full">
                        <span className="font-medium ">
                            {spot.name}
                        </span>
                        <div>
                            <Icon icon="IoLocationOutline" className="inline text-clr4 me-1 text-sm" />
                            <p className="inline text-sm">{spot.address}</p>
                        </div>
                        <div>
                            <Icon icon="TbWorldWww" className="inline text-clr4 me-1 text-sm" />
                            <a href={spot.website} target="_blank" dir="ltr" className="inline text-sm">{spot.website}</a>
                        </div>
                        <div>
                            <Icon icon="FaPhone" className="inline text-clr4 me-1 text-sm" />
                            <p dir="ltr" className="inline text-sm">{spot.phone}</p>
                        </div>
                    </div>
                </div>
            </li>
        </Link>
    );
};
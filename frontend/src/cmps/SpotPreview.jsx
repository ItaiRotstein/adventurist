import { Link } from 'react-router-dom';

import { Icon } from "../cmps/Icon";
import { useState } from "react";

export const SpotPreview = ({ spot, parentCmp }) => {
    const [isFavorite, setIsFavorite] = useState(JSON.parse(localStorage.getItem('favorites'))?.includes(spot._id));

    const style = parentCmp === 'SpotsPage' ? 'flex-row' : 'flex-col';

    const toggleFavorite = () => {
        const currentFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (currentFavorites.includes(spot._id)) {
            const newFavorites = currentFavorites.filter(id => id !== spot._id);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
        } else {
            localStorage.setItem('favorites', JSON.stringify([...currentFavorites, spot._id]));
        }
        setIsFavorite(!isFavorite);
    };

    return (
        <li className="mb-4 flex flex-col justify-between px-4 py-8 border-b list-none">
            <div className={`flex ${style} justify-between gap-2`}>
                <div className="w-52 ">
                    <Link to={`/spot/${spot._id}`}>
                        <img
                            src={spot.img}
                            alt={spot.name}
                            className=" h-32 object-cover rounded-md"
                            loading="lazy"
                        />
                    </Link>
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
            <div className="flex justify-between mt-2">
                <Link to={`/spot/${spot._id}`} className="btn-main !py-0 !px-2 hover:brightness-75 !text-sm !flex items-center">
                    מעבר לפעילות
                </Link>
                <button className="shadow p-2 rounded-full hover:brightness-75" onClick={toggleFavorite}>
                    <Icon icon="FaHeart" className={`text-2xl ${isFavorite ? 'text-clr3' : 'text-gray-300'}`} />
                </button>
            </div>
        </li>
    );
};
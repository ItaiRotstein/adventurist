
import { useContext } from "react";
import { SpotContext } from "../context/SpotContext";
import { Link } from 'react-router-dom';

import { Icon } from "../cmps/Icon";

export const SimilarSpots = () => {

  const { similarSpots } = useContext(SpotContext);

  function setIsFavorite(id) {
    return JSON.parse(localStorage.getItem('favorites'))?.includes(id);
  }
  return (
    <div className="mt-16">
      <h3 className="text-2xl">פעילויות דומות</h3>
      <div className="flex gap-2 overflow-x-auto no-scrollbar mx-auto">
        {similarSpots && similarSpots.map((spot) => (
          <li key={spot._id} className="min-w-52 mb-4 flex flex-col justify-between py-8 px-4 list-none shadow-lg rounded">
            <Link to={`/spot/${spot._id}`}>
              <div className="relative w-full h-32">
                <img
                  src={spot.img}
                  alt={spot.name}
                  className="object-cover w-full h-full rounded-sm"
                  loading="lazy"
                />
                <button className="absolute top-2 left-2 shadow p-2 rounded-full hover:brightness-75">
                  <Icon icon="FaHeart" className={`text-2xl ${setIsFavorite(spot._id) ? 'text-clr3' : 'text-gray-300'}`} />
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
                {/* <div>
                            <Icon icon="TbWorldWww" className="inline text-clr4 me-1 text-sm" />
                            <a href={spot.website} target="_blank" dir="ltr" className="inline text-sm">{spot.website}</a>
                        </div>
                        <div>
                            <Icon icon="FaPhone" className="inline text-clr4 me-1 text-sm" />
                            <p dir="ltr" className="inline text-sm">{spot.phone}</p>
                    </div> */}
              </div>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};
import { useContext, useEffect, useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { SpotContext } from "../../context/SpotContext";

export default function FavoriteIcon() {
    const { favorites } = useContext(SpotContext);

    return (
        <Link to="/favorites" className="relative inline-block">
            <IoIosHeartEmpty className="text-3xl text-clr3 hover:brightness-75 cursor-pointer" />
            <span className="absolute top-[7px] left-[12px] text-xs text-clr3">{favorites.length}</span>
        </Link>
    );
}
import { Link } from "react-router-dom";

import { Icon } from "../../cmps/Icon";
import { useState } from "react";

export const NavbarMobile = ({ isMenuShow, setIsMenuShow }) => {
    const [isRegionsSubmenuVisible, setIsRegionsSubmenuVisible] = useState(false);

    function toggleRegionsSubmenu() {
        setIsRegionsSubmenuVisible(!isRegionsSubmenuVisible);
        setIsMenuShow(true);
    };

    function handleClick() {
        setIsRegionsSubmenuVisible(false);
        setIsMenuShow(false);
    }

    return (
        <ul className={`lg:hidden fixed ${isMenuShow ? 'left-0' : '-left-full'} top-[80px] md:top-[94.5px] pt-6 w-full h-full flex flex-col main-layout tracking-widest text-black text-xl font-semibold bg-white transition-all duration-300 z-100`}>
            <li className="border-b py-6">
                <Link to={"/spots"} onClick={handleClick} className=" hover:underline">
                    <Icon icon="IoStarOutline" className="inline me-2 text-clr3 w-6 h-6" />
                    כל הפעילויות
                </Link>
            </li>
            <li className="border-b py-6">

                <div onClick={toggleRegionsSubmenu} className="hover:underline cursor-pointer flex justify-between items-center">
                    <span className="">
                        <Icon icon="IoLocationOutline" className="inline me-2 text-clr3 w-6 h-6" />
                        אזורים
                    </span>
                    <Icon icon={isRegionsSubmenuVisible ? "IoChevronUp" : "IoChevronDown"} className="inline text-clr3 w-6 h-6" />
                </div>
                {isRegionsSubmenuVisible && (
                    <ul className="pl-4 flex flex-col gap-4 mt-4">
                        <li><Link className="ps-8 hover:underline" to={`/search_results/?region=${encodeURIComponent('צפון')}`} onClick={handleClick}>צפון</Link></li>
                        <li><Link className="ps-8 hover:underline" to={`/search_results/?region=${encodeURIComponent('מרכז')}`} onClick={handleClick}>מרכז</Link></li>
                        <li><Link className="ps-8 hover:underline" to={`/search_results/?region=${encodeURIComponent('דרום')}`} onClick={handleClick}>דרום</Link></li>
                    </ul>
                )}
            </li>
            <li className="border-b py-6">
                <Link onClick={handleClick} className=" hover:underline" to="/blog">
                    <Icon icon="IoThumbsUpOutline" className="inline me-2 text-clr3 w-6 h-6" />
                    חוויות
                </Link>
            </li>
            <li className="border-b py-6">
                <Link onClick={handleClick} className=" hover:underline" to="/about">
                    <Icon icon="IoIosInformationCircleOutline" className="inline me-2 text-clr3 w-6 h-6" />
                    מי אנחנו
                </Link>
            </li>
            <li className="border-b py-6">
                <Link onClick={handleClick} className=" hover:underline" to="/favorites">
                <Icon icon="IoHeartCircleOutline" className="inline me-2 text-clr3 w-6 h-6" />
                מועדפים
                </Link>
            </li>
            <li className="border-b py-6">
                <Link onClick={handleClick} className=" hover:underline" to="/contact">
                    <Icon icon="GrContact" className="inline me-2 text-clr3 w-6 h-6" />
                    צור קשר
                </Link>
            </li>
            <li className="border-b py-6">
                <Link onClick={handleClick} className=" hover:underline" to="/business">
                    <Icon icon="TiBusinessCard" className="inline me-2 text-clr3 w-6 h-6" />
                    בעל עסק
                </Link>
            </li>
        </ul>
    );
};
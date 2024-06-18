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
        <ul className={`lg:hidden fixed ${isMenuShow ? 'left-0' : '-left-full'} top-[76px] pt-6 w-full h-full flex flex-col gap-4 main-layout tracking-widest text-black text-xl font-semibold bg-white transition-all duration-300 z-100`}>
            <li className="border-b py-3">
                <Icon icon="MdOutlineLocalActivity" className="inline me-2 text-clr3 w-6 h-6" />
                <Link to={"/פעילויות"} onClick={handleClick} className=" hover:underline">כל הפעילויות</Link>
            </li>
            <li className="border-b py-3">
                <Icon icon="IoLocationSharp" className="inline me-2 text-clr3 w-6 h-6" />

                <a onClick={toggleRegionsSubmenu} className="hover:underline cursor-pointer">אזורים</a>
                {isRegionsSubmenuVisible && (
                    <ul className="pl-4 flex flex-col gap-4 mt-4">
                        <li><Link className="ps-8 hover:underline" to="/region/צפון" onClick={handleClick}>צפון</Link></li>
                        <li><Link className="ps-8 hover:underline" to="/region/מרכז" onClick={handleClick}>מרכז</Link></li>
                        <li><Link className="ps-8 hover:underline" to="/region/דרום" onClick={handleClick}>דרום</Link></li>
                    </ul>
                )}
            </li>
            <li className="border-b py-3">
                <Icon icon="MdOutlineRecommend" className="inline me-2 text-clr3 w-6 h-6" />
                <a onClick={handleClick} className=" hover:underline" href="#size">המלצות</a>
            </li>
            <li className="border-b py-3">
                <Icon icon="IoIosInformationCircleOutline" className="inline me-2 text-clr3 w-6 h-6" />
                <a onClick={handleClick} className=" hover:underline" href="#m-attributes">מי אנחנו</a>
            </li>
            <li className="border-b py-3">
                <Icon icon="BsQuestionSquare" className="inline me-2 text-clr3 w-6 h-6" />
                <a onClick={handleClick} className=" hover:underline" href="/#faq">שאלות נפוצות</a>
            </li>
            <li className="border-b py-3">
                <Icon icon="GrContact" className="inline me-2 text-clr3 w-6 h-6" />
                <a onClick={handleClick} className=" hover:underline" href="/#contact">צור קשר</a>
            </li>
            <li className="border-b py-3">
                <Icon icon="TiBusinessCard" className="inline me-2 text-clr3 w-6 h-6" />
                <a onClick={handleClick} className=" hover:underline" href="/#business">בעל עסק</a>
            </li>
        </ul>
    );
};
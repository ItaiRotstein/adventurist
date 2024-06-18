
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Icon } from "../../cmps/Icon";

import { Navbar } from "./Navbar";
import { NavbarMobile } from "./NavbarMobile";
import { SideDrawer } from "./SideDrawer";

export const Header = () => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuShow || isDrawerOpen ? "hidden" : "auto";
    });

    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
        setIsMenuShow(false);
    };

    return (
        <header className={`sticky top-0 z-20 bg-[#ffffffe3] flex justify-between items-center main-layout py-2`}>
            <Navbar />
            <Link to="/" className="flex flex-col items-center" onClick={() => setIsMenuShow(false)}>
                <img width={360} height={360} src="https://res.cloudinary.com/itai-rotstein/image/upload/v1718136924/Adventurist/adventurist_logo_full_mplez6.png" className="w-[180px] md:w-[270px] lg:w-[180px]" alt="סילברט לוגו" />
                <span className="text-sm relative bottom-[10px]">כל ההרפתקאות במקום אחד</span>
            </Link>
            <button onClick={toggleDrawer} className="p-2">
                <Icon icon="IoSearch" className="text-3xl text-clr3 hover:brightness-75 cursor-pointer" />
            </button>
            <SideDrawer isOpen={isDrawerOpen} closeDrawer={() => setDrawerOpen(false)} />
            {isMenuShow ? (
                <Icon icon="IoClose" className="lg:hidden text-3xl text-clr3 hover:brightness-75 cursor-pointer" onClick={() => setIsMenuShow(false)} />
            ) : (
                <Icon icon="IoMenu" className="lg:hidden text-3xl text-clr3  hover:brightness-75 cursor-pointer" onClick={() => setIsMenuShow(true)} />
            )}
            <NavbarMobile setIsMenuShow={setIsMenuShow} isMenuShow={isMenuShow} />
        </header>
    );
};


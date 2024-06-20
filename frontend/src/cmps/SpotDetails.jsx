
import { useState } from "react";
import { Icon } from "./Icon";
import { ShareButtons } from "./ShareButtons";
export function SpotDetails({ spot }) {
    const [isFavorite, setIsFavorite] = useState(JSON.parse(localStorage.getItem('favorites'))?.includes(spot._id));

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
        <div className="mt-4">
            <h1 className="main-layout text-2xl py-4 font-bold text-center">{spot?.name}</h1>
            <div className="main-layout flex gap-2 justify-end items-center">
                <ShareButtons />
                <button className=" mb-6 shadow p-2 rounded-full hover:brightness-75" onClick={toggleFavorite}>
                    <Icon icon="FaHeart" className={`text-[24px] ${isFavorite ? 'text-clr3' : 'text-gray-300'}`} />
                </button>
            </div>
            <div className="w-full h-60">
                <img src={spot?.img} alt={spot?.name} className="w-full h-full object-cover rounded" />
            </div>
            <ul className="main-layout py-8 font-medium">
                <li>
                    <p className="text-lg">
                        {spot?.details}
                    </p>
                </li>
                <li className="py-3 flex justify-between items-center">
                </li>
                <li className="border-b py-3">
                    <Icon icon="TbWorldWww" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>אתר: </strong>
                    <a target="_blank" dir="ltr" href={spot?.website}> {spot?.website} </a>
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
                {/* <li className="border-b py-3"><IoInformationCircleOutline className="inline me-2 w-6 h-6 text-clr4" /><strong>פרטים:</strong> לחץ כאן</li> */}
                <li className="border-b py-3">
                    <a href={`https://wa.me/${spot?.whatsapp}`}>
                        <Icon icon="FaWhatsapp" className="inline me-2 w-6 h-6 text-clr4" />
                        <strong>וואטסאפ:</strong> {spot?.whatsapp}
                    </a>
                </li>
                <li className="border-b py-3">
                    <Icon icon="FaWaze" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>ווייז:</strong> {spot?.waze}
                </li>
                <li className="border-b py-3 flex gap-3">
                    <strong>מדיה חברתית:</strong>
                    <a href={spot?.facebook}>
                        <Icon icon="IoLogoFacebook" className="text-[#0868ff] w-7 h-7" /></a>
                    |
                    <a href={spot?.instagram}>
                        <Icon icon="IoLogoInstagram" className="text-[#ff0455] w-7 h-7" /></a>
                    |
                    <a href={spot?.twitter}>
                        <Icon icon="IoLogoTwitter" className="text-[#1ea1f1] w-7 h-7" /></a>
                </li>
                <li className="border-b py-3">
                    <Icon icon="IoFitness" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>רמה:</strong>
                    {spot?.level}
                </li>
                <li className="border-b py-3">
                    <Icon icon="GiTeacher" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>מדריך:</strong>
                    {spot?.instructor ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="MdGroups" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>קבוצות:</strong>
                    {spot?.group ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="FaChildren" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>ילדים:</strong>
                    {spot?.kids ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="TbDisabled" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>נגישות:</strong>
                    {spot?.disabled ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="LuParkingCircle" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>חנייה:</strong>
                    {spot?.parking ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="IoFastFoodOutline" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>אוכל:</strong>
                    {spot?.food ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="FaShower" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>מקלחות:</strong>
                    {spot?.shower ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="PiDress" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>שירותים:</strong>
                    {spot?.toilet ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <strong>מלתחות:</strong>
                    {spot?.changing ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="IoWalletOutline" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>אחסון חפצים אישיים:</strong>
                    {spot?.storage ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="GiGlassCelebration" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>אופציה לארועים:</strong>
                    {spot?.events ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="MdEmojiPeople" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>שיעורים:</strong>
                    {spot?.lessons ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="CiShop" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>השכרת ציוד:</strong>
                    {spot?.rentals ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
                <li className="border-b py-3">
                    <Icon icon="HiShoppingBag" className="inline me-2 w-6 h-6 text-clr4" />
                    <strong>חנות:</strong>
                    {spot?.shop ? <Icon icon="IoCheckmark" className="inline text-green-600 w-7 h-7" /> : <Icon icon="IoClose" className="inline w-7 h-7 text-red-600" />}
                </li>
            </ul>
        </div>
    );
}


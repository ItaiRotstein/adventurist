
import { useContext } from "react";

// import GoogleMaps from "../cmps/GoogleMaps";
import { HeroCircles } from "../cmps/HeroCircles";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

export function SpotsPage() {
  const { spots } = useContext(SpotContext);

  return (
    <main className=" bg-[#fcfdff]">
      <div id="top" className="bg-cover bg-center h-[350px] md:h-[380px] lg:h-[650px]"
        style={{ backgroundImage: `url('https://res.cloudinary.com/itai-rotstein/image/upload/v1718747643/Adventurist/hero_all_spots_wfcxav.jpg')` }}
      >
        <h1 className="text-3xl text-white font-bold py-12  px-8 pt-16">
          גלו את כל הפעילויות: ההרפתקאות המובילות בישראל
        </h1>
      </div>
      <div className="main-layout">
        <p className="mt-4 ">
          פה תמצאו את מיטב ההרפתקאות והפעילויות שיש לישראל להציע. מאטרקציות טבע עוצרות נשימה ועד חוויות אקסטרים מרגשות, כאן תמצאו את כל מה שצריך כדי לתכנן את הטיול המושלם. התחילו לחקור את הפעילויות המובילות ובחרו את ההרפתקה הבאה שלכם!
        </p>
      </div>
      <h2 className="text-center text-xl font-bold pt-8">
        איזה סוג הרפתקאה אתם מחפשים?
      </h2>
      <HeroCircles />
      <div className="main-layout">
        <h2 className="text-2xl font-bold py-8">כל הפעילויות</h2>
        <ul>
          {spots.map((spot) => (
            <SpotPreview key={spot._id} spot={spot} parentCmp='SpotsPage' />
          ))}
        </ul>
      </div>
      {/* <div> */}
      {/* <GoogleMaps spots={spots} /> */}
      {/* <iframe
          src="https://www.google.com/maps/d/embed?mid=1bUec71KZGSWfOXSqmQDavBhQ4KBoAn8&ehbc=2E312F&noprof=1"
          className="w-full h-[400px] border-0"
        ></iframe> */}
      {/* </div> */}
    </main>
  );
}
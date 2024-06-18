
import { useContext } from "react";

import GoogleMaps from "../cmps/GoogleMaps";
import { ShareButtons } from "../cmps/ShareButtons";
import { HeroCircles } from "../cmps/HeroCircles";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

export function SpotsPage() {
  const { spots } = useContext(SpotContext);

  return (
    <main className="">
      <div id="top" className="bg-cover bg-center h-[350px] md:h-[380px] lg:h-[650px]"
        style={{ backgroundImage: `url('https://res.cloudinary.com/itai-rotstein/image/upload/v1718136925/Adventurist/adventurist_hero2_f3axno.jpg')` }}
      >
        <h1 className="text-3xl text-white font-bold p-12 pt-16">
          גלו את כל הפעילויות: ההרפתקאות המובילות בישראל
        </h1>
      </div>
      <div className="main-layout">
        <p className="mt-4 ">
          פה תמצאו את מיטב ההרפתקאות והפעילויות שיש לישראל להציע. מאטרקציות טבע עוצרות נשימה ועד חוויות אקסטרים מרגשות, כאן תמצאו את כל מה שצריך כדי לתכנן את הטיול המושלם. התחילו לחקור את הפעילויות המובילות ובחרו את ההרפתקה הבאה שלכם!
        </p>
        <ShareButtons />
      </div>
      <HeroCircles />
      <div className="main-layout">
        <h2 className="text-2xl font-bold py-8">כל הפעילויות</h2>
        <ul>
          {spots.map((spot) => (
            <SpotPreview key={spot._id} spot={spot} parentCmp='SpotsPage' />
          ))}
        </ul>
      </div>
      <div>
        <GoogleMaps spots={spots}/>
      </div>
    </main>
  );
}
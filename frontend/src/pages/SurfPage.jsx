
import { useEffect, useState, useContext } from "react";
import GoogleMaps from "../cmps/GoogleMaps";
import { ShareButtons } from "../cmps/ShareButtons";
import { SpotDetails } from "../cmps/SpotDetails";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

export function SurfPage() {
  const { spots } = useContext(SpotContext);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [pageSpots, setPageSpots] = useState([]);

  const kind = 'גלישה';

  useEffect(() => {
    setPageSpots(spots.filter(spot => spot.kind === kind));
  }, [spots]);

  return (
    <main className="pb-4">
      <div className="main-layout py-4">
        <h1 className="text-3xl">
          לרכוב על הגלים: נקודות גלישה בישראל
        </h1>
        <p className="mt-4 pb-4 text-xl">
          גלו את נקודות הגלישה, השיעורים והאירועים הטובים ביותר ברחבי ישראל
        </p>
        <ShareButtons />
      </div>
      <img src='https://res.cloudinary.com/itai-rotstein/image/upload/v1718136959/Adventurist/hero2_cgthvj.jpg' />
      <div className="main-layout py-8">
        <p>
          גלישת גלים היא פעילות מרגשת ומרתקת שמצריכה כושר גופני ויכולת ריכוז.
          גלישת גלים מתאימה לכל הגילאים ומתאימה למי שמחפש פעילות מרתקת ומאתגרת, למי שאוהב להיות במים ולהתמקם בסביבה טבעית ולמי שרוצה להתנסות בפעילות חדשה ומרתקת.
        </p>
      </div>
      <div className="main-layout">
        <h2 className="text-2xl font-bold py-8">כל נקודות הגלישה</h2>
        <ul>
          {pageSpots.map((spot) => spot.kind === kind && (
            <SpotPreview key={spot._id} spot={spot} />
          ))}
        </ul>
      </div>
      <div>
        <GoogleMaps spots={pageSpots} setSelectedMarker={setSelectedMarker} />
      </div>
      {selectedMarker && <SpotDetails spot={selectedMarker} />}
    </main>
  );
}
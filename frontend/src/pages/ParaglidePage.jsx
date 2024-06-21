
import { useEffect, useState, useContext } from "react";
import GoogleMaps from "../cmps/GoogleMaps";
import { ShareButtons } from "../cmps/ShareButtons";
import { SpotDetails } from "../cmps/SpotDetails";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

export function ParaglidePage() {
    const { spots } = useContext(SpotContext);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [pageSpots, setPageSpots] = useState([]);

  const type = 'פראגלייד';

  useEffect(() => {
    setPageSpots(spots.filter(spot => spot.type === type));
  }, [spots]);

    return (
        <main className="pb-4 ">
            <div className="main-layout py-4">
                <h1 className="text-3xl">
                    חווית מצנח רחיפה בלתי נשכחת
                </h1>
                <p className="mt-4 pb-4 text-xl">
                    גלו את עולם הרפתקאות האוויר עם מצנח רחיפה, חוויה מרגשת לכל רמת ניסיון
                </p>
                <ShareButtons />
            </div>
            <img src='https://res.cloudinary.com/itai-rotstein/image/upload/v1718393131/Adventurist/paraglide_hpmp9f.jpg' />
            <div className="main-layout py-8">
                <p>
                    מצנח רחיפה הוא ספורט אקסטרים שמאפשר לכם לחוות את החופש והאדרנלין של רחיפה מעל נופי הארץ המרהיבים. בין אם בהרים, בחופים או במדבר, הפעילות מתאימה לכל הרמות, עם מדריכים מנוסים שילוו אתכם. הצטרפו לחוויה ייחודית וגלו את כל מה שצריך לדעת על מצנח רחיפה בישראל.
                </p>
            </div>
            <div className="main-layout">
                <h2 className="text-2xl font-bold py-8">כל נקודות מצנח הרחיפה</h2>
                <ul>
          {pageSpots.map((spot) => spot.type === type && (
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

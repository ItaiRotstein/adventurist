
import { useEffect, useState, useContext } from "react";
import GoogleMaps from "../cmps/GoogleMaps";
import { ShareButtons } from "../cmps/ShareButtons";
import { SpotDetails } from "../cmps/SpotDetails";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

export function BicyclePage() {
  const { spots } = useContext(SpotContext);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [pageSpots, setPageSpots] = useState([]);

  const kind = 'bicycle';

  useEffect(() => {
    setPageSpots(spots.filter(spot => spot.kind === kind));
  }, [spots]);

  return (
    <main className="pb-4 bg-white">
      <div className="main-layout py-4">
        <h1 className="text-3xl">
          גלו את העולם על אופניים
        </h1>
        <p className="mt-4 pb-4 text-xl">
          חקרו את נקודות הטיפוס, הסיורים המודרכים ואתגרי הטיפוס הטובים ביותר ברחבי הארץ
        </p>
        <ShareButtons />
      </div>
      <img src='https://res.cloudinary.com/itai-rotstein/image/upload/v1718136960/Adventurist/hero5_nijt60.jpg' />
      <div className="main-layout py-8">
        <p>
          רכיבה על אופניים היא חוויה שמביאה אותנו לגלות נופים ייחודיים ולחוות את הטבע בצורה אופטימלית. בחרו מתוך מגוון רחב של מסלולים בישראל ובעולם, החל ממסלולים קצרים בשטחים שקטים ועד לאתגרים אקסטרימיים בהרים וביערות. בואו לחוות את הטבע וליהנות מהרגעים המרגשים ביותר על אופניים.
        </p>
      </div>
      <div className="main-layout">
        <h2 className="text-2xl font-bold py-8">כל פעילויות האופניים</h2>
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

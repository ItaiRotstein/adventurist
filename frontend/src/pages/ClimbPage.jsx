
import { useEffect, useState, useContext } from "react";
import GoogleMaps from "../cmps/GoogleMaps";
import { ShareButtons } from "../cmps/ShareButtons";
import { SpotDetails } from "../cmps/SpotDetails";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

export function ClimbPage() {
  const { spots } = useContext(SpotContext);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [pageSpots, setPageSpots] = useState([]);

  const kind = 'climb';

  useEffect(() => {
    setPageSpots(spots.filter(spot => spot.kind === kind));
  }, [spots]);

  return (
    <main className="pb-4">
      <div className="main-layout py-4">
      <h1 className="text-3xl">
          להגיע לגבהים חדשים: הרפתקאות טיפוס בישראל
        </h1>
        <p className="mt-4 pb-4 text-xl">
          חקרו את נקודות הטיפוס, הסיורים המודרכים ואתגרי הטיפוס הטובים ביותר ברחבי הארץ
        </p>
        <ShareButtons />
      </div>
      <img src='https://res.cloudinary.com/itai-rotstein/image/upload/v1718136960/Adventurist/hero4_lhiunh.jpg' />
      <div className="main-layout py-8">
        <p>
          גלו את נקודות הטיפוס המגוונות של ישראל, מהצוקים הסלעיים של הנגב ועד למסלולי הגליל השופעים. בין אם אתם מטפסים מתחילים או מנוסים, מצאו את המקום המושלם שלכם, התחברו למדריכים מומחים והצטרפו לקהילת הטיפוס. התכוננו לעלות לגבהים חדשים וליצור זיכרונות בלתי נשכחים.
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
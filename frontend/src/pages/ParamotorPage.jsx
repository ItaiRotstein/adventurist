
import { useEffect, useState, useContext } from "react";
import GoogleMaps from "../cmps/GoogleMaps";
import { ShareButtons } from "../cmps/ShareButtons";
import { SpotDetails } from "../cmps/SpotDetails";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

export function ParamotorPage() {
  const { spots } = useContext(SpotContext);

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [pageSpots, setPageSpots] = useState([]);

  const kind = 'paramotor';

  useEffect(() => {
    setPageSpots(spots.filter(spot => spot.kind === kind));
  }, [spots]);

  return (
    <main className="pb-4 bg-white">
      <div className="main-layout py-4">
        <h1 className="text-3xl">
          המריאו לגבהים: הרפתקאות מצנח רחיפה ממונע בישראל
        </h1>
        <p className="mt-4 pb-4 text-xl">
          גלו את חוויות מצנחי הרחיפה הממונעים המרגשות ביותר מעל נופי ישראל המרהיבים
        </p>
        <ShareButtons />
      </div>
      <img src='https://res.cloudinary.com/itai-rotstein/image/upload/v1718136960/Adventurist/hero3_tryvf5.jpg' />
      <div className="main-layout py-8">
        <p>
          חוו את הריגוש של מצנחי רחיפה ממונעים וצפו בנופי ישראל המדהימים ממעוף הציפור. בין אם אתם טייסים מתחילים או מנוסים, גלו את האתרים הטובים ביותר עם מדריכים מקצועיים והתחברו לקהילה תוססת של חובבי מצנחי רחיפה ממונעים. צאו להרפתקה אווירית שלא תשכחו לעולם.
        </p>
      </div>
      <div className="main-layout">
        <h2 className="text-2xl font-bold py-8">כל נקודות מצנח הרחיפה הממונע</h2>
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

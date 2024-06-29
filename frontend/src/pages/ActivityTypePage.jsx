
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

// import GoogleMaps from "../cmps/GoogleMaps";
import { ShareButtons } from "../cmps/ShareButtons";
import { SpotDetails } from "../cmps/SpotDetails";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

import { activityTypes } from "../activityTypes";

export function ActivityTypePage() {
    const { spots } = useContext(SpotContext);

    const [selectedMarker, setSelectedMarker] = useState(null);
    const [pageSpots, setPageSpots] = useState([]);
    const [pageActivity, setPageActivity] = useState('');
    const { type } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const foundActivity = activityTypes.find(activity => activity.type === type);
        if (!foundActivity) {
            navigate('/not-found'); // Redirect to NotFound page if activity is not found
        } else {
            setPageActivity(foundActivity);
            setPageSpots(spots.filter(spot => spot.type.includes(foundActivity.typeHebrew)));
        }
    }, [spots, type, navigate]);

    if (!pageActivity) return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
            <ClipLoader size={100} />
        </div>
    );

    return (
        <main className="pb-4">
            <div className="main-layout py-4">
                <h1 className="text-3xl">
                    {pageActivity.heading}
                </h1>
                <p className="mt-4 pb-4 text-xl">
                    {pageActivity.subHeading}
                </p>
                <ShareButtons />
            </div>
            <img src={pageActivity.imgSrc} />
            <div className="main-layout py-8">
                <p>
                    {pageActivity.paragraph}
                </p>
            </div>
            <div className="main-layout">
                <h2 className="text-2xl font-bold py-8">כל נקודות ה{pageActivity.typeHebrew}</h2>
                <ul>
                    {pageSpots.map((spot) => (
                        <SpotPreview key={spot._id} spot={spot} />
                    ))}
                </ul>
            </div>
            {/* <div>
                <GoogleMaps spots={pageSpots} setSelectedMarker={setSelectedMarker} />
            </div> */}
            {selectedMarker && <SpotDetails spot={selectedMarker} />}
        </main>
    );
}
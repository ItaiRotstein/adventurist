import { useEffect, useContext, memo } from "react";
import { useParams } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

import { SpotDetails } from "../cmps/SpotDetails";
import GoogleMaps from "../cmps/GoogleMaps";
import { SimilarSpots } from "../cmps/SimilarSpots";
import { SpotContext } from "../context/SpotContext";

export const SpotPage = memo(() => {
    const { id } = useParams();
    const { selectSpot, selectedSpot } = useContext(SpotContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        selectSpot(id);
    }, [id]);

    if (!selectedSpot) return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
            <ClipLoader size={100} />
        </div>
    );

    return (
        <div className="bg-white">
            <SpotDetails spot={selectedSpot} />
            <GoogleMaps spots={[selectedSpot]} />
            <SimilarSpots />
        </div>
    );
});
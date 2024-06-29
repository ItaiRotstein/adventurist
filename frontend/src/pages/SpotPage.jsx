import { useEffect, useContext, memo, useState } from "react";
import { useParams } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

import { SpotDetails } from "../cmps/SpotDetails";
import GoogleMaps from "../cmps/GoogleMaps";
import { SimilarSpots } from "../cmps/SimilarSpots";
import { SpotContext } from "../context/SpotContext";

export const SpotPage = memo(() => {
    const [isShowMap, setIsShowMap] = useState(false);
    const { id } = useParams();
    const { selectSpot, selectedSpot } = useContext(SpotContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        selectSpot(id);
    }, [id]);

    function extractIframeSrc(iframeString) {
        const srcRegex = /src="([^"]+)"/;
        const match = iframeString.match(srcRegex);
        return match ? match[1] : '';
    }

    if (!selectedSpot) return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
            <ClipLoader size={100} />
        </div>
    );

    return (
        <div className="">
            <SpotDetails spot={selectedSpot} />
            <div className="form-control">
                <label className="label cursor-pointer flex-col justify-center items-center gap-2">
                    <span className="label-text">מפה</span>
                    <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={isShowMap}
                        onChange={() => setIsShowMap(!isShowMap)}
                    />
                </label>
            </div>
            {isShowMap &&
                <div className="flex justify-center">
                    <iframe
                        src={extractIframeSrc(selectedSpot.mapsEmbed)}
                        className="w-full h-[400px] border-0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            }
            {/* {isShowMap && <GoogleMaps spots={[selectedSpot]} />} */}
            <SimilarSpots />
        </div>
    );
});
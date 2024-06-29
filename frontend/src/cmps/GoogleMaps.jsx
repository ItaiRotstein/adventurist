
import { useState, useCallback, memo } from 'react';
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const containerStyle = {
    width: '100%',
    height: '300px',
    marginTop: '40px'
};

const center = {
    lat: 31.383610133372072, 
    lng: 34.95811282122621
};

function GoogleMaps({ spots }) {
    const [activeMarker, setActiveMarker] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.setZoom(6.5);

        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);


    const handleActiveMarker = (spot) => {
        if (spot === activeMarker) {
            return;
        }
        setActiveMarker(spot);
    };
    return isLoaded ? (
        <div className="mb-8">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={7}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{ disableDefaultUI: false, zoomControl: true, fullscreenControl: false, streetViewControl: false, mapTypeControl: false }}
            >
                {spots.map((spot) => (
                    <MarkerF
                        key={spot._id}
                        position={spot.position}
                        // onMouseOver={() => handleActiveMarker(_id)}
                        onClick={() => handleActiveMarker(spot)}

                    // icon={{
                    //   url:"https://t4.ftcdn.net/jpg/02/85/33/21/360_F_285332150_qyJdRevcRDaqVluZrUp8ee4H2KezU9CA.jpg",
                    //   scaledSize: { width: 50, height: 50 }
                    // }}
                    >
                        {activeMarker === spot ? (
                            <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                <div
                                    onBlur={() => setActiveMarker(null)}
                                    className="p-2 bg-white rounded-lg shadow-lg max-w-xs text-center "
                                >
                                    <Link
                                        to={`/spot/${spot._id}`}
                                        className="no-underline text-black flex flex-col items-center overflow-hidden">
                                        <p className="mb-2 font-bold">{spot.name}</p>
                                        <div className="w-20 h-20">
                                            <img src={spot.img} alt={spot.name} className="object-cover w-full h-full rounded shadow" />
                                        </div>
                                    </Link>
                                </div>
                            </InfoWindowF>
                        ) : null}
                    </MarkerF>
                ))}
            </GoogleMap>
        </div>
    ) : (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
            <ClipLoader size={70} />
        </div>
    );
}

export default memo(GoogleMaps);
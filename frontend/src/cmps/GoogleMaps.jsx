
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
    lat: 32.36,
    lng: 34.96
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
        map.setZoom(7);

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
                        <InfoWindowF onCloseClick={() => setActiveMarker(null)} className="" >
                            <Link
                                to={`/spot/${spot._id}`}
                                className="whitespace-nowrap overflow-hidden text-overflow-ellipsis outline-none flex flex-col items-center text-ellipsis hover:underline">
                                <p>{spot.name}</p>
                                <img src={spot.img} alt={spot.name} className="w-20 h-20 object-cover rounded-md" />
                            </Link>
                        </InfoWindowF>
                    ) : null}
                </MarkerF>
            ))}
        </GoogleMap>
    ) : (
        <ClipLoader
            color="#4338ca"
            cssOverride={{ display: 'inline-block', position: 'relative', top: '4px' }}
            size={20}
        />
    );
}

export default memo(GoogleMaps);
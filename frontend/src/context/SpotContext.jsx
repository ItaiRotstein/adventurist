import React, { createContext, useState, useEffect } from 'react';
import { getSpots, getSpotById, getSimilarSpots } from "../service/spot.service";
export const SpotContext = createContext();

export const SpotProvider = ({ children }) => {
    const [spots, setSpots] = useState([]);
    const [selectedSpot, setSelectedSpot] = useState(null);
    const [similarSpots, setSimilarSpots] = useState([]);

    useEffect(() => {
        const fetchSpots = async () => {
            try {
                const spots = await getSpots();
                setSpots(spots);
            } catch (error) {
                console.log("Error fetching spots", error);
            };
        };

        fetchSpots();
    }, []);


    const selectSpot = async (spotId) => {
        const spot = await getSpotById(spotId);
        setSelectedSpot(spot);
        const filteredSpots = await getSimilarSpots(spot.type);
        setSimilarSpots(filteredSpots.filter(spot => spot._id !== spotId));
    };

    const value = {
        spots,
        selectedSpot,
        selectSpot,
        similarSpots
    };

    return (
        <SpotContext.Provider value={value}>
            {children}
        </SpotContext.Provider>
    );
};
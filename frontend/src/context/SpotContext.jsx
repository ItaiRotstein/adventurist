import React, { createContext, useState, useEffect } from 'react';
import { getSpots, getSpotById, getSimilarSpots, getAllTypes } from "../service/spot.service";
export const SpotContext = createContext();

export const SpotProvider = ({ children }) => {
    const [spots, setSpots] = useState([]);
    const [selectedSpot, setSelectedSpot] = useState(null);
    const [similarSpots, setSimilarSpots] = useState([]);
    const [types, setTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); 
            try {
                const spotsResponse = await getSpots();
                spotsResponse.sort((a, b) => a.name.localeCompare(b.name));
                setSpots(spotsResponse);
    
                // Extract types from spots
                const extractedTypes = [...new Set(spotsResponse.map(spot => spot.type).flat())];
                setTypes(extractedTypes);
            } catch (error) {
                console.log("Error fetching data", error);
            } finally {
                setIsLoading(false); 
            }
        };
    
        fetchData();
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
        similarSpots,
        types, 
        isLoading
    };

    return (
        <SpotContext.Provider value={value}>
            {children}
        </SpotContext.Provider>
    );
};
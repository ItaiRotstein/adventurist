import { useState, useEffect, useContext } from 'react';
import { ClipLoader } from 'react-spinners';
import { SpotContext } from '../context/SpotContext';
import { SpotPreview } from '../cmps/SpotPreview';

export const FavoritePage = () => {
    const { spots } = useContext(SpotContext);
    const [favoriteSpots, setFavoriteSpots] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const favoriteSpotIds = JSON.parse(localStorage.getItem('favorites')) || [];

        // Filter the spots that match the favorite IDs
        const filteredSpots = spots.filter(spot => favoriteSpotIds.includes(spot._id));

            setFavoriteSpots(filteredSpots);
            setIsLoading(false);
    }, [spots]);

    return (
        <div className="main-layout">
            <h2 className="py-4 text-2xl text-center">מועדפים</h2>

            {isLoading && (
                <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
                    <ClipLoader size={100} />
                </div>
            )
            }
            {!isLoading && favoriteSpots.length > 0 ? (
                <ul>
                    {favoriteSpots.map(spot => (
                        <SpotPreview key={spot._id} spot={spot} />
                    ))}
                </ul>
            ) : (
                <p className="text-lg text-center">אין לך מועדפים</p>
            )}
        </div>
    );
};

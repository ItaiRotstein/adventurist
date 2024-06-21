import { useContext } from 'react';
import { SpotContext } from '../context/SpotContext'; // Adjust the import path as necessary
import { SpotPreview } from '../cmps/SpotPreview'; // Adjust the import path as necessary

export const FavoritePage = () => {
    const { spots } = useContext(SpotContext);
    const favoriteSpotIds = JSON.parse(localStorage.getItem('favorites')) || [];

    return (
        <div className="main-layout">
            <h2 className="py-4 text-2xl text-center">מועדפים</h2>
            {favoriteSpotIds.length > 0 ? (
                <div>
                    {favoriteSpotIds.map(spotId => {
                        const spot = spots.find(s => s._id === spotId);
                        return spot ? <SpotPreview key={spotId} spot={spot} /> : null;
                    })}
                </div>
            ) : (
                <p className="text-lg text-center">אין לך מועדפים</p>
            )}
        </div>
    );
};
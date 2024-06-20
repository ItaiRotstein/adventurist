import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getSearchResults } from '../service/spot.service';
import { SpotPreview } from "../cmps/SpotPreview";
import { ClipLoader } from 'react-spinners';
import GoogleMaps from '../cmps/GoogleMaps';

export const SearchResultsPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');
  const kind = queryParams.get('kind');
  const region = queryParams.get('region');

  useEffect(() => {
    const getResults = async () => {
      try {
        // Pass both query and kind to the getSearchResults function
        const response = await getSearchResults(query, kind, region);
        setResults(response);
        // Use the results in your component
      } catch (error) {
        console.log("Error fetching search results", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };
    if (query || kind || region) {
      getResults();
    }
  }, [query, kind, region]); // Add kind to the dependency array to re-fetch when it changes

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', marginTop: '100px' }}>
        <ClipLoader size={100} />
      </div>
    );
  } else if (results.length === 0) {
    return (
      <div className="main-layout">
        <h1 className="text-2xl text-center">לא נמצאו תוצאות</h1>
      </div>
    );
  }

  return (
    <div className="main-layout">
      <h1 className="text-2xl text-center">תוצאות חיפוש</h1>
      <ul>
        {results.map((result, index) => (
          <SpotPreview key={result._id} spot={result} />
        ))}
      </ul>
      <GoogleMaps spots={results} />
    </div>
  );
};
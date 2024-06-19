import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { getSearchResults } from '../service/spot.service';
import { SpotPreview } from "../cmps/SpotPreview";

export const SearchResultsPage = () => {
  const [results, setResults] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('q');

  useEffect(() => {
    const getResults = async () => {
      try {
        const response = await getSearchResults(query);
        setResults(response);
        // Use the results in your component
      } catch (error) {
        console.log("Error fetching search results", error);
      }
    };
    if (query) {
      getResults();
    }
  }, [query]);

  if (!results || !results.length) {
    return <h2 className="text-center py-8">לא נמצאו תוצאות!</h2>;
  }

  return (
    <div className="main-layout bg-white">
      <ul>
        {results.map((result, index) => (
          <SpotPreview key={result._id} spot={result} />
        ))}
      </ul>
    </div>
  );
};
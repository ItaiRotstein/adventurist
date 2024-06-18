
import { useContext } from "react";
import { SpotPreview } from "../cmps/SpotPreview";
import { SpotContext } from "../context/SpotContext";

export const SimilarSpots = () => {

  const { similarSpots } = useContext(SpotContext);

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar mx-auto">
      {similarSpots.map((spot) => (
        <SpotPreview key={spot._id} spot={spot} />
      ))}
    </div>
  );
};
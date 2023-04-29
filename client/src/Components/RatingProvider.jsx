import { useState, createContext } from "react";
export const RatingContext = createContext();
export function RatingProvider({ children }) {
  const [rating, setRating] = useState(0);
  const contextRating = { rating, setRating };
  return (
    <RatingContext.Provider value={contextRating}>
      {children}
    </RatingContext.Provider>
  );
}

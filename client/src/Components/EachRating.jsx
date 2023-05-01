import { useContext } from "react";
import { RatingContext } from "./RatingProvider";
export default function EachRating({ num, index }) {
  const { rating, setRating } = useContext(RatingContext);
  return (
    <label key={num}>
      <input
        type="radio"
        name="rating"
        id="rating"
        onClick={() => {
          setRating(num);
        }}
      />
      <div
        className={
          rating === index + 1 ? "rating-number-active" : "rating-number"
        }
      >
        {num}
      </div>
    </label>
  );
}

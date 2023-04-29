import { useContext, useState } from "react";
import { RatingContext } from "./RatingProvider";
export default function EachRating({ num }) {
  const { rating, setRating } = useContext(RatingContext);
  const [active, setActive] = useState(0);
  console.log(rating);
  return (
    <label key={num}>
      <input
        type="radio"
        name="rating"
        id="rating"
        value={num}
        onClick={() => {
          setRating(num);
          setActive(1);
        }}
      />
      <div className={active === 0 ? "rating-number" : "rating-number-active"}>
        {num}
      </div>
    </label>
  );
}

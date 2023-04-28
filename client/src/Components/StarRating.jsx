import { useState } from "react";
import { Link } from "react-router-dom";
export default function StarRating() {
  const [rating, setRating] = useState(0);
  console.log(rating);
  return (
    <div className="container">
      <div className="rating-box">
        <div className="star-logo">
          <i className="bi bi-star-fill" style={{ color: "#f56f18" }}></i>
        </div>
        <div className="title-para">
          <p>How did we do?</p>
          <p>
            Please let us know we did with your support request.All feedback is
            appreciated to help us improve our offering !
          </p>
        </div>

        <div className="rating-number-box">
          {[1, 2, 3, 4, 5].map((num) => {
            return (
              <label key={num}>
                <input
                  type="radio"
                  name="rating"
                  id="rating"
                  value={num}
                  onClick={() => setRating(num)}
                />
                <div className="rating-number">{num}</div>
              </label>
            );
          })}
        </div>
        <Link to={`/`}>
          <button
            type="button"
            className="submit-button"
            onClick={() => {
              console.log(1);
            }}
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

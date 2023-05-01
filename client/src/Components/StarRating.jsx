import { Link } from "react-router-dom";

import EachRating from "./EachRating";
export default function StarRating() {
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
          {[1, 2, 3, 4, 5].map((num, index) => (
            <EachRating num={num} index={index} key={num} />
          ))}
        </div>
        <Link to={`/submitted`}>
          <button type="button" className="submit-button">
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
}

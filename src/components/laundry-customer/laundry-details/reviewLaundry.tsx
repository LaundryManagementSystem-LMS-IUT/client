import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ReviewForm from "./reviewForm";
import ReviewComponent from "./reviewComponent";
import ViewReviews from "./viewReviews";

type ReviewOrderProps={
  laundry_id:string|undefined,
  laundry_name:string,
  manager_email:string,
  customer_email:string
}

const ReviewOrder = ({customer_email,laundry_id,laundry_name,manager_email}:ReviewOrderProps) => {
  const [revealReviewForm, setRevealReviewForm] = useState(false);
  const [disabled,setDisabled]=useState(false);
  return (
    <div className="container">
      {/* =======================show reviewed orders  */}

      <div className="table view-reviews-table">
        <ReviewComponent customer_email={customer_email} laundry_id={laundry_id}  setRevealReviewForm={setRevealReviewForm}/>
        {/* add review form========================================= */}
        {revealReviewForm && (
          <ReviewForm customer_email={customer_email} manager_email={manager_email} setRevealReviewForm={setRevealReviewForm}/>
          )}
      </div>
      <div className="table view-reviews-table">
      <div className="top-title">
                  <h2>Ratings & Reviews</h2>
                </div>
      <ViewReviews customer_email={customer_email} laundry_name={laundry_name} manager_email={manager_email} setRevealReviewForm={setRevealReviewForm} disabled={disabled}/>
      </div>
    </div>
  );
};

export default ReviewOrder;

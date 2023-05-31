import { useState } from "react";
import { useRef } from "react";
import { IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
import StarsRating from "react-star-rate";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import ReviewForm from "./reviewForm";
import ReviewComponent from "./reviewComponent";

const ReviewOrder = () => {
  const [revealReviewForm, setRevealReviewForm] = useState(false);
  return (
    <>
      {/* =======================show reviewed orders  */}

      <div className="table view-reviews-table">
        <ReviewComponent  setRevealReviewForm={setRevealReviewForm}/>

        {/* add review form========================================= */}
        {revealReviewForm && (
          <ReviewForm setRevealReviewForm={setRevealReviewForm}/>
        )}
      </div>
    </>
  );
};

export default ReviewOrder;

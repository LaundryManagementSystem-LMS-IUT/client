import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
import StarsRating from "react-star-rate";

const ReviewOrder = () => {
  const [rating, setRating] = useState<number>(0);
  const [ratingEmpty, setRatingEmpty] = useState(false);
  const [revealReviewForm, setRevealReviewForm] = useState(false);
  const [review, setReview] = useState<string>("");

  const handleRatingChange = (newRating: number | undefined) => {
    if (newRating !== undefined) {
      setRating(newRating);
      if (newRating != 0) setRatingEmpty(false);
    }
  };
  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };
  const checkEmptyRating = () => {
    if (rating == 0) {
      setRatingEmpty(true);
      console.log("Rating empty!");
    } else {
      setRatingEmpty(false);
    }
  };

  const handleCancel = () => {
    setRevealReviewForm(false);
    setRating(0);
    setReview("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkEmptyRating();
    // axios.post ('', {msg:})
    console.log("Rating:", rating);
    console.log("Review:", review);
  };

  return (
    <>
      {/* =======================show reviewed orders  */}

      <div className="table view-reviews-table">
        <div className="my-review">
          <div className="title">
            <div className="container">
              <div className="display-rating">
                <StarsRating
                  classNamePrefix="avg-rating-stars"
                  value={4.5}
                  disabled={true}
                />
                <p>4.5 / 5</p>
              </div>
              <button
                className="edit-review-btn"
                onClick={() => setRevealReviewForm(true)}
              >
                <IonIcon icon={createOutline}></IonIcon>
              </button>
            </div>
          </div>
        </div>
        <div className="table review-comment">
          <div className="review">
            <div className="title">
              <span className="review-comment">"Loved the service!"</span>
            </div>
          </div>
        </div>

        {/* add review form========================================= */}
        {revealReviewForm && (
          <div className="new-review-form-bg">
            <div className="table new-review-form new-order-table">
              <div className="new-order add-review">
                <div className="title">
                  <h1>Review Order</h1>
                </div>
              </div>

              <form
                className=" add-review-form add-order-form"
                onSubmit={handleSubmit}
              >
                <div className="order-details-review">
                  <h4>Order ID: 1234</h4>
                  <h4>Laundry Name: ABC Laundry</h4>
                  <span>Payment: TK 1000</span>
                </div>

                <div className="customer-rating">
                  <StarsRating
                    classNamePrefix="customer-rating-stars"
                    value={rating}
                    onChange={handleRatingChange}
                    allowClear={false}
                  />
                  {ratingEmpty && (
                    <span className="rating-empty-warning">
                      *Field cannot be empty!
                    </span>
                  )}
                </div>

                <label htmlFor="review">Drop your review here</label>
                <div className="inputbox review-inputbox">
                  <textarea
                    id="review"
                    value={review}
                    onChange={handleReviewChange}
                  ></textarea>
                </div>
                {/* <div className="anonymous">
                  <label htmlFor="">
                    <input type="checkbox" />
                    <span>Anonymous Review</span>
                  </label>
                </div> */}

                <button className="place-order" type="submit">
                  Submit Review
                </button>
                <span className="cancel-order" onClick={() => handleCancel()}>
                  Cancel
                </span>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewOrder;

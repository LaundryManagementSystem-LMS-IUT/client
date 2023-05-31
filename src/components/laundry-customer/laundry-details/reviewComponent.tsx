import { IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
import StarsRating from "react-star-rate";

type ReviewComponentProps={
  setRevealReviewForm:React.Dispatch<React.SetStateAction<boolean>>
}

const ReviewComponent = ({setRevealReviewForm}:ReviewComponentProps) => {
  return ( 
  <div className="my-review">
  <div className="order-details-review d-flex mx-auto">
    <img
      src="/customerProfilePicture.jpg"
      width="40px"
      height="40px"
      alt="profile picture"
    ></img>
    <h5>Nafisa Maliyat</h5>
  </div>
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
  <div className="table review-comment">
          <div className="review">
            <div className="title">
              <span className="review-comment">"Loved the service!"</span>
            </div>
          </div>
        </div>
</div> );
}
 
export default ReviewComponent;
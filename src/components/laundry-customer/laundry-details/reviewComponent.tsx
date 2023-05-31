import { IonIcon } from "@ionic/react";
import { createOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import StarsRating from "react-star-rate";
import { useEmail } from "../../../Hooks/useEmail";
import axios from "axios";

type ReviewComponentProps={
  setRevealReviewForm:React.Dispatch<React.SetStateAction<boolean>>,
  laundry_id:string|undefined,
  customer_email:string
}

const ReviewComponent = ({customer_email,laundry_id,setRevealReviewForm}:ReviewComponentProps) => {
 const [review,setReview]=useState<{
  profile_picture:string,
  review:string,
  username:string,
  review_stars:number
 }>();
 const retrieveReview=async()=>{
  console.log(customer_email);
  const result=await axios.post(`http://localhost:8000/api/customer/get_reviews`,{
    customer_email:customer_email,
    laundry_id:laundry_id,
  }).then((res)=>{
    console.log(res);

    return res.data?.reviews}).catch((err)=>console.log(err));
    setReview(result);
 }
  useEffect(()=>{
     retrieveReview();
  },[customer_email])

    return ( 
      <div className="my-review">
      <div className="order-details-review d-flex mx-auto">
        <img
          src={review!==undefined && review?.profile_picture?review.profile_picture:"/customerProfilePicture.jpg"}
          width="40px"
          height="40px"
          alt="profile picture"
        ></img>
        <h5>Your Review</h5>
      </div>
      <div className="title">
        <div className="container">
          <div className="display-rating">
            <StarsRating
              classNamePrefix="avg-rating-stars"
              value={review!==undefined?review.review_stars:0}
              disabled={true}
            />
            <p>{review!==undefined && (<span>{review.review_stars}</span>)} / 5</p>
          </div>
          <button
            className="edit-review-btn"
            disabled={review===undefined}
            onClick={() => setRevealReviewForm(true)}
          >
            <IonIcon icon={createOutline}></IonIcon>
          </button>
        </div>
      </div>
      <div className="table review-comment">
              <div className="review">
                <div className="title">
                  {review!==undefined && (<span className="review-comment">{review.review}</span>)}
                </div>
              </div>
            </div>
    </div> );
  }


 
export default ReviewComponent;
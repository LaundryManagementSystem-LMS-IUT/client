import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import StarsRating from "react-star-rate";
import { useEmail } from "../../../Hooks/useEmail";

type ReviewFormProps={
  setRevealReviewForm:React.Dispatch<React.SetStateAction<boolean>>,
  manager_email:string,
  customer_email:string
}

const ReviewForm = ({customer_email,setRevealReviewForm,manager_email}:ReviewFormProps) => {

  const [customer,setCustomer]=useState<{
    username:string,
    email:string,
    profile_picture:string
  }>();
  const [rating, setRating] = useState<number>(0);
  const [ratingEmpty, setRatingEmpty] = useState(false);
  const [review, setReview] = useState<string>("");
  const [editorContent, setEditorContent] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const editorRef = useRef<ReactQuill | null>(null);
  const [exceededCharCount, setExceededCharCount] = useState(false);
  const MAX_CHARACTERS = 250;

  useEffect(()=>{
    const retrieveCustomerInfo=async()=>{
      const result=await axios.get('http://localhost:8000/api/customer/details/'+customer_email).then((res)=>{
        return res.data?.customer;
      }).catch(err=>console.log(err));
      setCustomer(result);
    }


  },[customer_email])

  const handleRatingChange = (newRating: number | undefined) => {
    if (newRating !== undefined) {
      setRating(newRating);
      if (newRating !== 0) setRatingEmpty(false);
    }
  };
  const handleEditorChange = (content: string) => {
    console.log(content);
    if (editorRef.current) {
      // Get the Quill instance
      const quill = editorRef.current.getEditor();

      // Get the plain text without HTML tags
      const text = quill.getText().trim();
      const strippedContent = text.replace(/<[^>]+>/g, ""); // Remove HTML tags
      const count = strippedContent.length;
      setEditorContent(content);
      setReview(strippedContent);
      setCharacterCount(strippedContent.length);
      if (count > MAX_CHARACTERS) setExceededCharCount(true);
      else setExceededCharCount(false);
    }
  };

  const handleReviewChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setReview(event.target.value);
  };
  const checkEmptyRating = () => {
    if (rating === 0) {
      setRatingEmpty(true);
    } else {
      setRatingEmpty(false);
    }
  };

  //this should be set to whatever the user had in the past (without changes)
  const handleCancel = () => {
    setRevealReviewForm(false);
    setRating(0);
    setReview("");
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkEmptyRating();
    // axios.post ('', {msg:})
    await axios.post('http://localhost:8000/api/customer/review',{
      customer_email:customer_email,
      manager_email:manager_email,
      review:review,
      review_stars:rating
    }).then((res)=>{
      console.log(res);
      window.location.reload();
    }).catch((err)=>console.log(err));
    console.log(rating);
    console.log(review);
  };
  return ( 
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
                <div className="order-details-review d-flex mx-auto">
                  <img
                    src={customer?.profile_picture?customer.profile_picture:"/customerProfilePicture.jpg"}
                    width="50px"
                    height="50px"
                    alt="profile picture"
                  ></img>
                  <h4>{customer?.username}</h4>
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
                <ReactQuill
                  className="editor"
                  value={editorContent}
                  ref={editorRef} //
                  onChange={handleEditorChange}
                  modules={{ toolbar: false }}
                />
                <p
                  className={`show-character-count ${
                    exceededCharCount ? "warning" : ""
                  }`}
                >
                  Character Count: {characterCount}/{MAX_CHARACTERS}
                </p>

                <button
                  className={`place-order ${
                    exceededCharCount ? "disabled-button" : ""
                  }`}
                  type="submit"
                  disabled={exceededCharCount}
                >
                  Submit Review
                </button>
                <span className="cancel-order" onClick={() => handleCancel()}>
                  Cancel
                </span>
              </form>
            </div>
          </div>
   );
}
 
export default ReviewForm;
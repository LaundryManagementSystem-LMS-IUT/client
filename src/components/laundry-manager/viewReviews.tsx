import { useEffect, useState } from "react";
import { ActivePageType } from "../../utils/activePageTypes";
import NavbarManager from "../partials/navbarManager";
import HeaderManager from "../partials/headerManager";
import StarsRating from "react-star-rate";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import Loader from "../partials/loader";
import { useEmail } from "../../Hooks/useEmail";

const ViewReviews = () => {
  const [navigation, setNavigation] = useState(false);
  const {email}=useEmail();

  const [sum,setSum]=useState(0);
  const [reviews,setReviews]=useState<{
    profile_picture:string,
    username:string,
    review:string,
    review_stars:number
  }[]|undefined>();

  const retrieveReviews=async()=>{
    const result=await axios.get('http://localhost:8000/api/manager/review/'+email).then((res)=>{
    return res.data.reviews;
  }).catch((err)=>console.log(err));
  setReviews(result);
  }

  useEffect(()=>{
    if(email!==""){
      retrieveReviews();
    }
  },[email])

  useEffect(()=>{
    if(reviews){
      let totalValue:number=0;
    let count:number=0;
    reviews.forEach((review)=>{
      totalValue=totalValue+Number(review.review_stars);
      count=count+1;
    })
    if(count!==0){
      setSum(totalValue/count);
    }
    else{
      setSum(0);
    }
    }
  },[reviews])

  const itemsPerPage = 4; // Number of items per page
  const totalPages = Math.ceil(reviews && reviews?.length && reviews.length!==0?reviews.length / itemsPerPage:0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedReviews =reviews && reviews?.length && reviews.length!==0?reviews.slice(startIndex, endIndex):[];
  if(reviews!==undefined){
    return (
      <>
        <NavbarManager
          navigation={navigation}
          setNavigation={setNavigation}
          activePage={ActivePageType.ReviewOrder}
        />
        <div className="view-review-container">
          <div className="main">
            <HeaderManager
              navigation={navigation}
              setNavigation={setNavigation}
            />
  
            <div className="table new-order-table">
              <div className="new-order">
                <div className="title">
                  <h1>Laundry Rating</h1>
                  <div className="container col-lg-12">
                    <StarsRating
                      classNamePrefix="avg-rating-stars col"
                      value={sum}
                      disabled={true}
                    />
                    <p className="avg-rating col">{sum} / 5</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <div className="table view-all-review-table">
                <div className="top-title">
                  <h2>Ratings & Reviews</h2>
                </div>
  
                {displayedReviews.map((review, index) => (
                  <div className="table view-reviews-table">
                    <div className="review-card" key={index}>
                      <div className="title">
                        <h4>{review.username}</h4>
                        <div className="container col-lg-12">
                          <StarsRating
                            classNamePrefix="avg-rating-stars col"
                            value={review.review_stars}
                            disabled={true}
                          />
                          <p className="avg-rating col">{review.review_stars} / 5</p>
                        </div>
                      </div>
                      <div className="table review-comment">
                        <div className="review">
                          <div className="title">
                            <span className="review-comment">
                              {review.review}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-3">
              <Pagination className="m-auto py-3">
                <Pagination.First
                  onClick={() => handlePageChange(1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className="pagination"
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
                <Pagination.Last
                  onClick={() => handlePageChange(totalPages)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          </div>
        </div>
      </>
    );
  }
  else{
    return(
      <Loader/>
    )
  }
};

export default ViewReviews;

import { useState } from "react";
import { ActivePageType } from "../../utils/activePageTypes";
import NavbarManager from "../partials/navbarManager";
import HeaderManager from "../partials/headerManager";
import StarsRating from "react-star-rate";
import { Pagination } from "react-bootstrap";

const ViewReviews = () => {
  const [navigation, setNavigation] = useState(false);
  const reviews = [
    {
      userName: "Nafisa Maliyat",
      rating: 4.5,
      review: "Loved the service!",
    },
    {
      userName: "John Doe",
      rating: 3.8,
      review: "Great experience overall.",
    },
    {
      userName: "Jane Smith",
      rating: 5.0,
      review: "Highly recommend!",
    },
    {
      userName: "David Johnson",
      rating: 4.2,
      review: "Excellent service and prompt delivery.",
    },
    {
      userName: "Emily Brown",
      rating: 4.7,
      review: "Impressed with the quality of work.",
    },
    {
      userName: "Michael Wilson",
      rating: 3.5,
      review: "Decent service, but room for improvement.",
    },
    {
      userName: "Sophia Anderson",
      rating: 4.9,
      review: "Professional and reliable laundry service.",
    },
    {
      userName: "Jacob Martinez",
      rating: 4.0,
      review: "Satisfied with the results.",
    },
    {
      userName: "Olivia Thompson",
      rating: 4.6,
      review: "Convenient and efficient laundry service.",
    },
    {
      userName: "Daniel Garcia",
      rating: 3.2,
      review: "Average experience, nothing exceptional.",
    },
    {
      userName: "Isabella Rodriguez",
      rating: 4.8,
      review: "Highly satisfied with the quality of service.",
    },
    {
      userName: "Liam Hernandez",
      rating: 4.3,
      review: "Timely pickup and delivery.",
    },
    {
      userName: "Ava Lopez",
      rating: 4.5,
      review: "Good customer service.",
    },
    {
      userName: "Noah Gonzalez",
      rating: 3.9,
      review: "Decent prices for the service provided.",
    },
    {
      userName: "Mia Adams",
      rating: 4.7,
      review: "Prompt and reliable laundry service.",
    },
    {
      userName: "Ethan Clark",
      rating: 4.1,
      review: "Satisfied with the overall experience.",
    },
    {
      userName: "Charlotte Lewis",
      rating: 4.6,
      review: "Efficient and professional service.",
    },
    {
      userName: "Alexander Green",
      rating: 4.4,
      review: "Good job with the laundry.",
    },
    {
      userName: "Amelia Turner",
      rating: 4.9,
      review: "Impressed with the attention to detail.",
    },
    {
      userName: "James Parker",
      rating: 3.7,
      review: "Average service, nothing extraordinary.",
    },
  ];

  const itemsPerPage = 4; // Number of items per page
  const totalPages = Math.ceil(reviews.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedReviews = reviews.slice(startIndex, endIndex);
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
                    value={4.67}
                    disabled={true}
                  />
                  <p className="avg-rating col">4.67 / 5</p>
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
                      <h4>{review.userName}</h4>
                      <div className="container col-lg-12">
                        <StarsRating
                          classNamePrefix="avg-rating-stars col"
                          value={review.rating}
                          disabled={true}
                        />
                        <p className="avg-rating col">{review.rating} / 5</p>
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
};

export default ViewReviews;

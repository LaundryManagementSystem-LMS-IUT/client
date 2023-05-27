import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, mailOutline } from "ionicons/icons";
import { ActivePageType } from "../../utils/activePageTypes";
import NavbarManager from "../partials/navbarManager";
import HeaderManager from "../partials/headerManager";
import StarsRating from "react-star-rate";

const ViewReviews = () => {
  const [navigation, setNavigation] = useState(false);
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

              <div className="table view-reviews-table">
                <div className="review-card">
                  <div className="title">
                    <h4>Nafisa Maliyat</h4>
                    <div className="container col-lg-12">
                      <StarsRating
                        classNamePrefix="avg-rating-stars col"
                        value={4.5}
                        disabled={true}
                      />
                      <p className="avg-rating col">4.5 / 5</p>
                    </div>
                  </div>
                </div>
                <div className="table review-comment">
                  <div className="review">
                    <div className="title">
                      <span className="review-comment">
                        "Loved the service!"
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="wrap-pagination">
            <li className="number">«</li>
            <li className="number selected">1</li>
            <li className="number">2</li>
            <li className="number">3</li>
            <li className="number">4</li>
            <li className="number">»</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ViewReviews;

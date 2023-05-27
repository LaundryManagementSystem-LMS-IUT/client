import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { addCircleOutline, mailOutline } from "ionicons/icons";
import { ActivePageType } from "../../utils/activePageTypes";
import NavbarManager from "../partials/navbarManager";
import HeaderManager from "../partials/headerManager";

const ViewReviews = () => {
  const [navigation, setNavigation] = useState(false);
  return (
    <>
      <NavbarManager
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.Notifications}
      />
      <div className="notifications-container">
        <div className="main">
          <HeaderManager
            laundryName={"Mirza Azwad"}
            navigation={navigation}
            setNavigation={setNavigation}
          />

          <h1 className="notification-header">Your Notifications</h1>

          <div className="table view-reviews-table">
            <div className="notifications my-review">
              <div className="container">
                <h3>Order ID: 1234</h3>
                <span>
                  Your order was marked as complete. sdffffffffffffffffffffffff
                  dfffffffffffffffffffffffffffffffffffffffffffffffffffffff
                  dfffffddddddddddddddddddddddddddddddddddddddddddddweeeeeeeeeeeeeeee54444444444444444444444444444444444444444444444444444444444444444444444444444
                </span>
                <br />
                11:28 PM
              </div>
            </div>
          </div>

          <div className="table view-reviews-table">
            <div className="notifications my-review">
              <div className="container">
                <h3>Order ID: 1234</h3>
                <span>Your order was marked as complete.</span>
                <br />
                11:28 PM
              </div>
            </div>
          </div>

          <ul className="wrap-pagination notification-pagination">
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

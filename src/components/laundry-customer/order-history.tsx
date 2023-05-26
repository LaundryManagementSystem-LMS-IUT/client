import { IonIcon } from "@ionic/react";
import { addCircleOutline, mailOutline } from "ionicons/icons";
import { useEffect, useState } from "react";
import NavbarCustomer from "../partials/navbarCustomer";
import HeaderCustomer from "../partials/headerCustomer";
import AddNewOrder from "./addNewOrder";

const OrderHistoryCustomer = () => {
  const [navigation, setNavigation] = useState(false);

  useEffect(() => {
    const doneElements = document.querySelectorAll<HTMLElement>(
      ".wrap-item .order-progress .done"
    );
    const totalElements = document.querySelectorAll<HTMLElement>(
      ".wrap-item .order-progress .total"
    );
    const progressElements = document.querySelectorAll<HTMLElement>(
      ".wrap-item .order-progress .progress-done"
    );
    const progressTextElements = document.querySelectorAll<HTMLElement>(
      ".wrap-item .order-progress .progress-text"
    );

    for (let i = 0; i < doneElements.length; i++) {
      const doneAmount = parseInt(doneElements[i].innerHTML);
      const totalAmount = parseInt(totalElements[i].innerHTML);

      progressElements[i].style.width = `${(doneAmount / totalAmount) * 100}%`;
      progressTextElements[i].innerText = `${Math.ceil(
        (doneAmount / totalAmount) * 100
      )}%`;
    }
  }, []);

  return (
    <div className="history-customer">
      <NavbarCustomer navigation={navigation} setNavigation={setNavigation} />
      <div className="container">
        <div className="main">
          <HeaderCustomer
            username={"Mirza Azwad"}
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <AddNewOrder />
          <div className="wrapper">
            <div className="table">
              <div className="top-title">
                <h2>Orders</h2>
              </div>
              <div className="wrap-input">
                <input
                  type="number"
                  placeholder="Search order ID..."
                  className="search"
                />
              </div>
              <div className="wrap-content">
                <div className="wrap-title">
                  <div className="id">
                    <span>ID</span>
                  </div>
                  <div className="laundry-name">
                    <span>Laundry Name</span>
                  </div>
                  <div className="payment">
                    <span>Payment</span>
                  </div>
                  <div className="progress-header">
                    <span>Progress</span>
                  </div>
                  <div className="status">
                    <span>Status</span>
                  </div>
                </div>

                <div className="wrap-item">
                  <div className="id">
                    <span>1</span>
                  </div>
                  <div className="laundry-icon">
                    <span>ABC Laundry</span>
                  </div>
                  <div className="payment">
                    <span>Tk 1000</span>
                  </div>
                  <div className="order-progress">
                    <div className="the-bar">
                      <span className="done hidden">4</span>
                      <span className="total hidden">10</span>
                      <div className="progress-done"></div>
                    </div>

                    <span className="progress-text"></span>
                  </div>
                  <div className="status">
                    <span className="status completed">Completed</span>
                  </div>
                </div>
                <div className="orderDetails hidden">
                  <div className="wrap-details header">
                    <div className="icon">
                      <span>Item</span>
                    </div>
                    <div className="quantity">
                      <span>Progress</span>
                    </div>
                  </div>
                  <div className="wrap-details item">
                    <div className="icon">
                      <span>Pants</span>
                    </div>
                    <div className="quantity">
                      <span>
                        <span className="num">1</span>
                      </span>
                      /<span className="total-quantity"> 5</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCustomer;

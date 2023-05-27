import { IonIcon } from "@ionic/react";
import { cartOutline, cashOutline } from "ionicons/icons";
import NavbarManager from "../partials/navbarManager";
import HeaderManager from "../partials/headerManager";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActivePageType } from "../../utils/activePageTypes";

const DashboardManager = () => {
  const [navigation, setNavigation] = useState(false);
  const navigate = useNavigate();
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
  const viewDetails = () => {
    navigate("/manager/history");
  };
  return (
    <div className="manager-dashboard">
      <NavbarManager
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.Dashboard}
      />
      <div className="manager-dashboard-container">
        <div className="main">
          <HeaderManager
            laundryName={"Mirza Azwad"}
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <div className="profile">
            <h2>{"Mirza Azwad"}</h2>
          </div>
          <div className="cardBox">
            <div className="card">
              <div>
                <div className="numbers">80</div>
                <div className="cardName">Orders</div>
              </div>

              <div className="iconBx">
                <IonIcon name={cartOutline}></IonIcon>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="numbers">৳ 7,842</div>
                <div className="cardName">Earning</div>
              </div>

              <div className="iconBx">
                <IonIcon name={cashOutline}></IonIcon>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="table">
              <div className="top-title">
                <h2>Recent Orders</h2>
              </div>
              <div className="first-line">
                <div className="wrap-input">
                  <input
                    type="number"
                    min="0"
                    placeholder="Search order ID..."
                    className="search"
                  />
                </div>
                <div className="view-more-orders">
                  <button className="view-details" onClick={viewDetails}>
                    View Detailed History
                  </button>
                </div>
              </div>

              <div className="wrap-content">
                <div className="wrap-title">
                  <div className="id">
                    <span>ID</span>
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
                  <div className="payment">
                    <span>Tk 1000</span>
                  </div>
                  <div className="order-progress">
                    <div className="the-bar">
                      <span className="done hidden">0</span>
                      <span className="total hidden">10</span>
                      <div className="progress-done"></div>
                    </div>

                    <span className="progress-text"></span>
                  </div>
                  <div className="status">
                    <span className="status pending">Pending</span>
                  </div>
                </div>

                <div className="wrap-item">
                  <div className="id">
                    <span>2</span>
                  </div>
                  <div className="payment">
                    <span>Tk 1000</span>
                  </div>
                  <div className="order-progress">
                    <div className="the-bar">
                      <span className="done hidden">13</span>
                      <span className="total hidden">13</span>
                      <div className="progress-done"></div>
                    </div>

                    <span className="progress-text"></span>
                  </div>
                  <div className="status">
                    <span className="status completed">Completed</span>
                  </div>
                </div>

                <div className="wrap-item">
                  <div className="id">
                    <span>3</span>
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
                    <span className="status processing">Processing</span>
                  </div>
                </div>

                <div className="wrap-item">
                  <div className="id">
                    <span>4</span>
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
                    <span className="status processing">Processing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardManager;

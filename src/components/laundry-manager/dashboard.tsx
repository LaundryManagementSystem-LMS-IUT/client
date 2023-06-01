import { IonIcon } from "@ionic/react";
import { cartOutline, cashOutline } from "ionicons/icons";
import NavbarManager from "../partials/navbarManager";
import HeaderManager from "../partials/headerManager";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ActivePageType } from "../../utils/activePageTypes";

interface ItemData {
  name: string;
  washType: string;
  quantity: number;
}

interface OrderData {
  id: string;
  userName: string;
  payment: number;
  status: string;
  items: ItemData[];
}

const DashboardManager = () => {
  const [navigation, setNavigation] = useState(false);
  const [orders, setOrders] = useState<OrderData[]>([]);
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

  useEffect(() => {
    const email = "dummymanager@iut-dhaka.edu";
    const getOrderHistory = async () => {
      await axios
        .get("http://localhost:8000/api/order/getManagerOrderHistory/"+email)
        .then((res) => {
          console.log(res);
          setOrders(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getOrderHistory();
  }, []);
  //set css of status fetched
  function getStatusClass(status: string) {
    if (status === "COMPLETED") {
      return "completed";
    } else if (
      status === "PROCESSING" ||
      status === "DELIVERING" ||
      status === "DELIVERED"
    ) {
      return "processing";
    } else if (status === "PENDING" || status === "Collecting") {
      return "pending";
    } else if (status === "CANCELLED") {
      return "cancelled";
    }
    return "";
  }

  function getDoneAmount(status: string) {
    if (status === "COMPLETED") {
      return 100;
    } else if (status === "PROCESSING") {
      return 50;
    } else if (status === "PENDING" || status === "Collecting") {
      return 25;
    } else if (status === "DELIVERING") {
      return 75;
    } else if (status === "CANCELLED") {
      return 0;
    }
    return 0; // Return null instead of an empty string
  }
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
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <div className="profile">
            <h2>{"Dummy Manager"}</h2>
          </div>
          {/* <div className="cardBox">
            <div className="card">
              <div>
                <div className="numbers">80</div>
                <div className="cardName">Orders</div>
              </div>

              <div className="iconBx">
                <IonIcon icon={cartOutline}></IonIcon>
              </div>
            </div>

            <div className="card">
              <div>
                <div className="numbers">৳ 7,842</div>
                <div className="cardName">Earning</div>
              </div>

              <div className="iconBx">
                <IonIcon icon={cashOutline} ></IonIcon>
              </div>
            </div>
          </div> */}
          <div className="wrapper">
            <div className="table">
              <div className="top-title">
                <h2>Recent Orders</h2>
              </div>
              <div className="first-line">
                <div className="view-more-orders">
                  <button className="view-details" onClick={viewDetails}>
                    View All Orders
                  </button>
                </div>
              </div>

              <div className="wrap-content  dashboard-wrap-content">
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

                {orders.map((order) => (
                  <div className="wrap-item" key={order.id}>
                    <div className="id">
                      <span>{order.id}</span>
                    </div>
                    <div className="payment">
                      <span>Tk {order.payment}</span>
                    </div>
                    <div className="order-progress">
                      <div className="the-bar">
                        <span className="done hidden">
                          {getDoneAmount(order.status)}
                        </span>
                        <span className="total hidden">100</span>
                        <div className="progress-done"></div>
                      </div>

                      <span className="progress-text"></span>
                    </div>
                    <div className="status">
                      <span
                        className={`status ${getStatusClass(order.status)}`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardManager;

import { IonIcon } from "@ionic/react";
import { cashOutline, cartOutline } from "ionicons/icons";
import NavbarCustomer from "../partials/navbarCustomer";
import HeaderCustomer from "../partials/headerCustomer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ActivePageType } from "../../utils/activePageTypes";
import axios from "axios";

interface ItemData {
  name: string;
  washType: string;
  quantity: number;
}

interface OrderData {
  id: string;
  laundryName: string;
  payment: number;
  status: string;
  items: ItemData[];
}

const DashboardCustomer = () => {
  const [navigation, setNavigation] = useState(false);
  const [orders, setOrders] = useState<OrderData[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = "nafisamaliyat@iut-dhaka.edu";
    const getOrderHistory = async () => {
      await axios
        .get("http://localhost:8000/api/order/getCustomerHistory/" + email)
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
  });

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
    navigate("/customer/history");
  };
  return (
    <div className="customer-dashboard">
      <NavbarCustomer
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.Dashboard}
      />
      <div className="customer-dashboard-container">
        <div className="main">
          <HeaderCustomer
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <div className="profile">
            <h2>Welcome, {"Mirza Azwad"} !</h2>
          </div>
          <div className="wrapper">
            <div className="table">
              <div className="top-title">
                <h2>Recent Orders</h2>
              </div>
              <div className="first-line">
                <div className="wrap-input"></div>
                <div className="view-more-orders">
                  <button className="view-details" onClick={viewDetails}>
                    View Order Details
                  </button>
                </div>
              </div>

              <div className="wrap-content dashboard-wrap-content">
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

export default DashboardCustomer;

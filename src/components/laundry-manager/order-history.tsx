import { useEffect, useState } from "react";
import NavbarManager from "../partials/navbarManager";
import HeaderManager from "../partials/headerManager";
import { ActivePageType } from "../../utils/activePageTypes";
import { Pagination } from "react-bootstrap";

const OrderHistoryManager = () => {
  const [navigation, setNavigation] = useState(false);
  const [orders] = useState([
    {
      id: 1023,
      userName: "Nafisa Maliyat",
      payment: "Tk 1000",
      done: 4,
      total: 10,
      status: "Completed",
    },
    {
      id: 1024,
      userName: "John Doe",
      payment: "Tk 750",
      done: 6,
      total: 8,
      status: "In Progress",
    },
    {
      id: 1025,
      userName: "Jane Smith",
      payment: "Tk 500",
      done: 3,
      total: 5,
      status: "Completed",
    },
    {
      id: 1026,
      userName: "David Johnson",
      payment: "Tk 1200",
      done: 2,
      total: 6,
      status: "In Progress",
    },
    {
      id: 1027,
      userName: "Emily Brown",
      payment: "Tk 900",
      done: 5,
      total: 7,
      status: "Completed",
    },
    {
      id: 1028,
      userName: "Michael Wilson",
      payment: "Tk 800",
      done: 7,
      total: 9,
      status: "In Progress",
    },
    {
      id: 1029,
      userName: "Sophia Anderson",
      payment: "Tk 1500",
      done: 4,
      total: 6,
      status: "Completed",
    },
    {
      id: 1030,
      userName: "Jacob Martinez",
      payment: "Tk 600",
      done: 3,
      total: 5,
      status: "In Progress",
    },
    {
      id: 1031,
      userName: "Olivia Thompson",
      payment: "Tk 1000",
      done: 6,
      total: 8,
      status: "Cancelled",
    },
    {
      id: 1032,
      userName: "Daniel Garcia",
      payment: "Tk 700",
      done: 2,
      total: 4,
      status: "In Progress",
    },
    {
      id: 1033,
      userName: "Isabella Rodriguez",
      payment: "Tk 850",
      done: 5,
      total: 7,
      status: "Completed",
    },
    {
      id: 1034,
      userName: "Liam Hernandez",
      payment: "Tk 950",
      done: 3,
      total: 6,
      status: "In Progress",
    },
    {
      id: 1035,
      userName: "Ava Lopez",
      payment: "Tk 1200",
      done: 7,
      total: 10,
      status: "Completed",
    },
    {
      id: 1036,
      userName: "Noah Gonzalez",
      payment: "Tk 500",
      done: 0,
      total: 6,
      status: "Pending",
    },
    {
      id: 1037,
      userName: "Mia Adams",
      payment: "Tk 900",
      done: 8,
      total: 8,
      status: "Completed",
    },
    {
      id: 1038,
      userName: "Ethan Clark",
      payment: "Tk 650",
      done: 3,
      total: 5,
      status: "In Progress",
    },
  ]);

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

  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(orders.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedOrders = orders.slice(startIndex, endIndex);

  function getStatusClass(status:string) {
    if (status === "Completed") {
      return "completed";
    } else if (status === "In Progress") {
      return "processing";
    } else if (status === "Pending") {
      return "pending";
    } else if (status === "Cancelled") {
      return "cancelled";
    }
    return "";
  }

  return (
    <div className="history-manager">
      <NavbarManager
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.OrderHistory}
      />
      <div className="manager-history-container">
        <div className="main">
          <HeaderManager
            navigation={navigation}
            setNavigation={setNavigation}
          />
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

                {displayedOrders.map((order) => (
                  <div className="wrap-item">
                    <div className="id">
                      <span>{order.id}</span>
                    </div>
                    <div className="laundry-icon">
                      <span>{order.userName}</span>
                    </div>
                    <div className="payment">
                      <span>{order.payment}</span>
                    </div>
                    <div className="order-progress">
                      <div className="the-bar">
                        <span className="done hidden">{order.done}</span>
                        <span className="total hidden">{order.total}</span>
                        <div className="progress-done"></div>
                      </div>

                      <span className="progress-text"></span>
                    </div>
                    <div className="status">
                      <span className={`status ${getStatusClass(order.status)}`}>{order.status}</span>
                    </div>
                  </div>
                ))}
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
              </div>
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
    </div>
  );
};

export default OrderHistoryManager;

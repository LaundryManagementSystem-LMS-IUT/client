import { useEffect, useState } from "react";
import NavbarCustomer from "../partials/navbarCustomer";
import HeaderCustomer from "../partials/headerCustomer";
import { ActivePageType } from "../../utils/activePageTypes";
import { Pagination } from "react-bootstrap";
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

const OrderHistoryCustomer = () => {
  const [navigation, setNavigation] = useState(false);
  const [seeDetails, setSeeDetails] = useState<string | null>(null);
  const [orders, setOrders] = useState<OrderData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const updateProgress = () => {
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

    //progress calculation
    for (let i = 0; i < doneElements.length; i++) {
      const doneAmount = parseInt(doneElements[i].innerHTML);
      const totalAmount = parseInt(totalElements[i].innerHTML);

      progressElements[i].style.width = `${(doneAmount / totalAmount) * 100}%`;
      progressTextElements[i].innerText = `${Math.ceil(
        (doneAmount / totalAmount) * 100
      )}%`;
    }
  };

  useEffect(() => {
    updateProgress();
  }, [searchQuery, orders]);

  useEffect(()=>{
    const email='nafisamaliyat@iut-dhaka.edu'
    const getOrderHistory = async () => {
      await axios
      .get("http://localhost:8000/api/order/getCustomerHistory/"+email)
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    getOrderHistory();
  }, []);

  const itemsPerPage = 8; // Number of items per page
  const totalPages = Math.ceil(orders.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedOrders = orders
    .filter(
      (order) =>
        order.laundryName.toLowerCase().includes(searchQuery) ||
        order.id.toString().includes(searchQuery) ||
        order.status.toLowerCase().includes(searchQuery)
    )
    .slice(startIndex, endIndex);

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

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setCurrentPage(1); // Reset current page when search query changes
    updateProgress();
  };

  const getHighlightedText = (text: string, highlight: string) => {
    if (!text || !highlight) {
      return text; // Return the original text if either the text or highlight is empty
    }

    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  return (
    <div className="history-customer">
      <NavbarCustomer
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.OrderHistory}
      />
      <div className="order-history-container">
        <div className="main">
          <HeaderCustomer
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
                  type="text"
                  placeholder="Search ID / Name / Status"
                  className="search"
                  value={searchQuery}
                  onChange={handleSearch}
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
                  <>
                    <div
                      className="wrap-item"
                      onClick={() =>
                        setSeeDetails(seeDetails === order.id ? null : order.id)
                      }
                    >
                      <div className="id">
                        <span>
                          {getHighlightedText(order.id.toString(), searchQuery)}
                        </span>
                      </div>
                      <div className="laundry-icon">
                        <span>
                          {getHighlightedText(order.laundryName, searchQuery)}
                        </span>
                      </div>
                      <div className="payment">
                        <span>{order.payment}</span>
                      </div>
                      <div className="order-progress">
                        <div className="the-bar">
                          <span className="done hidden">{getDoneAmount(order.status)}</span>
                          <span className="total hidden">100</span>
                          <div className="progress-done"></div>
                        </div>

                        <span className="progress-text"></span>
                      </div>
                      <div className="status">
                        <span
                          className={`status ${getStatusClass(order.status)}`}
                        >
                          {getHighlightedText(order.status, searchQuery)}
                        </span>
                      </div>
                    </div>
                    {seeDetails === order.id && (
                      <div className="orderDetails">
                        <div className="wrap-details header">
                          <div className="icon">
                            <span>Item</span>
                          </div>
                          <div className="quantity">
                            <span>Quantity</span>
                          </div>
                        </div>
                        {order.items.map((item) => (
                          <>
                            <div className="wrap-details item">
                              <div className="icon">
                                <span>{item.name}</span>
                              </div>
                              <div className="quantity">
                                {/* <span>
                                  <span className="num">
                                    {item.doneQuantity}
                                  </span>
                                </span>
                                / */}
                                <span className="total-quantity">
                                  {item.quantity}
                                </span>
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    )}
                  </>
                ))}
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

export default OrderHistoryCustomer;

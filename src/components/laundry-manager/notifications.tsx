import { useState } from "react";
import { ActivePageType } from "../../utils/activePageTypes";
import NavbarManager from "../partials/navbarManager";
import HeaderManager from "../partials/headerManager";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const ManagerNotifications = () => {
  const [navigation, setNavigation] = useState(false);
  const [notifications] = useState([
    { name: "Nafisa Maliyat", timestamp: "11:00 PM" },
    { name: "N. Maliyat", timestamp: "11:00 PM" },
    { name: "Maliyat Nafisa", timestamp: "11:00 PM" },
    { name: "Nafisa M.", timestamp: "11:00 PM" },
    { name: "N. M.", timestamp: "10:00 PM" },
    { name: "Maliyat, Nafisa", timestamp: "11:00 PM" },
    { name: "Nafisa", timestamp: "2:00 PM" },
    { name: "Nafisa M", timestamp: "11:00 PM" },
    { name: "N. Maliyat", timestamp: "11:00 PM" },
    { name: "Maliyat", timestamp: "11:00 PM" },
  ]);

  const itemsPerPage = 4; // Number of items per page
  const totalPages = Math.ceil(notifications.length / itemsPerPage); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current active page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedNotifications = notifications.slice(startIndex, endIndex);
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
            navigation={navigation}
            setNavigation={setNavigation}
          />

          <h1 className="notification-header">Your Notifications</h1>

          {displayedNotifications.map((notification, index) => (
            <div className="table view-reviews-table">
              <div className="notifications my-review" key={index}>
                <div className="container">
                  <h3>{notification.name}</h3>
                  <span>Left a review</span>
                  <Link to="/manager/review" className="go-to-review">
                    <span>View it here</span>
                  </Link>
                  <br />
                  {notification.timestamp}
                </div>
              </div>
            </div>
          ))}

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

export default ManagerNotifications;

import { useState, useEffect } from "react";
import { ActivePageType } from "../../utils/activePageTypes";
import NavbarCustomer from "../partials/navbarCustomer";
import HeaderCustomer from "../partials/headerCustomer";
import { Pagination } from "react-bootstrap";
import newRequest from "../../utils/newRequest";


interface Notification {
  notification_id: number;
  message: string;
  formattedTime: string;
  status: string;
}

const CustomerNotifications = () => {
  const [navigation, setNavigation] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const getTopNotifications = async () => {
      await newRequest
        .get("/notifications/all/nafisamaliyat@iut-dhaka.edu")
        .then((res) => {
          setNotifications(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTopNotifications();
  }, []);

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
      <NavbarCustomer
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.Notifications}
      />
      <div className="notifications-container">
        <div className="main">
          <HeaderCustomer
            navigation={navigation}
            setNavigation={setNavigation}
          />

          <h1 className="notification-header">Your Notifications</h1>
          {displayedNotifications.map((notification) => (
            <div className="table view-reviews-table" key={notification.notification_id}>
              <div className="notifications my-review">
                <div className="container">
                  <h3>Order ID: #</h3>
                  <span>
                    {notification.message}
                  </span>
                  <br />
                  {notification.formattedTime}
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

export default CustomerNotifications;

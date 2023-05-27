import { useState } from "react";
import { ActivePageType } from "../../utils/activePageTypes";
import NavbarCustomer from "../partials/navbarCustomer";
import HeaderCustomer from "../partials/headerCustomer";
import { Pagination } from "react-bootstrap";

const CustomerNotifications = () => {
  const [navigation, setNavigation] = useState(false);
  const [notifications] = useState([
    { orderId: 1, timestamp: "11:00 PM", message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consectetur turpis ac velit dapibus, at varius lorem tincidunt." },
  { orderId: 2, timestamp: "11:00 PM", message: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer auctor erat sit amet mi porta dapibus." },
  { orderId: 3, timestamp: "11:00 PM", message: "Suspendisse ac diam non justo aliquet lobortis eu a dolor. Aliquam ut venenatis massa, in laoreet tortor." },
  { orderId: 4, timestamp: "11:00 PM", message: "Fusce dapibus gravida elit a tempus. Phasellus pretium sapien mi, et rhoncus justo auctor et." },
  { orderId: 5, timestamp: "10:00 PM", message: "Duis maximus mi in quam pellentesque efficitur. Aenean auctor sem non purus rutrum, eu ullamcorper ipsum ultrices." },
  { orderId: 6, timestamp: "11:00 PM", message: "Quisque eu felis ac justo tempor congue. Vivamus volutpat ipsum quis eros efficitur dapibus." },
  { orderId: 7, timestamp: "2:00 PM", message: "Pellentesque non nulla id nisl consectetur auctor id sit amet risus. Donec mattis auctor finibus." },
  { orderId: 8, timestamp: "11:00 PM", message: "Morbi lacinia neque in erat consectetur, vitae semper est elementum. Cras tincidunt pharetra mi, non pellentesque purus tristique eu." },
  { orderId: 9, timestamp: "11:00 PM", message: "Sed dignissim aliquam finibus. Nam lobortis nunc id est rutrum, ac tempor metus varius." },
  { orderId: 10, timestamp: "11:00 PM", message: "Nulla a nisi et ante posuere eleifend. Aenean semper leo at diam interdum, et lacinia enim dapibus." },
  { orderId: 11, timestamp: "11:00 PM", message: "Vestibulum malesuada leo nec risus consectetur, a tempus dolor pulvinar. Sed pharetra pretium orci." },
  { orderId: 12, timestamp: "11:00 PM", message: "Integer sit amet justo ut diam condimentum scelerisque vitae ac purus. Curabitur nec purus eu elit condimentum cursus et vitae dolor." },
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
          {displayedNotifications.map((notification, index) => (
            <div className="table view-reviews-table">
              <div className="notifications my-review">
                <div className="container">
                  <h3>Order ID: #{notification.orderId}</h3>
                  <span>
                    {notification.message}
                  </span>
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

export default CustomerNotifications;

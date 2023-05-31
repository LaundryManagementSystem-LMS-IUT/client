import { useState, useEffect } from "react";
import NavbarCustomer from "../../partials/navbarCustomer";
import HeaderCustomer from "../../partials/headerCustomer";
import AddNewOrder from "./addNewOrder";
import { Table } from "react-bootstrap";
import { ActivePageType } from "../../../utils/activePageTypes";
import ReviewOrder from "./reviewLaundry";
import CollapsibleChat from "../../chats/chat-collapsible/collapsableChat";
import NewRequest from "../../../utils/newRequest";
import axios from "axios";

interface ClothItem {
  manager_email: string;
  cloth_type: string;
  operation: string;
  price: string;
}

interface GroupedData {
  [clothType: string]: ClothItem[];
}

const LaundryDetails = () => {
  const [navigation, setNavigation] = useState(false);
  const [sortedPricing, setSortedPricing] = useState<GroupedData | undefined>();

  useEffect(() => {
    const getLaundryPricing = async () => {
      await axios
        .get("http://localhost:8000/pricing/dummymanager@iut-dhaka.edu")
        .then((res) => {
          setSortedPricing(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getLaundryPricing();
  }, []);

  return (
    <div className="laundry-details">
      <NavbarCustomer
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.Laundry}
      />
      <div className="laundry-detail-container">
        <div className="main">
          <HeaderCustomer
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <h1 className="laundry-name">Laundry House</h1>
          <AddNewOrder />
          <Table striped bordered hover className="pricing-table">
            <thead>
              <tr>
                <h2>Pricing Chart</h2>
              </tr>
              <tr>
                <th>
                  {" "}
                  <h5>Cloth</h5>{" "}
                </th>
                <th>
                  {" "}
                  <h5>Wash</h5>{" "}
                </th>
                <th>
                  {" "}
                  <h5>Iron</h5>{" "}
                </th>
                <th>
                  {" "}
                  <h5>Wash And Iron</h5>{" "}
                </th>
                <th>
                  {" "}
                  <h5>Dry Clean</h5>{" "}
                </th>
              </tr>
            </thead>

            <tbody>
              {sortedPricing &&
                Object.entries(sortedPricing).map(([clothType, services]) => (
                  <tr key={clothType}>
                    <td>{clothType}</td>
                    <td>
                      {services.find(
                        (service) => service.operation === "Wash"
                      )?.price ? (
                        <>
                          ৳{" "}
                          {
                            services.find(
                              (service) => service.operation === "Wash"
                            )?.price
                          }
                        </>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>
                      {services.find(
                        (service) => service.operation === "Wash & Iron"
                      )?.price ? (
                        <>
                          ৳{" "}
                          {
                            services.find(
                              (service) => service.operation === "Wash & Iron"
                            )?.price
                          }
                        </>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>
                      {services.find(
                        (service) => service.operation === "Iron"
                      )?.price ? (
                        <>
                          ৳{" "}
                          {
                            services.find(
                              (service) => service.operation === "Iron"
                            )?.price
                          }
                        </>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td>
                      {services.find(
                        (service) => service.operation === "Dry Wash"
                      )?.price ? (
                        <>
                          ৳{" "}
                          {
                            services.find(
                              (service) => service.operation === "Dry Wash"
                            )?.price
                          }
                        </>
                      ) : (
                        "N/A"
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <CollapsibleChat
            senderID={"123"}
            receiverID={"123"}
            JWT={{ _id: "123", token: "123", userType: "123" }}
          />
          <ReviewOrder />
        </div>
      </div>
    </div>
  );
};

export default LaundryDetails;

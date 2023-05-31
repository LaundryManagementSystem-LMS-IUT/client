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

interface ClothTypeData {
  ClothType: string;
  Wash: number;
  Iron: number;
  WashAndIron: number;
  DryClean: number;
}

const LaundryDetails = () => {
  const [navigation, setNavigation] = useState(false);
  const [pricing, setPricing] = useState<ClothTypeData[]>([]);

  useEffect(() => {
    const getLaundryPricing = async () => {
      // const dynamicValue = "0000000100-2023-05-31 13:15:04:789";
      // const url = `http://localhost:8000/api/pricing/${dynamicValue}`;
      await axios
        .get("http://localhost:8000/api/pricing/dummymanager@iut-dhaka.edu")
        .then((res) => {
          setPricing(res.data);
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
              {pricing.map((price) => (
                <tr key={price.ClothType}>
                  <td>{price.ClothType}</td>
                  <td>
                    {price.Wash !== null && price.Wash !== 0
                      ? `৳ ${price.Wash}`
                      : "N/A"}
                  </td>
                  <td>
                    {price.Iron !== null && price.Iron !== 0
                      ? `৳ ${price.Iron}`
                      : "N/A"}
                  </td>
                  <td>
                    {price.WashAndIron !== null && price.WashAndIron !== 0
                      ? `৳ ${price.WashAndIron}`
                      : "N/A"}
                  </td>
                  <td>
                    {price.DryClean !== null && price.DryClean !== 0
                      ? `৳ ${price.DryClean}`
                      : "N/A"}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <CollapsibleChat
            senderID={"123"}
            receiverID={"123"}
            JWT={{ _id: "123", token: "123", userType: "123" }}
          /> */}
          <ReviewOrder />
        </div>
      </div>
    </div>
  );
};

export default LaundryDetails;

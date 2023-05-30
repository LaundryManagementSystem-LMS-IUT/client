import { useState } from "react";
import NavbarCustomer from "../../partials/navbarCustomer";
import HeaderCustomer from "../../partials/headerCustomer";
import AddNewOrder from "./addNewOrder";
import { Table } from "react-bootstrap";
import { ActivePageType } from "../../../utils/activePageTypes";
import ReviewOrder from "./reviewLaundry";
import CollapsibleChat from "../../chats/chat-collapsible/collapsableChat";

const LaundryDetails = () => {
  const [navigation, setNavigation] = useState(false);
  const pricing = [
    {
      ClothType: "Shirt",
      Wash: 80,
      Iron: 60,
      WashAndIron: 50,
      DryClean: 40,
    },
    {
      ClothType: "Pant",
      Wash: 80,
      Iron: 60,
      WashAndIron: 50,
      DryClean: 40,
    },
    {
      ClothType: "Blanket",
      Wash: 80,
      Iron: 60,
      WashAndIron: 50,
      DryClean: 40,
    },
    {
      ClothType: "Sweater",
      Wash: 80,
      Iron: 60,
      WashAndIron: 50,
      DryClean: 40,
    },
  ];
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
              {pricing.map((price, index) => (
                <tr>
                  <td>{price.ClothType}</td>
                  <td>৳ {price.Wash}</td>
                  <td>৳ {price.Iron}</td>
                  <td>৳ {price.WashAndIron}</td>
                  <td>৳ {price.DryClean}</td>
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

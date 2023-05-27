import { useState } from "react";
import NavbarCustomer from "../../partials/navbarCustomer";
import HeaderCustomer from "../../partials/headerCustomer";
import AddNewOrder from "./addNewOrder";
import { Table } from "react-bootstrap";

const LaundryDetails = () => {
  const [navigation,setNavigation]=useState(false);
  return ( 
    <div className="laundry-details">
      <NavbarCustomer navigation={navigation} setNavigation={setNavigation} />
      <div className="container">
        <div className="main">
        <HeaderCustomer
            username={"Mirza Azwad"}
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <AddNewOrder/>
          <Table>
            
          </Table>
        </div>
      </div>
    </div>
   );
}
 
export default LaundryDetails;
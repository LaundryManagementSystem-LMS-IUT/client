import { Card } from "react-bootstrap";
import NavbarLanding from "../partials/navbarLanding";
import DeliveryImage from "./delivery-image";
import { callOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const DeliveryRegistration = () => {
  return (
    <div className="login-registration">
      <NavbarLanding />
      <Card>
        <div className="delivery-registration-box">
          <form
            action="<?php echo SERVER_PATH ?>laundry-register.php"
            method="POST"
            style={{ marginLeft: "2%" }}
          >
            <h2>Delivery Registration</h2>
            <DeliveryImage />
            <div className="inputbox mx-auto">
              <IonIcon icon={callOutline}></IonIcon>
              <input
                type="text"
                pattern="[01]{2}[3-9]{1}[0-9]{8}"
                id="phone"
                name="phone"
                required
              />
              <label htmlFor="">Phone Number</label>
            </div>
            <button type="submit" name="submit" id="submit"  className="dark-button">
              Register
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default DeliveryRegistration;

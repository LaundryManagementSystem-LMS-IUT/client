import { IonIcon } from "@ionic/react";
import {
  callOutline,
  cardOutline,
  cashOutline,
  mapOutline,
} from "ionicons/icons";
const billingForm = () => {
  return (
    <div className="billing-container">
      <div className="bill-name">
        <div className="inputbox">
          <input type="text" id="first-name" name="first-name" required />
          <label htmlFor="">First Name</label>
        </div>
        <div className="inputbox">
          <input type="text" id="middle-name" name="middle-name" />
          <label htmlFor="">Middle Name</label>
        </div>
        <div className="inputbox">
          <input type="text" id="last-name" name="last-name" required />
          <label htmlFor="">Last Name</label>
        </div>
      </div>
      <div className="bill-contact">
        <div className="inputbox">
          <IonIcon icon={callOutline}></IonIcon>
          <input type="text" id="phone" name="phone" required />
          <label htmlFor="">Phone</label>
        </div>
        <div className="inputbox address-inputbox">
          <IonIcon icon={mapOutline}></IonIcon>
          <input type="text" id="address" name="address" required />
          <label htmlFor="">Address</label>
        </div>
      </div>

      <div className="bill-payment-mode">
        <div>Choose mode of payment</div>
        <div>
          <input
            type="radio"
            id="payment-mode-cash"
            name="payment-mode"
            defaultChecked
            required
          />
          <label htmlFor="payment-mode-cash">Cash On Delivery (৳50) </label>
          <IonIcon icon={cashOutline}></IonIcon>
        </div>
        <div>
          <input
            type="radio"
            id="payment-mode-online"
            name="payment-mode"
            required
          />
          <label htmlFor="payment-mode-online">Online Payment </label>
          <IonIcon icon={cardOutline}></IonIcon>
        </div>
      </div>
    </div>
  );
};

export default billingForm;

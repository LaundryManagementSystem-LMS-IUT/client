import { IonIcon } from "@ionic/react";
import { addCircleOutline, mailOutline } from "ionicons/icons";
import { useEffect } from "react";

const AddNewOrder = () => {
  useEffect(()=>{
    var addOrderBtn = document.querySelector(".add-order");
    addOrderBtn?.addEventListener("click", function () {
  var addOrderForm = document.querySelector(".add-order-form");
  addOrderForm?.classList.remove("hidden");
  addOrderBtn?.classList.add('hidden');
});

//hide add order form
  var hideOrderFormBtn = document.querySelector(".cancel-order");
  hideOrderFormBtn?.addEventListener("click", function () {
  var addOrderForm = document.querySelector(".add-order-form");
  addOrderForm?.classList.add("hidden");
  // addOrderForm?.reset();
  addOrderBtn?.classList.remove('hidden');
});

var expandThis = document.querySelectorAll(".wrap-item");
var orderDetails = document.querySelectorAll(".orderDetails");

for (var i = 0; i < expandThis.length; i++) {
  var expandSec = expandThis[i];

  (function (index) {
    expandSec.addEventListener("click", function (event) {
      orderDetails[index].classList.toggle("hidden");
    });
  })(i);
}
  },[])
  return ( 
    <div className="table new-order-table">
    <div className="new-order">
      <div className="title">
        <h1>Add a new order</h1>
      </div>
      <div className="add-order-btn">
        <button className="add-order">
          Add Order
          <IonIcon icon={addCircleOutline}></IonIcon>
        </button>
      </div>
    </div>


    <form className="add-order-form hidden">
      <div className="inputbox">
        <IonIcon icon={mailOutline}></IonIcon>
        <input type="email" required />
        <label htmlFor="">Customer Email</label>
      </div>

      <div className="item-details">
        <span className="item-icon">Shirt</span>
        <span className="item-quantity">
          <div className="inputbox quantity-input">
            <input type="number" min="0" />
            <label htmlFor="">Quantity</label>
          </div>
          <div className="quantity-btns">
            <button className="add" type="button">+</button>
            <button className="subtract" type="button">-</button>
          </div>
        </span>
        <span className="item-wash-type">
          <select name="wash-type" className="wash-type-dropdown">
            <option className="wash-type-options" value="wash">Wash</option>
            <option className="wash-type-options" value="iron">Iron</option>
            <option className="wash-type-options" value="wash and iron">
              Wash & Iron
            </option>
            <option className="wash-type-options" value="wash and iron">
              Dry Wash
            </option>

          </select>
        </span>
      </div>

      <button className="place-order" type="submit">Place Order</button>
      <span className="cancel-order">Cancel</span>
    </form>
  </div> );
}
 
export default AddNewOrder;
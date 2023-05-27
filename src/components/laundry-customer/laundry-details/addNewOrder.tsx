import { IonIcon } from "@ionic/react";
import { addCircleOutline, mailOutline } from "ionicons/icons";
import { useState } from "react";
import AddOrderModal from "./addOrderModal";

const AddNewOrder = () => {
  const [show,setShow]=useState(false);
  return (
    <div className="table new-order-table">
      <div className="new-order">
        <div className="title">
          <h1>Add a new order</h1>
        </div>
        <div className="add-order-btn">
          <button className="add-order" onClick={()=>setShow(true)}>
            Add Order
            <IonIcon icon={addCircleOutline}></IonIcon>
          </button>
        </div>
      </div>
      <AddOrderModal show={show} setShow={setShow}/>
      
    </div>
  );
};

export default AddNewOrder;

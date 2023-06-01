import { IonIcon } from "@ionic/react";
import { addCircleOutline, mailOutline } from "ionicons/icons";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AddNewOrder = () => {
  const { id } = useParams();
  // const [show,setShow]=useState(false);
  const navigate = useNavigate();
  return (
    <div className="table new-order-table">
      <div className="new-order">
        <div className="title">
          <h1>Add a new order</h1>
        </div>
        <div className="add-order-btn">
          <button className="add-order" onClick={() => navigate(`/customer/laundryDetails/order/${id}`)}>
            Add Order
            <IonIcon icon={addCircleOutline}></IonIcon>
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default AddNewOrder;

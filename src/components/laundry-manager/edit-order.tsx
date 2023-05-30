import { useState } from "react";
<<<<<<< Updated upstream
import {AiOutlineClose} from 'react-icons/ai'
=======
import { AiOutlineClose } from "react-icons/ai";
>>>>>>> Stashed changes

const EditOrders = ({
  onCancelOrder,
  order,
}: {
  onCancelOrder: (orderId: number | null) => void;
  order: {
    id: number;
    userName: string;
    payment: string;
    done: number;
    total: number;
    status: string;
    items: {
      name: string;
      doneQuantity: number;
      totalQuantity: number;
      washType: string;
    }[];
  };
}) => {
  const [doneQuantities, setDoneQuantities] = useState(
    order.items.map((item) => item.doneQuantity)
  );
  const handleDoneQuantityChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newDoneQuantities = [...doneQuantities];
    newDoneQuantities[index] = parseInt(e.target.value, 10);
    setDoneQuantities(newDoneQuantities);
  };
<<<<<<< Updated upstream
  
=======

>>>>>>> Stashed changes
  const handleCancel = () => {
    onCancelOrder(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="update-order-form-bg">
        <div className="table edit-order-table new-order-table">
          <div className="edit-order new-order add-review">
            <div className="title">
              <h1>Update Order</h1>
            </div>
            <div className="modal-close-btn">
<<<<<<< Updated upstream
              <AiOutlineClose className="icon" onClick={() => handleCancel()}/>
=======
              <AiOutlineClose className="icon" onClick={() => handleCancel()} />
>>>>>>> Stashed changes
            </div>
          </div>
          <form className="orderDetails add-order-form" onSubmit={handleSubmit}>
            {order.items.map((item) => (
              <div className="item-details">
                <span className="item-icon">
                  {item.name} ({item.washType})
                </span>
                <span className="item-quantity">
                  <div className="inputbox quantity-input">
                    <input
                      type="number"
                      min="0"
                      max={item.totalQuantity}
                      defaultValue={item.doneQuantity}
                    />
                    <label htmlFor="">Quantity</label>
                  </div>
                  <span className="item-total">
                    out of <strong>{item.totalQuantity}</strong>
                  </span>
                </span>
                <span className="item-wash-type item-icon"></span>
              </div>
            ))}

            {/* status change ============ */}
            <div className="item-details">
              <span className="item-icon">Status</span>
              <span className="item-quantity">
                <select
                  name="statuses"
                  className="statuses-dropdown"
                  defaultValue={order.status}
                >
                  <option className="status-options" value="Collecting">
                    Collecting
                  </option>
                  <option className="status-options" value="Pending">
                    Pending
                  </option>
                  <option className="status-options" value="Processing">
                    Processing
                  </option>
                  <option className="status-options" value="Completed">
                    Completed
                  </option>
                  <option className="status-options" value="Cancelled">
                    Cancelled
                  </option>
                </select>
              </span>
            </div>

            <button className="place-order" type="submit">
              Update Order
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditOrders;

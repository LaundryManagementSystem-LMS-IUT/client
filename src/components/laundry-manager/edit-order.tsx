import { useState } from "react";

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
                  <option className="status-options" value="Pending">
                    Pending
                  </option>
                  <option className="status-options" value="Processing">
                    Processing
                  </option>
                  <option className="status-options" value="In Progress">
                    In Progress
                  </option>
                  <option className="status-options" value="Completed">
                    Completed
                  </option>
                </select>
              </span>
            </div>

            <button className="place-order" type="submit">
              Update Order
            </button>
            <span className="cancel-order" onClick={() => handleCancel()}>
              Cancel
            </span>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditOrders;
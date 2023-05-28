import { Modal } from "react-bootstrap";

type ModalProperty = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddOrderModal = ({ show, setShow }: ModalProperty) => {
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      className="new-order-modal"
    >
      <Modal.Header closeButton>
        <div className="new-order new-order-header">
          <div className="title">
            <h1>Add a new order</h1>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body style={{ width: "100%" }}>
        <form className="add-order-form">
          <div className="item-details">
            <span className="item-icon">Shirt</span>
            <span className="item-quantity">
              <div className="inputbox quantity-input">
                <input type="number" min="0" />
                <label htmlFor="">Quantity</label>
              </div>
            </span>
            <span className="item-wash-type">
              <select name="wash-type" className="wash-type-dropdown">
                <option className="wash-type-options" value="wash">
                  Wash
                </option>
                <option className="wash-type-options" value="iron">
                  Iron
                </option>
                <option className="wash-type-options" value="wash and iron">
                  Wash & Iron
                </option>
                <option className="wash-type-options" value="wash and iron">
                  Dry Wash
                </option>
              </select>
            </span>
          </div>
          <div className="item-details">
            <span className="item-icon">Pant</span>
            <span className="item-quantity">
              <div className="inputbox quantity-input">
                <input type="number" min="0" />
                <label htmlFor="">Quantity</label>
              </div>
            </span>
            <span className="item-wash-type">
              <select name="wash-type" className="wash-type-dropdown">
                <option className="wash-type-options" value="wash">
                  Wash
                </option>
                <option className="wash-type-options" value="iron">
                  Iron
                </option>
                <option className="wash-type-options" value="wash and iron">
                  Wash & Iron
                </option>
                <option className="wash-type-options" value="wash and iron">
                  Dry Wash
                </option>
              </select>
            </span>
          </div>
          <div className="item-details">
            <span className="item-icon">Sweater</span>
            <span className="item-quantity">
              <div className="inputbox quantity-input">
                <input type="number" min="0" />
                <label htmlFor="">Quantity</label>
              </div>
            </span>
            <span className="item-wash-type">
              <select name="wash-type" className="wash-type-dropdown">
                <option className="wash-type-options" value="wash">
                  Wash
                </option>
                <option className="wash-type-options" value="iron">
                  Iron
                </option>
                <option className="wash-type-options" value="wash and iron">
                  Wash & Iron
                </option>
                <option className="wash-type-options" value="wash and iron">
                  Dry Wash
                </option>
              </select>
            </span>
          </div>
          <div className="item-details">
            <span className="item-icon">Blanket</span>
            <span className="item-quantity">
              <div className="inputbox quantity-input">
                <input type="number" min="0" />
                <label htmlFor="">Quantity</label>
              </div>
            </span>
            <span className="item-wash-type">
              <select name="wash-type" className="wash-type-dropdown">
                <option className="wash-type-options" value="wash">
                  Wash
                </option>
                <option className="wash-type-options" value="iron">
                  Iron
                </option>
                <option className="wash-type-options" value="wash and iron">
                  Wash & Iron
                </option>
                <option className="wash-type-options" value="wash and iron">
                  Dry Wash
                </option>
              </select>
            </span>
          </div>

          <button className="place-order" type="submit">
            Place Order
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddOrderModal;

type OrderTabsProps={
  items:{
    name:string,
    operation:string,
    price:number
  }[],
  handleAddToOrder:(name: string, operation: string, price: number, quantity: number) => void
}

const OrderTabs = ({items,handleAddToOrder}:OrderTabsProps) => {
  return (
    <div className="operation-type-container">
      {items.map((item, index) => (
        <div className="operation-type-item-details item-details">
          <span className="item-icon">{item.name}</span>
          <span className="item-quantity">
            <div className="inputbox quantity-input">
              <input
                type="number"
                min="0"
                onChange={(e) =>
                  handleAddToOrder(
                    item.name,
                    item.operation,
                    item.price,
                    parseInt(e.target.value)
                  )
                }
              />
              <label htmlFor="">Quantity</label>
            </div>
          </span>
          <span className="item-price">
            <div>৳{item.price}</div>
          </span>
        </div>
      ))}
    </div>
  );
};

export default OrderTabs;

import { useState } from "react";
import NavbarCustomer from "../../partials/navbarCustomer";
import HeaderCustomer from "../../partials/headerCustomer";
import BillingForm from "./billingForm";
import { ActivePageType } from "../../../utils/activePageTypes";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OrderTabs from "./orderTabs";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";

const LaundryDetails = () => {
  const [navigation, setNavigation] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [key, setKey] = useState<string>("washniron");
  const [total, setTotal] = useState<number>(0);
  const [payment_method,setPaymentMethod]=useState("cash");
  const [location,setLocation]=useState({lat:23.8103,lng:90.4125});
  const [active,setActive]=useState(true);
  const [address,setAddress]=useState("");
  const [firstname,setFirstName]=useState("");
  const [lastname,setLastName]=useState("");
  const [middlename,setMiddleName]=useState("");
  const [phone_number,setPhoneNumber]=useState("");
  const [items, setItems] = useState([
    { name: "Shirt", operation: "Dry Wash", price: 10 },
    { name: "Shirt", operation: "Wash & Iron", price: 12 },
    { name: "Trousers", operation: "Wash & Iron", price: 15 },
    { name: "Trousers", operation: "Iron", price: 12 },
    { name: "Dress", operation: "Dry Wash", price: 20 },
    { name: "Dress", operation: "Wash & Iron", price: 25 },
    { name: "Coat", operation: "Dry Wash", price: 30 },
    { name: "Coat", operation: "Wash", price: 25 },
    { name: "Sweater", operation: "Dry Wash", price: 15 },
    { name: "Sweater", operation: "Iron", price: 10 },
    { name: "Blouse", operation: "Wash & Iron", price: 12 },
    { name: "Blouse", operation: "Iron", price: 8 },
    { name: "Jeans", operation: "Wash", price: 10 },
    { name: "Jeans", operation: "Iron", price: 8 },
    { name: "Skirt", operation: "Dry Wash", price: 10 },
    { name: "Jacket", operation: "Wash & Iron", price: 25 },
    { name: "T-Shirt", operation: "Wash", price: 6 },
    { name: "T-Shirt", operation: "Iron", price: 4 },
    { name: "Shorts", operation: "Wash", price: 8 },
    { name: "Shorts", operation: "Dry Wash", price: 12 },
  ]);

  const dryWashItems = items.filter((item) => item.operation === "Dry Wash");
  const washAndIronItems = items.filter(
    (item) => item.operation === "Wash & Iron"
  );
  const ironItems = items.filter((item) => item.operation === "Iron");
  const washItems = items.filter((item) => item.operation === "Wash");

  const [orderList, setOrderList] = useState<
    { name: string; operation: string; quantity: number; price: number }[]
  >([]);

  const handleTabSelect = (k: string | null) => {
    if (k) setKey(k);
  };

  const handleAddToOrder = (
    name: string,
    operation: string,
    price: number,
    quantity: number
  ) => {
    const existingOrderIndex = orderList.findIndex(
      (order) => order.name === name && order.operation === operation
    );

    if (existingOrderIndex !== -1) {
      const updatedOrderList = [...orderList];
      const currentValue =
        updatedOrderList[existingOrderIndex].quantity *
        updatedOrderList[existingOrderIndex].price;
      updatedOrderList[existingOrderIndex].quantity = isNaN(quantity)
        ? 0
        : Number(quantity);
      const newValue =
        updatedOrderList[existingOrderIndex].quantity *
        updatedOrderList[existingOrderIndex].price;
      setTotal(total - currentValue + newValue);
      setOrderList(updatedOrderList);
    } else {
      const quantityValue = isNaN(quantity) ? 0 : Number(quantity);
      const newOrder = { name, operation, quantity: quantityValue, price };
      setOrderList([...orderList, newOrder]);
      setTotal(total + quantityValue * price);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedOrderList = orderList.map((order) => {
      const { price, ...rest } = order;
      return rest;
    });
    console.log(updatedOrderList);
  }

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address:string) => {
    setValue(address);
    setActive(false);
    setAddress(address);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    const coordinates={lat,lng};
    setLocation(coordinates);
    console.log(location);
  };





  return (
    <>
      <NavbarCustomer
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.OrderHistory}
      />
      <div className="manager-history-container">
        <div className="main">
          <HeaderCustomer
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <div className="wrapper">
            <div className="table">
              <div className="top-title">
                <h2>Add an order</h2>
              </div>
              <div className="place-order-form">
                {!showForm && (
                  <form onSubmit={handleSubmit}>
                    <div className="place-order-details">
                      <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(key) => handleTabSelect(key)}
                        className="mb-3"
                      >
                        <Tab eventKey="washniron" title="Wash & Iron">
                          <OrderTabs
                            items={washAndIronItems}
                            handleAddToOrder={handleAddToOrder}
                          />
                        </Tab>
                        <Tab eventKey="wash" title="Wash">
                          <OrderTabs
                            items={washItems}
                            handleAddToOrder={handleAddToOrder}
                          />
                        </Tab>
                        <Tab eventKey="iron" title="Iron">
                          <OrderTabs
                            items={ironItems}
                            handleAddToOrder={handleAddToOrder}
                          />
                        </Tab>
                        <Tab eventKey="drywash" title="Dry Wash">
                          <OrderTabs
                            items={dryWashItems}
                            handleAddToOrder={handleAddToOrder}
                          />
                        </Tab>
                      </Tabs>
                    </div>
                    <div className="place-order-btn">
                      <button
                        className="add-order"
                        type="submit"
                        onClick={() => setShowForm(true)}
                      >
                        Proceed To Payment
                      </button>
                    </div>
                  </form>
                )}

                {showForm && (
                  <>
                    <BillingForm firstname={firstname} setFirstName={setFirstName} middlename={middlename} setMiddleName={setMiddleName} lastname={lastname}
                      setLastName={setLastName} address={address} setAddress={setAddress} location={location} setLocation={setLocation} phone_number={phone_number} setPhoneNumber={setPhoneNumber}
                      payment_method={payment_method} setPaymentMethod={setPaymentMethod} setValue={setValue}
                      active={active} setActive={setActive} handleSelect={handleSelect} data={data} status={status}
                    />
                    <div className="place-order-btn">
                      <button className="add-order">Confirm Order</button>
                    </div>
                  </>
                )}
                <div className="place-order-payment-bar">
                  Your total is ৳{total}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LaundryDetails;

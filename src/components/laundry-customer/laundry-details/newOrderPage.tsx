import { useEffect, useState } from "react";
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
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEmail } from "../../../Hooks/useEmail";

interface ClothTypeData {
  ClothType: string;
  Wash: number;
  Iron: number;
  WashAndIron: number;
  DryClean: number;
}

const LaundryDetails = () => {
  const laundry_id=(useParams()).id;
  const [navigation, setNavigation] = useState(false);
  const navigate=useNavigate();
  const [manager_email,setManagerEmail]=useState("");
  const [loading,setLoading]=useState(true);
  const {email}=useEmail();
  const [items, setItems] = useState<{
    cloth_type:string,
    operation:string,
    price:number
  }[]>([]);

  const getServices = async (manager_email:string) => {
    await axios
      .get("http://localhost:8000/api/services/"+manager_email)
      .then((res) => {
        console.log(res);
        setItems(res.data.services);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  
  const getLaundryDetails=async()=>{
      const result=await axios.get('http://localhost:8000/api/manager/details/'+laundry_id).then((res)=>{
        console.log(res);
        return res.data?.laundry
      })
      .catch((err)=>{
        console.log(err);
      })
      console.log(result);
      setManagerEmail(result.email);
      await getServices(result.email);
  }

  useEffect(()=>{
    if(laundry_id){
      getLaundryDetails();
    }
  },[laundry_id]);

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

  const dryWashItems = items.filter((item) => item.operation === "Dry Wash");
  const washAndIronItems = items.filter(
    (item) => item.operation === "Wash & Iron"
  );
  const ironItems = items.filter((item) => item.operation === "Iron");
  const washItems = items.filter((item) => item.operation === "Wash");

  const [orderList, setOrderList] = useState<
    { cloth_type: string; operation: string; quantity: number; price: number }[]
  >([]);

  const handleTabSelect = (k: string | null) => {
    if (k) setKey(k);
  };

  const handleAddToOrder = (
    cloth_type: string,
    operation: string,
    price: number,
    quantity: number
  ) => {
    const existingOrderIndex = orderList.findIndex(
      (order) => order.cloth_type === cloth_type && order.operation === operation
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
      const newOrder = { cloth_type, operation, quantity: quantityValue, price };
      setOrderList([...orderList, newOrder]);
      setTotal(total + quantityValue * price);
    }
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedOrderList = orderList.map((order) => {
      const { price, ...rest } = order;
      return rest;
    });
    
    await axios.post('http://localhost:8000/api/order/addOrder',{
      customer_email:email,
      manager_email:manager_email,
      orderList:updatedOrderList
    }).then((res)=>{
      console.log(res);
      navigate('/customer/dashboard');
    }).catch((err)=>console.log(err));
    console.log(email);
    console.log(manager_email);
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
                      <button className="add-order">Confirm Order</button>
                    </div>
                  </form>
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

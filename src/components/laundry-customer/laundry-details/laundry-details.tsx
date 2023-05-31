import { useState, useEffect } from "react";
import NavbarCustomer from "../../partials/navbarCustomer";
import HeaderCustomer from "../../partials/headerCustomer";
import AddNewOrder from "./addNewOrder";
import { Table } from "react-bootstrap";
import { ActivePageType } from "../../../utils/activePageTypes";
import ReviewOrder from "./reviewLaundry";
import CollapsibleChat from "../../chats/chat-collapsible/collapsableChat";
import NewRequest from "../../../utils/newRequest";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEmail } from "../../../Hooks/useEmail";
import Loader from "../../partials/loader";

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
  const [pricing, setPricing] = useState<ClothTypeData[]>([]);
  const [manager_email,setManagerEmail]=useState("");
  const [laundry_name,setLaundryName]=useState("");
  const [loading,setLoading]=useState(true);
  const {email}=useEmail();

  const getLaundryPricing = async (manager_email:string) => {
    await axios
      .get("http://localhost:8000/api/pricing/"+manager_email)
      .then((res) => {
        setPricing(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const getLaundryDetails=async()=>{
      const result=await axios.get('http://localhost:8000/api/manager/details/'+laundry_id).then((res)=>{
        return res.data?.laundry
      })
      .catch((err)=>{
        console.log(err);
      })
      console.log(result);
      setManagerEmail(result.email);
      setLaundryName(result.laundry_name);
      await getLaundryPricing(result.email);
  }


  useEffect(()=>{
    getLaundryDetails();
  },[])

  

  if(!loading){
    return (
      <div className="laundry-details">
        <NavbarCustomer
          navigation={navigation}
          setNavigation={setNavigation}
          activePage={ActivePageType.Laundry}
        />
        <div className="laundry-detail-container">
          <div className="main">
            <HeaderCustomer
              navigation={navigation}
              setNavigation={setNavigation}
            />
            <h1 className="laundry-name">Laundry House</h1>
            <AddNewOrder />
            <Table striped bordered hover className="pricing-table">
              <thead>
                <tr>
                  <h2>Pricing Chart</h2>
                </tr>
                <tr>
                  <th>
                    {" "}
                    <h5>Cloth</h5>{" "}
                  </th>
                  <th>
                    {" "}
                    <h5>Wash</h5>{" "}
                  </th>
                  <th>
                    {" "}
                    <h5>Iron</h5>{" "}
                  </th>
                  <th>
                    {" "}
                    <h5>Wash And Iron</h5>{" "}
                  </th>
                  <th>
                    {" "}
                    <h5>Dry Clean</h5>{" "}
                  </th>
                </tr>
              </thead>
  
              <tbody>
                {pricing.map((price) => (
                  <tr key={price.ClothType}>
                    <td>{price.ClothType}</td>
                    <td>
                      {price.Wash !== null && price.Wash !== 0
                        ? `৳ ${price.Wash}`
                        : "N/A"}
                    </td>
                    <td>
                      {price.Iron !== null && price.Iron !== 0
                        ? `৳ ${price.Iron}`
                        : "N/A"}
                    </td>
                    <td>
                      {price.WashAndIron !== null && price.WashAndIron !== 0
                        ? `৳ ${price.WashAndIron}`
                        : "N/A"}
                    </td>
                    <td>
                      {price.DryClean !== null && price.DryClean !== 0
                        ? `৳ ${price.DryClean}`
                        : "N/A"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
        <ReviewOrder customer_email={email} laundry_id={laundry_id} laundry_name={laundry_name} manager_email={manager_email} />
          </div>
        </div>
      </div>
    );
  }
  else{
    return(
      <Loader/>
    )
  }
};

export default LaundryDetails;

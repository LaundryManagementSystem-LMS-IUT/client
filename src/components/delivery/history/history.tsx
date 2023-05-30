import { useState } from "react";
import { ActivePageType } from "../../../utils/activePageTypes";
import NavbarDelivery from "../../partials/navbarDelivery";
import HeaderDelivery from "../../partials/headerDelivery";
import Map from "../../maps/map-delivery/map-ongoing-delivery/map";
import HistoryArray from "./history-array";

const DeliveryHistory = () => {
  const [navigation,setNavigation]=useState(false);
  const viewDetails=()=>{

  }

  const [historyRequests,setHistoryRequests]=useState([
    {
      _id:"1",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"2",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Completed",
      sink:"Gazipur"
    },
    {
      _id:"3",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"4",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Completed",
      sink:"Gazipur"
    },
    {
      _id:"5",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"6",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Completed",
      sink:"Gazipur"
    },
    {
      _id:"7",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"8",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Completed",
      sink:"Gazipur"
    },
    {
      _id:"9",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"10",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },
    {
      _id:"11",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"12",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },
    {
      _id:"13",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"14",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },
    {
      _id:"15",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"16",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },
    {
      _id:"17",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    },{
      _id:"18",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      status:"Delivered",
      sink:"Gazipur"
    }
  ]);

  return ( 
  <div className="dashboard-delivery">
    <NavbarDelivery navigation={navigation} setNavigation={setNavigation}  activePage={ActivePageType.ConfirmDelivery}/>
    <div className="delivery-history-container">
      <div className="main">
        <HeaderDelivery navigation={navigation} setNavigation={setNavigation}/>
        <div className="profile">
            <h2>Deliveries Completed</h2>
          </div>
          <div className="w-100">
            <HistoryArray historyRequests={historyRequests} setHistoryRequests={setHistoryRequests}/>
          </div>
          </div>
    </div>
  </div> 
  );
}
 
export default DeliveryHistory;
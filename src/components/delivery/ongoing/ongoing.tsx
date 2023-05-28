import { useState } from "react";
import { ActivePageType } from "../../../utils/activePageTypes";
import NavbarDelivery from "../../partials/navbarDelivery";
import HeaderDelivery from "../../partials/headerDelivery";
import Map from "../../maps/map-delivery/map-ongoing-delivery/map";
import OngoingArray from "./ongoing-array";

const OngoingDelivery = () => {
  const [navigation,setNavigation]=useState(false);
  const viewDetails=()=>{

  }

  const [ongoingRequests,setOngoingRequests]=useState([
    {
      _id:"1",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"2",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"3",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"4",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"5",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"6",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"7",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"8",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"9",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"10",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"11",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"12",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"13",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"14",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"15",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"16",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },
    {
      _id:"17",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    },{
      _id:"18",
      from:"Azwad's Laundry",
      to:"Nafisa Maliyat",
      source:"Mohammadpur",
      sourceLocation:{
        lat:2,
        lng:3
      },
      sinkLocation:{
        lat:2,
        lng:3
      },
      sink:"Gazipur"
    }
  ]);

  return ( 
  <div className="dashboard-delivery">
    <NavbarDelivery navigation={navigation} setNavigation={setNavigation}  activePage={ActivePageType.OngoingDelivery}/>
    <div className="container">
      <div className="main">
        <HeaderDelivery navigation={navigation} setNavigation={setNavigation}/>
        <div className="profile">
            <h2>Currently Ongoing Deliveries</h2>
          </div>
          <div className="d-flex">
          <div className="map-delivery">
            <Map/>
          </div>
          <div className="requests">
            <OngoingArray ongoingRequests={ongoingRequests} setOngoingRequests={setOngoingRequests}/>
          </div>
          </div>
      </div>
    </div>
  </div> 
  );
}
 
export default OngoingDelivery;
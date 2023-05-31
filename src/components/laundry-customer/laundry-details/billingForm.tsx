import { IonIcon } from "@ionic/react";
import {
  callOutline,
  cardOutline,
  cashOutline,
  mapOutline,
} from "ionicons/icons";
import { useState } from "react";
import Map from "../../maps/map-billing/map";

type billingFormProps={
  firstname:string,
  setFirstName:React.Dispatch<React.SetStateAction<string>>,
  middlename:string,
  setMiddleName:React.Dispatch<React.SetStateAction<string>>,
  lastname:string,
  setLastName:React.Dispatch<React.SetStateAction<string>>,
  address:string,
  setAddress:React.Dispatch<React.SetStateAction<string>>,
  payment_method:string,
  setPaymentMethod:React.Dispatch<React.SetStateAction<string>>,
  phone_number:string,
  setPhoneNumber:React.Dispatch<React.SetStateAction<string>>,
  active:boolean,
  setActive:React.Dispatch<React.SetStateAction<boolean>>,
  location: {
    lat: number;
    lng: number;
},
  setLocation:React.Dispatch<React.SetStateAction<{
    lat: number;
    lng: number;
}>>,
handleSelect:(address: string) => Promise<void>,
data:google.maps.places.AutocompletePrediction[],
setValue:{
  (val: string, shouldFetchData?: boolean): void;
},
status:`${google.maps.places.PlacesServiceStatus}` | ""
}

const billingForm = ({firstname,setFirstName,middlename,setMiddleName,lastname,setLastName,address,setAddress,location,setLocation,phone_number,setPhoneNumber,payment_method,setPaymentMethod,
  active,setActive,handleSelect,data,setValue,status
}:billingFormProps) => {

  const changeAddress=(address:string)=>{
    setValue(address);
    setActive(true);
    setAddress(address);
  }

  


  return (
    <div className="d-flex">
      <div className="billing-container">
      <div className="bill-name">
        <div className="inputbox">
          <input type="text" id="first-name" name="first-name" required value={firstname} onChange={(e)=>setFirstName(e.target.value)}/>
          <label htmlFor="">First Name</label>
        </div>
        <div className="inputbox">
          <input type="text" id="middle-name" name="middle-name"  value={middlename} onChange={(e)=>setMiddleName(e.target.value)}/>
          <label htmlFor="">Middle Name</label>
        </div>
        <div className="inputbox">
          <input type="text" id="last-name" name="last-name" required   value={lastname} onChange={(e)=>setLastName(e.target.value)}/>
          <label htmlFor="">Last Name</label>
        </div>
      </div>
      <div className="bill-contact">
        <div className="inputbox">
          <IonIcon icon={callOutline}></IonIcon>
          <input type="text" id="phone" name="phone" required pattern="[01]{2}[3-9]{1}[0-9]{8}"   value={phone_number} onChange={(e)=>setPhoneNumber(e.target.value)}/>
          <label htmlFor="">Phone</label>
        </div>
        <div className="inputbox address-inputbox">
          <IonIcon icon={mapOutline}></IonIcon>
          <input type="text" id="address" name="address" value={address} onChange={(e)=>changeAddress(e.target.value)} required />
          <label htmlFor="">Address</label>
          {active && data.length > 0 && status === "OK" && (
                  <ul className="suggestions" style={{position:"fixed",zIndex:"10",backgroundColor:"white"}}>
                    {data.map(({ place_id, description }) => (
                      <li
                        key={place_id}
                        onClick={() => handleSelect(description)}
                      >
                        {description}
                      </li>
                    ))}
                  </ul>
                )}
        </div>
      </div>

      <div className="bill-payment-mode">
        <div>Choose mode of payment</div>
            <div className="cash">
            <button className={`btn ${payment_method === 'cash' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={()=>setPaymentMethod("cash")}>Cash On Delivery <IonIcon icon={cashOutline}></IonIcon></button>
            </div>
            <div className="digital">
            <button className={`btn ${payment_method === 'digital' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={()=>setPaymentMethod("digital")} style={{marginLeft:'2%'}}>Online Payment <IonIcon icon={cardOutline}></IonIcon></button>
            </div>
      </div>
    </div>
    <div className="billing-map">
        <Map location={location} setLocation={setLocation} setAddress={setAddress}/>
    </div>
    </div>
  );
};

export default billingForm;

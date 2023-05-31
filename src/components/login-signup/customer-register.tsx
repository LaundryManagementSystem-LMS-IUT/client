import { IonIcon } from "@ionic/react";
import { callOutline, homeOutline, mapOutline, timeOutline, timerOutline } from "ionicons/icons";
import Map from "../maps/map-customer/map";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useState } from "react";
import CustomerImage from "./customer-image";
import { useImageUpload } from "../../Hooks/useImageUpload";
import useCustomerSignUp from "../../Hooks/useCustomerSignUp";
import returnSignUp from "../../Library/signUpReturn";
import { useNavigate } from "react-router";

const CustomerRegistration = () => {
  const [location,setLocation]=useState({lat:23.8103,lng:90.4125});
  const [active,setActive]=useState(true);
  const [address,setAddress]=useState("");
  const [phone_number,setPhoneNumber]=useState("");
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const {imageURL,setImage,errorImage,upload_image}=useImageUpload();
  const {loading,error,setError,signup}=useCustomerSignUp();
  const navigate=useNavigate();

  const changeValue=(address:string)=>{
    setValue(address);
    setActive(true);
    setAddress(address);
  }

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

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await signup(phone_number,imageURL,address,location).then((result:returnSignUp)=>{
      if(result.success===true){
        navigate('/customer/dashboard');
      }
      else{
        throw Error('Sign Up Unsuccessful');
      }
    }).catch((error)=>{
      setError(error.message);
      console.log(error);
    })
  }

  return (
    <div className="login-registration">
      <section>
        <div className="customer-registration-box">
          <div
            className="form-value"
            style={{ width: "50%", marginLeft: "2%" }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ marginLeft: "2%" }}
            >
              <h2>Customer Registration</h2>
              <CustomerImage imageURL={imageURL} setImage={setImage} upload_image={upload_image}/>
              <div className="inputbox mx-auto">
                        <IonIcon icon={callOutline}></IonIcon>
                        <input type="text" pattern="[01]{2}[3-9]{1}[0-9]{8}"  id="phone" name="phone"  required value={phone_number}
                onChange={(e)=>setPhoneNumber(e.target.value)}/>
                        <label htmlFor="">Phone Number</label>
              </div>
              <div className="inputbox mx-auto search-bar">
                <IonIcon icon={mapOutline}></IonIcon>
                <input type="text" required id="address" name="address" value={address} onChange={(e)=>changeValue(e.target.value)} />
                <label htmlFor="">Address</label>
                {active && data.length > 0 && status === "OK" && (
                  <ul className="suggestions">
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
              <button type="submit" name="submit" id="submit"  className="dark-button">
                Register
              </button>
            </form>
          </div>
          <div style={{ width: "50%", height: "100%" }}>
            <Map location={location} setLocation={setLocation} setAddress={setAddress}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerRegistration;

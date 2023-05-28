import { IonIcon } from "@ionic/react";
import { callOutline, homeOutline, mapOutline, timeOutline, timerOutline } from "ionicons/icons";
import Map from "../maps/map-manager/map";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useState } from "react";
import LaundryImage from "./laundry-image";

const LaundryRegistration = () => {
  const [location,setLocation]=useState({lat:23.8103,lng:90.4125});
  const [active,setActive]=useState(true);
  const [address,setAddress]=useState("");
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const changeValue=(address:string)=>{
    setValue(address);
    setActive(true);
    setAddress(address);
  }

  const handleSelect = async (address:string) => {
    setValue(address);
    setActive(false);
    clearSuggestions();
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    const coordinates={lat,lng};
    setLocation(coordinates);
    console.log(location);
  };
  return (
    <div className="login-registration">
      <section>
        <div className="laundry-registration-box">
          <div
            className="form-value"
            style={{ width: "50%", marginLeft: "2%" }}
          >
            <form
              action="<?php echo SERVER_PATH ?>laundry-register.php"
              method="POST"
              style={{ marginLeft: "2%" }}
            >
              <h2>Laundry Registration</h2>
              <LaundryImage/>
              <div className="inputbox mx-auto">
                <IonIcon icon={homeOutline}></IonIcon>
                <input
                  type="text"
                  required
                  id="laundry_name"
                  name="laundry_name"
                />
                <label htmlFor="">Laundry Name</label>
              </div>
              <div className="inputbox mx-auto">
                        <IonIcon icon={callOutline}></IonIcon>
                        <input type="text" pattern="[01]{2}[3-9]{1}[0-9]{8}"  id="phone" name="phone"  required/>
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
              <div className="inputbox mx-auto">
                <IonIcon icon={timeOutline}></IonIcon>
                <input type="time" name="openingTime" id="openingTime" />
                <label htmlFor="openingTime">Opening Time</label>
              </div>
              <div className="inputbox mx-auto">
              <IonIcon icon={timerOutline}></IonIcon>
                <input type="time" name="closingTime" id="closingTime" />
                <label htmlFor="closingTime">Closing Time</label>
              </div>
              <button type="submit" name="submit" id="submit">
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

export default LaundryRegistration;

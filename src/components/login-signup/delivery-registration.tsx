import { Card } from "react-bootstrap";
import NavbarLanding from "../partials/navbarLanding";
import DeliveryImage from "./delivery-image";
import { callOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";
import { useImageUpload } from "../../Hooks/useImageUpload";
import useDeliverySignUp from "../../Hooks/useDeliverySignUp";
import { useState } from "react";
import returnSignUp from "../../Library/signUpReturn";
import { useNavigate } from "react-router";

const DeliveryRegistration = () => {
  const {imageURL,setImage,errorImage,upload_image}=useImageUpload();
  const {loading,error,setError,signup}=useDeliverySignUp();
  const [phone_number,setPhoneNumber]=useState("");
  const navigate=useNavigate();

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await signup(phone_number,imageURL).then((result:returnSignUp)=>{
      if(result.success===true){
        navigate('/delivery/dashboard');
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
      <NavbarLanding />
      <Card>
        <div className="delivery-registration-box">
          <form
            onSubmit={handleSubmit}
            style={{ marginLeft: "2%" }}
          >
            <h2>Delivery Registration</h2>
            <div className="errorBox">{error}</div>
            <DeliveryImage imageURL={imageURL} setImage={setImage} upload_image={upload_image}/>
            <div className="errorBox">{errorImage}</div>
            <div className="inputbox mx-auto">
              <IonIcon icon={callOutline}></IonIcon>
              <input
                type="text"
                pattern="[01]{2}[3-9]{1}[0-9]{8}"
                id="phone"
                name="phone"
                required
                value={phone_number}
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
              <label htmlFor="">Phone Number</label>
            </div>
            <button type="submit" name="submit" id="submit"  className="dark-button" disabled={loading}>
              Register
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default DeliveryRegistration;

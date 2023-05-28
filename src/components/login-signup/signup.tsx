import { useState } from "react"
import {Card, Form,InputGroup} from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { mailOutline,lockClosedOutline, personCircleOutline, callOutline, logoGoogle } from 'ionicons/icons';
import NavbarLanding from "../partials/navbarLanding";
import SignUpModal from "./signup-modal";

const SignUp = () => {
  const [error,setError]=useState("");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmErrorPassword,setConfirmError]=useState("");
  const [userType,setUserType]=useState("");
  const [show,setShow]=useState(false);

  const passwordValidator=()=>{

  }
  const confirmPasswordValidator=()=>{

  }
  
  return ( 
    <div className="login-registration">
    <NavbarLanding/>
    <SignUpModal show={show} setShow={setShow}/>
    <Card className="registration-box">
          <Card.Body>
            <h2>Sign Up</h2>
            <Form  className="form-value">
                    <div className="btn-group register-btn-group">
                      <input type="radio" className="btn-check" checked name="userSelection" id="userSelection1" value="Laundry_Manager" onClick={()=>setUserType("manager")}/>
                      <label className="btn btn-outline-primary" htmlFor="userSelection1">Laundry Manager</label>
                      <input type="radio" className="btn-check" name="userSelection" id="userSelection2" value="Laundry_User"  onClick={()=>setUserType("customer")}/>
                      <label className="btn btn-outline-primary" htmlFor="userSelection2">Customer</label>
                      <input type="radio" className="btn-check" name="userSelection" id="userSelection3" value="Delivery" onClick={()=>setUserType("delivery")}/>
                      <label className="btn btn-outline-primary" htmlFor="userSelection3">Delivery</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={personCircleOutline}></IonIcon>
                        <input type="text" required  id="name" name="name" />
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={mailOutline}></IonIcon>
                        <input type="email" id="email" name="email"  required/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={lockClosedOutline}></IonIcon>
                        <input type="password" onChange={passwordValidator} id="password" name="password" required/>
                        <label htmlFor="">Password</label>
                    </div>
                    <div id="errorPassword" className="errorBox"></div>
                    <div className="inputbox">
                        <IonIcon icon={lockClosedOutline}></IonIcon>
                        <input type="password" onChange={confirmPasswordValidator} id="confirmPassword" name="confirmPassword" required/>
                        <label htmlFor="">Re-enter password</label>
                    </div>
                    <div id="confirmErrorPassword" className="errorBox"></div>
                    <button type="submit" className="register-submit" name="submit" value="submit" disabled={false} id="buttonRegister">Register</button>
                    </Form>
                    <hr/>
                    <button name="google" className="register-submit" onClick={()=>setShow(true)}>Sign Up with <IonIcon icon={logoGoogle}></IonIcon></button>
                    <div className="login-link">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
          </Card.Body>
        </Card>
  </div>
  );
}
 
export default SignUp;
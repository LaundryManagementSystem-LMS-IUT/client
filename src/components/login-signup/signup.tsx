import { useState } from "react"
import {Card, Form,InputGroup} from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { mailOutline,lockClosedOutline, personCircleOutline, callOutline } from 'ionicons/icons';

const SignUp = () => {
  const [error,setError]=useState("");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmErrorPassword,setConfirmError]=useState("");
  const [userType,setUserType]=useState("");

  const passwordValidator=()=>{

  }
  const confirmPasswordValidator=()=>{

  }
  
  return ( 
    <div className="login-registration">
    <Card className="registration-box">
          <Card.Body>
            <h2>Login</h2>
            <Form  className="form-value">
            <h2>Registration</h2>
                    <div className="btn-group">
                      <input type="radio" className="btn-check" checked name="userSelection" id="userSelection1" value="Laundry_Manager"/>
                      <label className="btn btn-outline-primary" htmlFor="userSelection1">Laundry Manager</label>
                      <input type="radio" className="btn-check" name="userSelection" id="userSelection2" value="Laundry_User"/>
                      <label className="btn btn-outline-primary" htmlFor="userSelection2">Customer</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={personCircleOutline}></IonIcon>
                        <input type="text" required  id="name" name="name" />
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={callOutline}></IonIcon>
                        <input type="text" pattern="[01]{2}[3-9]{1}[0-9]{8}"  id="phone" name="phone"  required/>
                        <label htmlFor="">Phone Number</label>
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
                    <button type="submit" name="submit" value="submit" disabled={false} id="buttonRegister"  on-click="()=>{document.getElementById('buttonRegister').disabled=true}">Register</button>
                    <div className="login">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
            </Form>
          </Card.Body>
        </Card>
  </div>
  );
}
 
export default SignUp;
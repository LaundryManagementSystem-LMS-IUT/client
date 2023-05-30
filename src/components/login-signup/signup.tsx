import { useState } from "react"
import {Card, Form,InputGroup} from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { mailOutline,lockClosedOutline, personCircleOutline, callOutline, logoGoogle } from 'ionicons/icons';
import NavbarLanding from "../partials/navbarLanding";
import SignUpModal from "./signup-modal";
import axios from "axios";

const SignUp = () => {
  const [error,setError]=useState("");
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [confirmErrorPassword,setConfirmErrorPassword]=useState("");
  const [ErrorPassword,setErrorPassword]=useState("");
  const [userType,setUserType]=useState("");
  const [show,setShow]=useState(false);

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await axios.post('http://localhost:8000',{
      username:username,
      email:email,
      password:password,
      userType:userType
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    })
  }

  const passwordValidator=(input:string)=>{
    setPassword(input);
  }
  const confirmPasswordValidator=(input:string)=>{
    setConfirmPassword(input);
  }
  
  return ( 
    <div className="login-registration">
    <NavbarLanding/>
    <SignUpModal show={show} setShow={setShow}/>
    <Card className="registration-box">
          <Card.Body>
            <h2>Sign Up</h2>
            <Form  className="form-value" onSubmit={handleSubmit}> 
                    <div className="btn-group register-btn-group">
                      <input type="radio" className="btn-check" checked name="userSelection" id="userSelection1" value="manager" onClick={()=>setUserType("manager")}/>
                      <label className="btn btn-outline-primary" htmlFor="userSelection1">Manager</label>
                      <input type="radio" className="btn-check" name="userSelection" id="userSelection2" value="customer"  onClick={()=>setUserType("customer")}/>
                      <label className="btn btn-outline-primary" htmlFor="userSelection2">Customer</label>
                      <input type="radio" className="btn-check" name="userSelection" id="userSelection3" value="delivery" onClick={()=>setUserType("delivery")}/>
                      <label className="btn btn-outline-primary" htmlFor="userSelection3">Delivery</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={personCircleOutline}></IonIcon>
                        <input type="text" required  id="name" name="name" value={username} onChange={(e)=>setUsername(e.target.value)} />
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={mailOutline}></IonIcon>
                        <input type="email" id="email" name="email"  required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={lockClosedOutline}></IonIcon>
                        <input type="password" onChange={(e)=>passwordValidator(e.target.value)} id="password" name="password" required value={password}/>
                        <label htmlFor="">Password</label>
                    </div>
                    <div id="errorPassword" className="errorBox">{ErrorPassword}</div>
                    <div className="inputbox">
                        <IonIcon icon={lockClosedOutline}></IonIcon>
                        <input type="password" onChange={(e)=>confirmPasswordValidator(e.target.value)} required value={confirmPassword} id="confirmPassword" name="confirmPassword"/>
                        <label htmlFor="">Re-enter password</label>
                    </div>
                    <div id="confirmErrorPassword" className="errorBox">{confirmErrorPassword}</div>
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
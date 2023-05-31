import { useState } from "react"
import {Card, Form,InputGroup} from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { mailOutline,lockClosedOutline, personCircleOutline, callOutline, logoGoogle, lockOpenOutline } from 'ionicons/icons';
import NavbarLanding from "../partials/navbarLanding";
import SignUpModal from "./signup-modal";
import axios from "axios";
import DOMPurify from 'dompurify';
import useSignUp from "../../Hooks/useSignUp";
import returnSignUp from "../../Library/signUpReturn";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const [confirmErrorPassword,setConfirmErrorPassword]=useState("");
  const [passwordVisibility,setPasswordVisibility]=useState("password");
  const [confirmPasswordVisibility,setConfirmPasswordVisibility]=useState("password");
  const [ErrorPassword,setErrorPassword]=useState("");
  const [userType,setUserType]=useState("manager");
  const [show,setShow]=useState(false);
  const navigate=useNavigate();
  const {loading,error,setError,signup}=useSignUp();

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await signup(email,username,userType,password).then((res:returnSignUp)=>{
      if(res.success===false){
        throw Error('Sign Up Unsuccessful due to technical reasons');
      }
      else{
        if(res.userType==="manager"){
          navigate('/manager/register');
        }
        else if(res.userType==="customer"){
          navigate('/customer/register');
        }
        else{
          navigate('/delivery/register');
        }
      }
    }).catch((error)=>{
      setError(error.message);
    })
  }

  const isPasswordStrong = (input: string): boolean => {
    if(input.length<8){
      return false;
    }
    let charPresent:boolean=false;
    let numPresent:boolean=false;
    let upperCase:boolean=false;
    let lowerCase:boolean=false;
    for (let i = 0; i < password.length; i++) {
      if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') {
          upperCase = true
      }
      else if (password.charAt(i) >= 'a' && password.charAt(i) <= 'z') {
          lowerCase = true
      }
      else if (password.charAt(i) >= '0' && password.charAt(i) <= '9') {
          numPresent = true
      }
      else if ((password.charAt(i) >= ' ' && password.charAt(i) < '0') || (password.charAt(i) > '9' && password.charAt(i) < 'A') || (password.charAt(i) > 'Z' && password.charAt(i) < 'a') || (password.charAt(i) > 'z' && password.charAt(i) <= '~')) {
          charPresent = true
      }
      else {
          continue
      }
  }
    if (lowerCase === false || upperCase === false || numPresent === false || charPresent === false) {
        return false;
    }
    return true;
  };

  const passwordValidator=(input:string)=>{
    setPassword(input);
    if(!isPasswordStrong(input) && input!==""){
      setErrorPassword("Weak Password: Please enter a stronger password");
    }
    else{
      setErrorPassword("");
    }
    if(input!==confirmPassword && confirmPassword!==""){
      setConfirmErrorPassword("Passwords do not match");
    }
    else{
      setConfirmErrorPassword("");
    }
  }
  const confirmPasswordValidator=(input:string)=>{
    setConfirmPassword(input);
    if(input!==password){
      setConfirmErrorPassword("Passwords do not match");
    }
    else{
      setConfirmErrorPassword("");
    }
  }
  
  return ( 
    <div className="login-registration">
    <NavbarLanding/>
    <SignUpModal show={show} setShow={setShow}/>
    <Card className="registration-box">
          <Card.Body>
            <h2>Sign Up</h2>
            <Form  className="form-value" onSubmit={handleSubmit}> 
                    <div className="errorBox">{error}</div>
                    <div className="btn-group register-btn-group">
                      <button className={`btn ${userType === 'manager' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={()=>setUserType("manager")}>Manager</button>
                      <button className={`btn ${userType === 'customer' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={()=>setUserType("customer")}>Customer</button>
                      <button className={`btn ${userType === 'delivery' ? 'btn-primary' : 'btn-outline-primary'}`} onClick={()=>setUserType("delivery")}>Delivery</button>
                    </div>

                    <div className="inputbox">
                        <IonIcon icon={personCircleOutline}></IonIcon>
                        <input type="text" required  id="name" name="name" value={username} onChange={(e)=>setUsername(DOMPurify.sanitize(e.target.value))} />
                        <label htmlFor="">Name</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={mailOutline}></IonIcon>
                        <input type="email" id="email" name="email"  required value={email} onChange={(e)=>setEmail(DOMPurify.sanitize(e.target.value))}/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        {(passwordVisibility==="password" && (<IonIcon icon={lockClosedOutline} onClick={()=>setPasswordVisibility("text")}></IonIcon>)) || (passwordVisibility==="text" && (<IonIcon icon={lockOpenOutline} onClick={()=>setPasswordVisibility("password")}></IonIcon>)) }
                        <input type={passwordVisibility} onChange={(e)=>passwordValidator(DOMPurify.sanitize(e.target.value))} id="password" name="password" required value={password}/>
                        <label htmlFor="">Password</label>
                    </div>
                    <div id="errorPassword" className="errorBox">{ErrorPassword}</div>
                    <div className="inputbox">
                        {(confirmPasswordVisibility==="password" && (<IonIcon icon={lockClosedOutline} onClick={()=>setConfirmPasswordVisibility("text")}></IonIcon>)) || (confirmPasswordVisibility==="text" && (<IonIcon icon={lockOpenOutline} onClick={()=>setConfirmPasswordVisibility("password")}></IonIcon>))}
                        <input type={confirmPasswordVisibility} onChange={(e)=>confirmPasswordValidator(DOMPurify.sanitize(e.target.value))} required value={confirmPassword} id="confirmPassword" name="confirmPassword"/>
                        <label htmlFor="">Re-enter password</label>
                    </div>
                    <div id="confirmErrorPassword" className="errorBox">{confirmErrorPassword}</div>
                    <button type="submit" className="register-submit" name="submit" value="submit" disabled={loading || confirmErrorPassword!=="" || ErrorPassword !==""} id="buttonRegister">Register</button>
                    </Form>
                    <hr/>
                    <button name="google" className="register-submit" onClick={()=>setShow(true)} disabled={loading}>Sign Up with <IonIcon icon={logoGoogle}></IonIcon></button>
                    <div className="login-link">
                        <p>Already have an account? <a href="/login">Login</a></p>
                    </div>
          </Card.Body>
        </Card>
  </div>
  );
}
 
export default SignUp;
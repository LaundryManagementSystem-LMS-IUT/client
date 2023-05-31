import { useState } from "react";
import { Card, Form, InputGroup } from "react-bootstrap";
import { IonIcon } from "@ionic/react";
import { mailOutline, lockClosedOutline, logoGoogle } from "ionicons/icons";
import NavbarLanding from "../partials/navbarLanding";
import { useLogin } from "../../Hooks/useLogin";
import { useNavigate } from "react-router";
import returnSignUp from "../../Library/signUpReturn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {loading,error,setError,login}=useLogin();

  const navigate=useNavigate();

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    await login(email,password).then((res:returnSignUp)=>{
      if(res.success===false){
        throw Error('Incorrect Email and Password');
      }
      else if(res.success===true){
        if(res.userType==="manager"){
          navigate('/manager/dashboard');
        }
        else if(res.userType==="customer"){
          navigate('/customer/dashboard');
        }
        else{
          navigate('/delivery/dashboard');
        }
      }
      else{
        throw Error('Login failed due to technical reasons');
      }
    }).catch((error)=>{
      setError(error.message);
    })
  }

  return (
    <div className="login-registration">
      <NavbarLanding />
      <Card className="login-box">
        <Card.Body>
          <h2>Login</h2>
          <Form className="form-value" onSubmit={handleSubmit}>
            <div id="confirmErrorPassword" className="errorBox">
              {error}
            </div>
            <div className="inputbox">
              <IonIcon icon={mailOutline} />
              <input type="email" required id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              <label htmlFor="">Email</label>
            </div>
            <div className="inputbox">
              <IonIcon icon={lockClosedOutline} />
              <input type="password" id="password" name="password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
              <label htmlFor="">Password</label>
            </div>
            <button type="submit" name="submit" id="submit" className="login-submit">
              Log in
            </button>
            <hr />
            <button name="google" className="login-submit">
              Login with <IonIcon icon={logoGoogle}></IonIcon>
            </button>
            <div className="register-link">
              <p>
                Don't have an account? <a href="/signup">Register</a>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;

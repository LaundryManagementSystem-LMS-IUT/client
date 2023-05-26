import { useState } from "react"
import {Card, Form,InputGroup} from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { mailOutline,lockClosedOutline } from 'ionicons/icons';

const Login = () => {
  const [error,setError]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return ( 
      <div className="login-registration">
        <Card className="login-box">
              <Card.Body>
                <h2>Login</h2>
                <Form  className="form-value">
                    <div id="confirmErrorPassword" className="errorBox">{error}</div>
                    <div className="inputbox">
                        <IonIcon icon={mailOutline}/>
                        <input type="email" required id="email" name="email"/>
                        <label htmlFor="">Email</label>
                    </div>
                    <div className="inputbox">
                        <IonIcon icon={lockClosedOutline}/>
                        <input type="password" id="password" name="password" required/>
                        <label htmlFor="">Password</label>
                    </div>
                     <div className="remember">
                        <label htmlFor=""><input type="checkbox"/>Remember Me!</label> 
                    </div> 
                    <button type="submit" name="submit" id="submit">Log in</button>
                    <div className="register">
                        <p>Don't have an account? <a href="/signup">Register</a></p>
                    </div>
                </Form>
              </Card.Body>
            </Card>
      </div>
   );
}

export default Login;
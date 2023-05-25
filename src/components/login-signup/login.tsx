import { useState } from "react"
import {Card, Form, InputGroup} from 'react-bootstrap';
const Login = () => {
  const [error,setError]=useState("");
  const [username,setUser]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmErrorPassword,setConfirmError]=useState("");
  const [userType,setUserType]=useState("");

  return ( 
            <Card className="form-box">
              <Card.Title>Login</Card.Title>
              <Card.Body>
                <Form  className="form-value">
                <h2>Login</h2>
                    <div id="confirmErrorPassword" className="errorBox">{error}</div>
                    <div className="inputbox">
                        <input type="email" required id="email" name="email"/>
                        <label for="">Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" name="password" required autocomplete="off">
                        <label for="">Password</label>
                    </div>
                     <div className="remember">
                        <label for=""><input type="checkbox">Remember Me!</label> 
                    </div> 
                    <button type="submit" name="submit" id="submit" on-click="()=>{document.getElementById('submit').disabled=true}">Log in</button>
                    <div className="register">
                        <p>Don't have an account? <a href="signup.php">Register</a></p>
                    </div>
                </Form>
              </Card.Body>
            </Card>
   );
}
 

{/* <form action="<?php echo SERVER_PATH ?>login.php" method="POST">
                    <h2>Login</h2>
                    <div style="display:<?php empty($error)?"none":"block" ?>" id="confirmErrorPassword" className="errorBox">{error}</div>
                    <div className="inputbox">
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type="email" required id="email" name="email" autocomplete="off">
                        <label for="">Email</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" name="password" required autocomplete="off">
                        <label for="">Password</label>
                    </div>
                    <!-- <div className="remember">
                        <label for=""><input type="checkbox">Remember Me!</label> 
                    </div> -->
                    <button type="submit" name="submit" id="submit" on-click="()=>{document.getElementById('submit').disabled=true}">Log in</button>
                    <div className="register">
                        <p>Don't have an account? <a href="signup.php">Register</a></p>
                    </div>
                </form> */}
export default Login;
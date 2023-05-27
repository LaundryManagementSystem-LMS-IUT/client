import Card from 'react-bootstrap/Card';
import {Envelope} from "react-bootstrap-icons";
import OtpInput from 'react18-input-otp';
import { useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import NavbarLanding from '../partials/navbarLanding';
import OTPValidityTimer from './otp-components/OTPTimer';
const EmailVerification = () => {
  const navigate=useNavigate();
    const {email}=useParams();
    const [otp,setOTP]=useState("");
    const [isDisabled,setIsDisabled]=useState(true);
    const [isLocked,setisLocked]=useState(false);
    const [error,setError]=useState(true);



    const handleSubmit = async() =>{
      
    }


    const resend = () =>{
      window.location.reload();
    }

    const handleTimerExpire = async() =>{

    }
  return ( 
  <div className="landing">
            <NavbarLanding/>
        <div>
            <section className='d-flex justify-content-center'>
            <Card className='forgotPasswordCard'>
        <Card.Header className=''><Envelope style={{color:"#766788",paddingRight:'5px',fontSize:'30px',marginBottom:'1.25%'}} /><b style={{textAlign: "center", fontSize: "20px"}}>Verify Email Account</b></Card.Header>
        <Card.Body>
        <div className="verifyDiv">
      <p className="p2">
        An OTP has been sent to your entered email {email}
      </p>
      <p className="p2" style={{color:'red'}}>{error}</p>
      <div className="otpElements">
        <p className="p3">Enter your Code here</p>
        <div className="otp">
          <OtpInput
            onChange={setOTP}
            value={otp}
            inputStyle="inputStyle"
            numInputs={6}
            separator={<span></span>}
          />
        </div>
        <p>OTP is valid for: <OTPValidityTimer validityPeriodInSeconds={180} onTimerExpired={handleTimerExpire}/></p>
        
      </div>
      <div style={{marginBottom:'2%'}}><p className="p3">Didn't receive the code?</p></div>
      <div className="d-flex">
      <button disabled={isDisabled} onClick={resend}>Resend</button>
      <button disabled={isLocked} style={{marginLeft:'2%'}} onClick={handleSubmit}>
          Verify
      </button>
      </div>

    </div>
        </Card.Body>
      </Card>
      </section>
        </div>   
     );
  </div> );
}
 
export default EmailVerification;
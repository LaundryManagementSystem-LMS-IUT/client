import Card from 'react-bootstrap/Card';
import ForgotPasswordSendEmail from './forgotPasswordSendEmail';
import NavbarLanding from '../../partials/navbarLanding';
const ForgotPassword = () => {
    return ( 
      <div className='landing'>
            <NavbarLanding/>
            <section className='d-flex justify-content-center'>
            <Card className='forgotPasswordCard'>
        <Card.Header className='' style={{textAlign: "center", fontSize: "20px"}}><b>Forgot Password</b></Card.Header>
        <Card.Body>
        
        <ForgotPasswordSendEmail/>
        </Card.Body>
      </Card>
      </section>
    </div>   
     );
}
 
export default ForgotPassword;
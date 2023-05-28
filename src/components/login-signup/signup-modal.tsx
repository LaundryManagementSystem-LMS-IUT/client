import { Modal } from "react-bootstrap";

type SignUpModalProps={
  show:boolean,
  setShow:React.Dispatch<React.SetStateAction<boolean>>
}

const SignUpModal = ({show,setShow}:SignUpModalProps) => {
  return ( 
  <Modal show={show} onHide={()=>setShow(false)}>
  <Modal.Header closeButton><h2>Sign Up with Google As</h2></Modal.Header>
  <Modal.Body className="d-flex">
    <button>Laundry Manager</button>
    <button style={{marginLeft:'2%'}}>Customer</button>
    <button style={{marginLeft:'2%'}}>Delivery</button>
  </Modal.Body>
  </Modal> 
  );
}
 
export default SignUpModal;
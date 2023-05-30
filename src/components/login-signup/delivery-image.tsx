import { useState } from "react";
import { Modal } from "react-bootstrap";
import Loader from "../partials/loader";

const DeliveryImage=()=>{
  const [modalShow, setModalShow] = useState(false);
  const [imageURL,setImageURL] = useState("/customerProfilePicture.jpg");
  const [locked,setLocked]=useState(false);

  if(locked===false){
    return (
      <div className="profile-picture-container">
        <img src={imageURL} alt="Profile" />
        
  
        <p className="edit-profile-picture" onClick={() => setModalShow(true)}>Edit</p>
        <Modal show={modalShow}
          onHide={() => setModalShow(false)}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h2>Upload Profile Picture</h2>
          </Modal.Title>
        </Modal.Header>
        <form>
        <Modal.Body>
          <div className="input-group flex">
          <input type="file" name="file"
                      accept="image/*"
                      id="imageFileProfile"  className="form-control"/>
        </div>
        </Modal.Body>
        <Modal.Footer>
                    <button type="submit"  className="dark-button">
                      Save Changes
                    </button>
          
        </Modal.Footer>
        </form>
      </Modal>
      </div>
    );
  }
  else{
    return (
      <Loader/>
    );
  }
}

export default DeliveryImage;
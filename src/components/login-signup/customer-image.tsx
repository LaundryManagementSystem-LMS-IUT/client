import { useState } from "react";
import { Modal } from "react-bootstrap";
import Loader from "../partials/loader";


type CustomerImageProps={
  imageURL:string|undefined,
  setImage:React.Dispatch<React.SetStateAction<File | undefined>>,
  upload_image:()=>Promise<void>
}

const CustomerImage=({imageURL,setImage,upload_image}:CustomerImageProps)=>{
  const [modalShow, setModalShow] = useState(false);
  const [locked,setLocked]=useState(false);

  const makeSubmit=async()=>{
    setModalShow(false);
    setLocked(true);
    await upload_image();
    setLocked(false);
  }

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
        <Modal.Body>
          <div className="input-group flex">
          <input type="file" name="file"
                      accept="image/*"
                      id="imageFileProfile"  className="form-control" onChange={(e) => {
                        if(e.target.files!==null){
                          setImage(e.target.files[0])
                        }
                        }}/>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <button  className="dark-button" onClick={makeSubmit}>
                      OK
                    </button>
          
        </Modal.Footer>
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

export default CustomerImage;
import { Modal } from "react-bootstrap";
import { IonIcon } from "@ionic/react";
import { constructOutline, refreshCircleOutline, shirtOutline, shirtSharp, waterOutline } from "ionicons/icons";
import { useState } from "react";

type ModalProperty={
  show:boolean,
  setShow:React.Dispatch<React.SetStateAction<boolean>>,
  pricing: {
    ClothType: string;
    Wash: number;
    Iron: number;
    WashAndIron: number;
    DryClean: number;
}[],
  setPricing: React.Dispatch<React.SetStateAction<{
    ClothType: string;
    Wash: number;
    Iron: number;
    WashAndIron: number;
    DryClean: number;
}[]>>
}

const AddItem = ({show,setShow,pricing,setPricing}:ModalProperty) => {
  const [label,setLabel]=useState("");
  const [wash,setWash]=useState("");
  const [iron,setIron]=useState("");
  const [washAndIron,setWashAndIron]=useState("");
  const [dryClean,setDryClean]=useState("");

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log('comes here');
    try{
      setPricing([...pricing,{ClothType:label, Wash:Number(wash), Iron:Number(iron), WashAndIron:Number(washAndIron), DryClean:Number(dryClean)}]);
    setShow(false);
    }
    catch(err){
      console.log(err);
    }
  }

  return ( 
  <Modal show={show} onHide={()=>setShow(false)}>
    <form onSubmit={(e)=>handleSubmit(e)}>
    <Modal.Header closeButton><div className="new-order">
  <div className="title">
    <h1>Add Item</h1>
  </div>
  </div>
  </Modal.Header>
    <Modal.Body>
    <div className="inputbox">
      <IonIcon icon={shirtSharp}></IonIcon>
      <input type="text" id="item-label" name="item-label"  value={label} onChange={(e)=>setLabel(e.target.value)} required/>
      <label htmlFor="item-label">Item Label</label>
    </div>
    <div className="inputbox">
     <IonIcon icon={waterOutline}></IonIcon>
      <input type="number" id="wash" name="wash" value={wash} onChange={(e)=>setWash(e.target.value)}/>
      <label htmlFor="wash">Washing Price</label>
    </div>
    <div className="inputbox">
     <IonIcon icon={refreshCircleOutline}></IonIcon>
      <input type="number" id="iron" name="iron" value={iron} onChange={(e)=>setIron(e.target.value)}/>
      <label htmlFor="iron">Ironing Price</label>
    </div>
    <div className="inputbox">
     <IonIcon icon={waterOutline}></IonIcon>
     <IonIcon icon={refreshCircleOutline}></IonIcon>
      <input type="number" id="washAndIron" name="washAndIron" value={washAndIron} onChange={(e)=>setWashAndIron(e.target.value)}/>
      <label htmlFor="washAndIron">Washing and Ironing Price</label>
    </div>
    <div className="inputbox">
     <IonIcon icon={shirtOutline}></IonIcon>
      <input type="number" id="dryClean" name="dryClean" value={dryClean} onChange={(e)=>setDryClean(e.target.value)}/>
      <label htmlFor="dryClean">Dry Cleaning Price</label>
    </div>
    </Modal.Body>
    <Modal.Footer>
      <button type="submit" className="add-item-btn">Add Item</button>
    </Modal.Footer>
    </form>
  </Modal>
  );
}
 
export default AddItem;
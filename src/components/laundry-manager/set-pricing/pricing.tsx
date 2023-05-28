import { useState } from "react";
import HeaderManager from "../../partials/headerManager";
import NavbarManager from "../../partials/navbarManager";
import { Table } from "react-bootstrap";
import {IonIcon} from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import AddItem from "./add-item-modal";
import { ActivePageType } from "../../../utils/activePageTypes";

const Pricing = () => {
  const [navigation,setNavigation]=useState(false);
  const [show,setShow]=useState(false);
  const [curr_index,setIndex]=useState(-1);
  const [value,setValue]=useState(0);
  const [currentOperation,setCurrentOperation]=useState("");
  const changeValue=(e:string,index:number,operation:string)=>{
    setValue(Number(e));
    let temp_pricing: {
      ClothType: string;
      Wash: number;
      Iron: number;
      WashAndIron: number;
      DryClean: number;
  }[]=[...pricing];
    if(operation==="wash"){
      temp_pricing[index].Wash=Number(e);
    }
    else if(operation==="iron"){
      temp_pricing[index].Iron=Number(e);
    }
    else if(operation==="washAndiron"){
      temp_pricing[index].WashAndIron=Number(e);
    }
    else{
      temp_pricing[index].DryClean=Number(e);
    }
    setPricing(temp_pricing);
  }

  const [pricing,setPricing]=useState([{
    ClothType:"Shirt",
    Wash:80,
    Iron:60,
    WashAndIron:50,
    DryClean:40
  },{
    ClothType:"Pant",
    Wash:80,
    Iron:60,
    WashAndIron:50,
    DryClean:40
  },{
    ClothType:"Blanket",
    Wash:80,
    Iron:60,
    WashAndIron:50,
    DryClean:40
  },{
    ClothType:"Sweater",
    Wash:80,
    Iron:60,
    WashAndIron:50,
    DryClean:40
  }]);
  return ( 
  <div className="pricing">
   <NavbarManager navigation={navigation}  setNavigation={setNavigation} activePage={ActivePageType.SetPricing}/>
    <div className="container">
      <div className="main">
      <HeaderManager  navigation={navigation}  setNavigation={setNavigation}/>
      <AddItem show={show} setShow={setShow} pricing={pricing} setPricing={setPricing}/>
      <div className="table new-order-table">
      <div className="new-order">
        <div className="title">
          <h1>Add New Item</h1>
        </div>
        <div className="add-order-btn">
          <button className="add-order" onClick={()=>setShow(true)}>
            Add Item
            <IonIcon icon={addCircleOutline}></IonIcon>
          </button>
        </div>
      </div>
      </div>
      <Table striped bordered hover className="pricing-table">
            <thead>
            <tr>
              <h2>Pricing Chart</h2>
            </tr>
            <tr>
                    <th> <h5>Cloth</h5> </th><th> <h5>Wash</h5> </th><th> <h5>Iron</h5> </th><th> <h5>Wash And Iron</h5> </th><th> <h5>Dry Clean</h5> </th>
            </tr>
            </thead>
            <tbody>
            {pricing.map((price,index)=>(
              <tr>
              <td>{price.ClothType}</td>
              <td onClick={()=>{
                setIndex(index);
                setValue(price.Wash);
                setCurrentOperation("wash");
              }}><input type={(curr_index===index && currentOperation==="wash")?"number":"text"} value={(curr_index===index && currentOperation==="wash")?value:price.Wash!==0?"৳ "+price.Wash:"N/A"} onChange={(e)=>changeValue(e.target.value,index,'wash')} disabled={!(curr_index===index && currentOperation==="wash")}/></td>
              <td  onClick={()=>{
                setIndex(index);
                console.log('index: ',curr_index);
                setValue(price.Iron);
                setCurrentOperation("iron");
                console.log('operation: ',currentOperation);
              }}><input type={(curr_index===index && currentOperation==="iron")?"number":"text"} value={(curr_index===index && currentOperation==="iron")?value:price.Iron!==0?"৳ "+price.Iron:"N/A"} onChange={(e)=>changeValue(e.target.value,index,'iron')} disabled={!(curr_index===index && currentOperation==="iron")}/></td>
              <td onClick={()=>{
                setIndex(index);
                setValue(price.WashAndIron);
                setCurrentOperation("washAndiron");
              }}><input type={(curr_index===index && currentOperation==="washAndiron")?"number":"text"} value={(curr_index===index && currentOperation==="washAndiron")?value:price.WashAndIron!==0?"৳ "+price.WashAndIron:"N/A"} onChange={(e)=>changeValue(e.target.value,index,'washAndiron')} disabled={!(curr_index===index && currentOperation==="washAndiron")}/></td>
              <td onClick={()=>{
                setIndex(index);
                setValue(price.DryClean);
                setCurrentOperation("dryClean");
              }}><input type={(curr_index===index && currentOperation==="dryClean")?"number":"text"} value={(curr_index===index && currentOperation==="dryClean")?value:price.DryClean!==0?"৳ "+price.DryClean:"N/A"} onChange={(e)=>changeValue(e.target.value,index,'dryClean')} disabled={!(curr_index===index && currentOperation==="dryClean")}/></td>
            </tr>
            ))}
            </tbody>
            <tfoot>
            <button style={{width:'90%'}} onClick={()=>setIndex(-1)}>Set Price</button>
            </tfoot>
          </Table>
      </div>
    </div>
  </div> 
  );
}
 
export default Pricing;
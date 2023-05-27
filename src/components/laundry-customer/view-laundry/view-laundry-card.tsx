import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type LaundryCardContent={
  name:string,
  location:string,
  imageURL:string
}

const LaundryCard = ({name,location,imageURL}:LaundryCardContent) => {
  const navigate=useNavigate();
  return ( 
    <Card
    className="laundry-card"
    style={{color:'white'}}
    onClick={()=>navigate('/customer/laundryDetails/123')}
  >
    <Card.Img variant="top" src={imageURL} className="laundry-card-image"/>
    <Card.Body >
      <Card.Title>{name}</Card.Title>
      <Card.Text>{location}</Card.Text>
    </Card.Body>
  </Card>
  );
}
 
export default LaundryCard;
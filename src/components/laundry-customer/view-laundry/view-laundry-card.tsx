import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type LaundryCardContent={
  name:string,
  location:string,
  imageURL:string,
  searchQuery: string,
}

const LaundryCard = ({name,location,imageURL,searchQuery}:LaundryCardContent) => {
  
  const getHighlightedText = (text: string, highlight: string) => {
    if (!text || !highlight) {
      return text; // Return the original text if either the text or highlight is empty
    }
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };
  const navigate=useNavigate();
  return ( 
    <Card
    className="laundry-card"
    style={{color:'white'}}
    onClick={()=>navigate('/customer/laundryDetails/123')}
  >
    <Card.Img variant="top" src={imageURL} className="laundry-card-image"/>
    <Card.Body >
      <Card.Title>{getHighlightedText(name, searchQuery.toString())}</Card.Title>
      <Card.Text>{getHighlightedText(location, searchQuery.toString())}</Card.Text>
    </Card.Body>
  </Card>
  );
}
 
export default LaundryCard;
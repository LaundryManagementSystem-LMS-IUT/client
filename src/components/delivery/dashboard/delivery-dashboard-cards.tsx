import { Card } from "react-bootstrap";

type DeliveryCardProps={
    delivery:{
      _id: string;
      from: string;
      to: string;
      source: string;
      sourceLocation: {
          lat: number;
          lng: number;
      };
      sinkLocation: {
        lat: number;
        lng: number;
      };
      sink: string;
    }
}

const DeliveryCard = ({delivery}:DeliveryCardProps) => {
  return ( 
    <Card className="delivery-request">
      <Card.Header>
        <h2>Delivery Request</h2>
        <div className="order_id">
        Order ID: {delivery._id}
        </div>
        <div className="from">
        From: {delivery.from}
        </div>
        <div className="to">
        To: {delivery.to}
        </div>
      </Card.Header>
      <Card.Body>
        <div className="starting-location">
        Receiving Location: {delivery.source}
        </div>
        <div className="ending-location">
        Destination: {delivery.sink}
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="buttons">
        <button>Accept</button>
        <button style={{marginLeft:'2%'}}>Reject</button>
        <button style={{marginLeft:'2%'}}>Show Route</button>
        </div>
      </Card.Footer>
    </Card>
   );
}
 
export default DeliveryCard;
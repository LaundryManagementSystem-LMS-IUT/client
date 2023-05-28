import { Card } from "react-bootstrap";

type OngoingCardProps={
  ongoing:{
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

const OngoingCard = ({ongoing}:OngoingCardProps) => {
  return (
    <Card className="delivery-request">
      <Card.Header>
        <h2>Order ID: {ongoing._id}</h2>
        <div className="from">
        From: {ongoing.from}
        </div>
        <div className="to">
        To: {ongoing.to}
        </div>
      </Card.Header>
      <Card.Body>
        <div className="starting-location">
        Receiving Location: {ongoing.source}
        </div>
        <div className="ending-location">
        Destination: {ongoing.sink}
        </div>
      </Card.Body>
      <Card.Footer>
        <div className="buttons">
        <button>Success</button>
        <button style={{marginLeft:'2%'}}>Fail</button>
        <button style={{marginLeft:'2%'}}>Current Route</button>
        </div>
      </Card.Footer>
    </Card>
   );
}
 
export default OngoingCard;
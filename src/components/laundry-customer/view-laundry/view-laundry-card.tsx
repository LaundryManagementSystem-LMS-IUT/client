import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Loader from "../../partials/loader";

type LaundryCardContent = {
  laundry_id: string;
  laundry_name: string;
  address: string;
  profile_picture: string;
  searchQuery: string;
};

const LaundryCard = ({
  laundry_id,
  laundry_name,
  address,
  profile_picture,
  searchQuery,
}: LaundryCardContent) => {
  const [setter, setSetter] = useState({ lat: 2, lng: 2 });
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
  const [loading,setLoading]=useState(false);
  const [textAddress,setTextAddress]=useState("");
  const retrieveAddress=async(coordinates:{lat:number,lng:number})=>{
    const result=await axios.post('http://localhost:8000/api/address',coordinates).then((res)=>{
      setLoading(false);
      return res.data?.address?.formatted_address;
    })
    .catch((err)=>{
      setLoading(false);
      console.log(err);
    })
    setTextAddress(result);
  }

  useEffect(() => {
    setLoading(true);
    if (address) {
      const address1 = address.substring(1, address.length - 1);
      const str = address1.split(",");
      const first = '{"lat": ' + str[0] + ',"lng": ' + str[1] + "}";
      console.log(first);
      const result = JSON.parse(first);
      retrieveAddress(result);
    }
  }, [address]);

  const navigate = useNavigate();
  if(!loading){
    return (
      <Card
        className="laundry-card"
        style={{ color: "white" }}
        onClick={() => navigate(`/customer/laundryDetails/${laundry_id}`)}
      >
        <Card.Img
          variant="top"
          src={profile_picture}
          className="laundry-card-image"
        />
        <Card.Body>
          <Card.Title>
            {getHighlightedText(laundry_name, searchQuery.toString())}
          </Card.Title>
          <Card.Text>
            {getHighlightedText(textAddress, searchQuery.toString())}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  else{
    return (<Loader/>)
  }
};

export default LaundryCard;

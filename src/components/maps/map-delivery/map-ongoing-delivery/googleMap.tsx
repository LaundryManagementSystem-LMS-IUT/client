import { useEffect, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import {Card} from "react-bootstrap";


const GMap = ()=>{
  const [markerPosition, setMarkerPosition] = useState({lat:23.8103,lng:90.4125});
  const [error,setError]=useState<string>("");
  useEffect(()=>{
    getUserLocation();
  },[])

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setMarkerPosition(userLocation);
      });
    } else {
      setError("Please check if your location services is turned on or if your browser supports location services and then click on the Get Current Location button");
    }
  };


  return ( 
      <Card style={{border:'none'}}>
        <Card.Body style={{width:'100%',height:'100%'}}>
        <GoogleMap zoom={14} center={markerPosition} mapContainerStyle={{width: '100%',height:'1017px'}}>
        <MarkerF
          position={markerPosition}
          draggable={false}
          visible={true}
          icon={{
            url: '/self-marker2.png', 
            scaledSize: new window.google.maps.Size(40, 40), 
            anchor: new window.google.maps.Point(20, 29), 
          }}
        />
        </GoogleMap>
        </Card.Body>
        <Card.Footer style={{display:'flex'}}>
        <div className="error" style={{color:"red"}}>{error}</div>
        <button onClick={getUserLocation}  className="dark-button">Get Current Location</button>
        </Card.Footer>
      </Card>
   );
}

export default GMap;
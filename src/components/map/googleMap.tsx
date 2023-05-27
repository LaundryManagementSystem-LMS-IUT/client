import { useEffect, useMemo, useState } from "react";
// import PlacesAutocomplete from "./placesAutocomplete";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { Button, Card, Form} from "react-bootstrap";

type MapLocation={
  location:{lat:number,lng:number},
  setLocation:React.Dispatch<React.SetStateAction<{
    lat: number;
    lng: number;
}>>
}

const GMap = ({location,setLocation}:MapLocation)=>{
  const [markerPosition, setMarkerPosition] = useState({lat:23.8103,lng:90.4125});
  const [error,setError]=useState("");
  const [isValid,setIsValid]=useState(false);

  useEffect(()=>{
    setMarkerPosition(location);
  },[location])

  const handleMapClick = (e:google.maps.MapMouseEvent) => {
    setIsValid(true);
    setMarkerPosition({
      lat: e?.latLng?.lat() || 0,
      lng: e?.latLng?.lng() || 0,
    });
    setLocation({
      lat: e?.latLng?.lat() || 0,
      lng: e?.latLng?.lng() || 0,
    });
  };

  const handleMarkerDragEnd = (event:google.maps.MapMouseEvent) => {
    setIsValid(true);
    setMarkerPosition({
      lat: event?.latLng?.lat() || 0,
      lng: event?.latLng?.lng() || 0,
    });
    setLocation({
      lat: event?.latLng?.lat() || 0,
      lng: event?.latLng?.lng() || 0,
    });
  };

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
      console.log('cant get location in legacy browser');
    }
  };


  return ( 
      <Card style={{border:'none'}}>
        <Card.Body style={{width:'100%',height:'100%'}}>
      <div className="errorMessage" style={{color:"red"}}>{error}</div>
        <GoogleMap zoom={14} center={markerPosition} mapContainerStyle={{width: '100%',height:'338px'}} onClick={handleMapClick}>
        <MarkerF
          position={markerPosition}
          draggable={true}
          onDragEnd={handleMarkerDragEnd}
          visible={true}
        />
        </GoogleMap>
        </Card.Body>
        <Card.Footer style={{display:'flex'}}>
        <button onClick={getUserLocation}>Get Current Location</button>
        </Card.Footer>
      </Card>
   );
}

export default GMap;
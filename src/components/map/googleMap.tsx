import { useEffect, useState } from "react";
import { GoogleMap, MarkerF } from "@react-google-maps/api";
import {Card} from "react-bootstrap";

type MapLocation={
  location:{lat:number,lng:number},
  setLocation:React.Dispatch<React.SetStateAction<{
    lat: number;
    lng: number;
}>>,
  setAddress:React.Dispatch<React.SetStateAction<string>>
}

const GMap = ({location,setLocation,setAddress}:MapLocation)=>{
  const [markerPosition, setMarkerPosition] = useState({lat:23.8103,lng:90.4125});

  useEffect(()=>{
    setMarkerPosition(location);
  },[location])

  const getPlaceDetails = async (lat:number, lng:number) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GMPKEY}`
    );
    const data = await response.json();
    if (data.status === "OK") {
      setAddress(data.results[0].formatted_address);
    } else {
      console.log("Geocode was not successful for the following reason:", data.status);
      setAddress("");
    }
  };

  const handleMapClick = async(e:google.maps.MapMouseEvent) => {
    setMarkerPosition({
      lat: e?.latLng?.lat() || 0,
      lng: e?.latLng?.lng() || 0,
    });
    setLocation({
      lat: e?.latLng?.lat() || 0,
      lng: e?.latLng?.lng() || 0,
    });
    await getPlaceDetails(e?.latLng?.lat() || 0,e?.latLng?.lng() || 0);
  };

  const handleMarkerDragEnd = async(event:google.maps.MapMouseEvent) => {
    setMarkerPosition({
      lat: event?.latLng?.lat() || 0,
      lng: event?.latLng?.lng() || 0,
    });
    setLocation({
      lat: event?.latLng?.lat() || 0,
      lng: event?.latLng?.lng() || 0,
    });
    await getPlaceDetails(event?.latLng?.lat() || 0,event?.latLng?.lng() || 0);
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
        <GoogleMap zoom={14} center={markerPosition} mapContainerStyle={{width: '100%',height:'486px'}} onClick={handleMapClick}>
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
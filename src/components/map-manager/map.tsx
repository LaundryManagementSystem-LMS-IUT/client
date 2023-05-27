import { useLoadScript,LoadScriptProps  } from "@react-google-maps/api";
import Loader from "../partials/loader";
import GMap from "./googleMap";

type Libraries = LoadScriptProps['libraries'];
const libraries: Libraries = ['places'];
type MapLocation={
  location:{lat:number,lng:number},
  setLocation:React.Dispatch<React.SetStateAction<{
    lat: number;
    lng: number;
}>>,
  setAddress:React.Dispatch<React.SetStateAction<string>>
}

const Map = ({location,setLocation,setAddress}:MapLocation) => {
  const { isLoaded }: { isLoaded: boolean } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMPKEY || '', 
    libraries,
  });
  if (!isLoaded) {
    return (<Loader/>)
  } 
  else{
    return (<GMap location={location} setLocation={setLocation} setAddress={setAddress}/>)
  }
}

 
export default Map;
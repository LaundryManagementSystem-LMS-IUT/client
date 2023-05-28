import { useLoadScript,LoadScriptProps  } from "@react-google-maps/api";
import Loader from "../../../partials/loader";
import GMap from "./googleMap";

type Libraries = LoadScriptProps['libraries'];
const libraries: Libraries = ['places'];

const Map = () => {
  const { isLoaded }: { isLoaded: boolean } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GMPKEY || '', 
    libraries,
  });
  if (!isLoaded) {
    return (<Loader/>)
  } 
  else{
    return (<GMap/>)
  }
}

 
export default Map;
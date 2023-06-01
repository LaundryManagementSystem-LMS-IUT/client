import { useEffect, useState } from "react";
import NavbarCustomer from "../../partials/navbarCustomer";
import HeaderCustomer from "../../partials/headerCustomer";
import { IonIcon } from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";
import LaundryArray from "./view-laundry-array";
import { ActivePageType } from "../../../utils/activePageTypes";
import axios from "axios";

const Laundry = () => {
  const [navigation, setNavigation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [laundries,setLaundry] = useState<{
    laundry_id:string,
    laundry_name:string,
    address:string,
    profile_picture:string
  }[]>([]);

  const retrieveLaundries=async()=>{
    const result=await axios.get('http://localhost:8000/api/laundry').then((result)=>{
      setLaundry(result.data?.laundry);
       return result.data?.laundry;
    }).catch((error)=>{
      setLaundry([]);
      console.log(error);
    });
    setFilteredSearchItems(result);
  }

  useEffect(()=>{
    retrieveLaundries();
  },[])

  const [filteredSearchItems, setFilteredSearchItems] = useState<{
    laundry_id:string,
    laundry_name:string,
    address:string,
    profile_picture:string
  }[]>([]);

  useEffect(() => {
    setFilteredSearchItems(
      laundries.filter(
        (item) =>
          item.laundry_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.address.toLocaleLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div className="laundry">
      <NavbarCustomer
        navigation={navigation}
        setNavigation={setNavigation}
        activePage={ActivePageType.Laundry}
      />
      <div className="container">
        <div className="main">
          <HeaderCustomer
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <div
            className="d-flex mx-auto inputbox profile"
            style={{ fontSize: "1.2rem" }}
          >
            <IonIcon
              icon={searchCircleOutline}
              style={{ fontSize: "2.0rem" }}
            ></IonIcon>
            <input
              type="text"
              className=" me-2"
              placeholder="Search for a laundry..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
              }}
            />
          </div>
          <LaundryArray array={filteredSearchItems} searchQuery={searchQuery} />
        </div>
      </div>
    </div>
  );
};

export default Laundry;

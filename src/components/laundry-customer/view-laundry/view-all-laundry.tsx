import { useEffect, useState } from "react";
import NavbarCustomer from "../../partials/navbarCustomer";
import HeaderCustomer from "../../partials/headerCustomer";
import { IonIcon } from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";
import LaundryArray from "./view-laundry-array";

const Laundry = () => {
  const [navigation, setNavigation] = useState(false);
  const [searchTerm,setSearchTerm]=useState("");
  const [laundries]=useState([
    {
      id:"123",
      name:"Azwad's Laundry",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 2",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 3",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 4",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 5",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 6",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 7",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 8",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 9",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 10",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 11",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 12",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 13",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 14",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 15",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 16",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 17",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 18",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },
    {
      id:"123",
      name:"Azwad's Laundry 19",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    },{
      id:"123",
      name:"Azwad's Laundry 20",
      location:"Mohammadpur",
      imageURL:'/landing-background.jpg'
    }
  ]);

  const [filteredSearchItems,setFilteredSearchItems] =useState(laundries);

  useEffect(()=>{
    setFilteredSearchItems(laundries.filter((item)=>item.name.toLowerCase().includes(searchTerm.toLowerCase())));
  },[searchTerm])



  return (
    <div className="laundry">
      <NavbarCustomer navigation={navigation} setNavigation={setNavigation} />
      <div className="container">
        <div className="main">
          <HeaderCustomer
            username={"Mirza Azwad"}
            navigation={navigation}
            setNavigation={setNavigation}
          />
          <div className="d-flex mx-auto inputbox profile" style={{fontSize:'1.2rem'}}>
          <IonIcon icon={searchCircleOutline}></IonIcon>
          <input
                  type="search"
                  className=" me-2"
                  aria-label="Search"
                  placeholder="Search for a laundry..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
          </div>
          <LaundryArray array={filteredSearchItems}/>
        </div>
      </div>
    </div>
  );
};

export default Laundry;

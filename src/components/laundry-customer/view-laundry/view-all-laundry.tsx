import { useEffect, useState } from "react";
import NavbarCustomer from "../../partials/navbarCustomer";
import HeaderCustomer from "../../partials/headerCustomer";
import { IonIcon } from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";
import LaundryArray from "./view-laundry-array";
import { ActivePageType } from "../../../utils/activePageTypes";

const Laundry = () => {
  const [navigation, setNavigation] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [laundries] = useState([
    {
      id: "123",
      name: "Azwad's Laundry",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1234",
      name: "Azwad's Laundry 2",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1235",
      name: "Azwad's Laundry 3",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1236",
      name: "Azwad's Laundry 4",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1237",
      name: "Azwad's Laundry 5",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1238",
      name: "Azwad's Laundry 6",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1239",
      name: "Azwad's Laundry 7",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1231",
      name: "Azwad's Laundry 8",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1232",
      name: "Azwad's Laundry 9",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "1233",
      name: "Azwad's Laundry 10",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12312",
      name: "Azwad's Laundry 11",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12311",
      name: "Azwad's Laundry 12",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12314",
      name: "Azwad's Laundry 13",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12315",
      name: "Azwad's Laundry 14",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12316",
      name: "Azwad's Laundry 15",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "123117",
      name: "Azwad's Laundry 16",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12318",
      name: "Azwad's Laundry 17",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12319",
      name: "Azwad's Laundry 18",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12320",
      name: "Azwad's Laundry 19",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
    {
      id: "12321",
      name: "Azwad's Laundry 20",
      location: "Mohammadpur",
      imageURL: "/landing-background.jpg",
    },
  ]);

  const [filteredSearchItems, setFilteredSearchItems] = useState(laundries);

  useEffect(() => {
    setFilteredSearchItems(
      laundries.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.location.toLocaleLowerCase().includes(searchQuery.toLowerCase())
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

import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  logOutOutline,
  notificationsCircleOutline,
  peopleOutline,
  settingsOutline,
  shirtOutline,
  starHalfOutline,
} from "ionicons/icons";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ActivePageType } from "../../utils/activePageTypes";

type Navbar = {
  navigation: boolean;
  setNavigation: React.Dispatch<React.SetStateAction<boolean>>;
  activePage: ActivePageType
};

const NavbarCustomer = ({ navigation, setNavigation, activePage }: Navbar) => {
  const navigate = useNavigate();
  useEffect(() => {
    const toggler = () => {
      let navigation = document.querySelector(".navigation");
      let main = document.querySelector(".main");
      navigation?.classList.toggle("active");
      main?.classList.toggle("active");
    };
    toggler();
  }, [navigation, setNavigation]);

  return (
    <div className="navigation">
      <ul>
        <li>
          <a onClick={() => navigate("/customer/dashboard")}>
            <span className="icon">
              <img src="/logo.png" />
            </span>
            <span className="title">
              <h2>Washify</h2>
            </span>
          </a>
        </li>

        <li className={activePage === ActivePageType.Dashboard ? "active" : ""}>
          <a onClick={() => navigate("/customer/dashboard")}>
            <span className="icon">
              <IonIcon icon={homeOutline}></IonIcon>
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li>
          <a onClick={() => navigate("/customer/laundries")}>
            <span className="icon">
              <IonIcon icon={shirtOutline}></IonIcon>
            </span>
            <span className="title">Laundries</span>
          </a>
        </li>

        <li className={activePage === ActivePageType.OrderHistory ? "active" : ""}>
          <a onClick={() => navigate("/customer/history")}>
            <span className="icon">
              <IonIcon icon={peopleOutline}></IonIcon>
            </span>
            <span className="title">Order History</span>
          </a>
        </li>

        <li className={activePage === ActivePageType.AccountSettings ? "active" : ""}>
          <a>
            <span className="icon">
              <IonIcon icon={settingsOutline}></IonIcon>
            </span>
            <span className="title">Account Settings</span>
          </a>
        </li>

        <li>
          <a>
            <span className="icon">
              <IonIcon icon={logOutOutline}></IonIcon>
            </span>
            <span className="title">Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavbarCustomer;

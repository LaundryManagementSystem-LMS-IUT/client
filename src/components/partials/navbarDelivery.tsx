import { IonIcon } from "@ionic/react";
import {
  bicycleOutline,
  checkboxOutline,
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

const NavbarDelivery = ({ navigation, setNavigation, activePage }: Navbar) => {
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
          <a onClick={() => navigate("/delivery/dashboard")}>
            <span className="icon">
              <IonIcon icon={homeOutline}></IonIcon>
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>

        <li className={activePage === ActivePageType.OngoingDelivery ? "active" : ""}>
          <a onClick={() => navigate("/delivery/ongoing")}>
            <span className="icon">
              <IonIcon icon={bicycleOutline}></IonIcon>
            </span>
            <span className="title">Ongoing Deliveries</span>
          </a>
        </li>

        <li className={activePage === ActivePageType.ConfirmDelivery ? "active" : ""}>
          <a onClick={() => navigate("/delivery/history")}>
            <span className="icon">
              <IonIcon icon={checkboxOutline}></IonIcon>
            </span>
            <span className="title">Delivery History</span>
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

export default NavbarDelivery;

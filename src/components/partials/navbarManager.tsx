import { IonIcon } from "@ionic/react";
import {
  homeOutline,
  logOutOutline,
  peopleOutline,
  settingsOutline,
  starHalfOutline,
  cashOutline,
  chatbubbleEllipsesOutline
} from "ionicons/icons";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ActivePageType } from "../../utils/activePageTypes";

type Navbar = {
  navigation: boolean;
  setNavigation: React.Dispatch<React.SetStateAction<boolean>>;
  activePage: ActivePageType;
};

const NavbarManager = ({ navigation, setNavigation, activePage }: Navbar) => {
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
          <a onClick={() => navigate("/manager/dashboard")}>
            <span className="icon">
              <img src="/hanging-dry.png" />
            </span>
            <span className="title">
              <h2>Washify</h2>
            </span>
          </a>
        </li>

        <li className={activePage === ActivePageType.Dashboard ? "active" : ""}>
          <a onClick={() => navigate("/manager/dashboard")}>
            <span className="icon">
              <IonIcon icon={homeOutline}></IonIcon>
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>

        <li
          className={activePage === ActivePageType.OrderHistory ? "active" : ""}
        >
          <a onClick={() => navigate("/manager/history")}>
            <span className="icon">
              <IonIcon icon={peopleOutline}></IonIcon>
            </span>
            <span className="title">Order Details</span>
          </a>
        </li>

        <li
          className={activePage === ActivePageType.ReviewOrder ? "active" : ""}
        >
          <a onClick={() => navigate("/manager/review")}>
            <span className="icon">
              <IonIcon icon={starHalfOutline}></IonIcon>
            </span>
            <span className="title">View Reviews</span>
          </a>
        </li>

        <li
          className={activePage === ActivePageType.SetPricing ? "active" : ""}
        >
          <a onClick={() => navigate("/manager/fee")}>
            <span className="icon">
              <IonIcon icon={cashOutline}></IonIcon>
            </span>
            <span className="title">Set Pricing</span>
          </a>
        </li>

        <li
          className={
            activePage === ActivePageType.AccountSettings ? "active" : ""
          }
        >
          <a onClick={() => navigate("/manager/account-settings")}>
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

export default NavbarManager;

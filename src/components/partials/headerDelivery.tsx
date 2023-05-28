import { IonIcon } from "@ionic/react";
import { menuOutline, notificationsOutline } from "ionicons/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

type Delivery = {
  navigation: boolean;
  setNavigation: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderDelivery = ({ navigation, setNavigation }: Delivery) => {
  const [notification, setNotification] = useState(false);
  const toggleNotification = () => {
    let box = document.getElementById("box");
    if (box && notification) {
      box.style.height = "0px";
      box.style.opacity = "0";
      box.style.zIndex = "-999";
      setNotification(false);
    } else if (box && !notification) {
      box.style.height = "max-content";
      box.style.zIndex = "99";
      box.style.opacity = "1";
      setNotification(true);
    }
  };

  return (
    <div className="topbar">
      <div className="toggle">
        <IonIcon
          icon={menuOutline}
          onClick={() => setNavigation(!navigation)}
        ></IonIcon>
      </div>

      <div className="dropdowns">
        <div className="notif_icon" onClick={toggleNotification}>
          <div className="icon-container">
            <IonIcon icon={notificationsOutline}></IonIcon>
            <span>17</span>
          </div>
        </div>
        <div className="notifi-box" id="box">
          <h2>
            Notifications <span>17</span>
          </h2>

          <div className="notifi-item">
            <div className="text">
              <h4>Elias Abdurrahman</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <div className="text">
              <h4>John Doe</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <div className="text">
              <h4>Emad Ali</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <div className="text">
              <h4>Ekram Abu</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <div className="text">
              <h4>Jane Doe LAST</h4>
              <p>@lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="notifi-item">
            <div className="text notif_see_more">
              <p>
                <Link to="/manager/notifications">
                  <span>Show all notifications</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDelivery;

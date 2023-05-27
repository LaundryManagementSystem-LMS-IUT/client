import { IonIcon } from "@ionic/react";
import { menuOutline, notificationsOutline } from "ionicons/icons";
import NavbarManager from "./navbarManager";
import { useState } from "react";

type LaundryManager={
  navigation:boolean,
  setNavigation:React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderManager = ({navigation,setNavigation}:LaundryManager) => {
  const [notification,setNotification]=useState(false);
  const toggleNotification=()=>{
    let box = document.getElementById("box");
    if (box && notification) {
      box.style.height = "0px";
      box.style.opacity = "0";
      box.style.zIndex = "-999";
      setNotification(false);
    } else if(box && !notification) {
      box.style.height = "max-content";
      box.style.zIndex = "99";
      box.style.opacity = "1";
      setNotification(true);
    }
  }
  return ( 
<div className="topbar">
  <div className="toggle">
    <IonIcon icon={menuOutline} onClick={()=>setNavigation(!navigation)}></IonIcon>
  </div>

  <div className="dropdowns">
    <div className="notif_icon" onClick={toggleNotification}>
      <div className="icon-container">
        <IonIcon icon={notificationsOutline}></IonIcon>
        <span>17</span>
      </div>
    </div>
    <div className="notifi-box" id="box">
      <h2>Notifications <span>17</span></h2>
      <div className="notifi-item">
        <div className="text">
          <span>Elias Abdurrahman</span>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="notifi-item">
        <div className="text">
          <span>John Doe</span>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="notifi-item">
        <div className="text">
          <span>Emad Ali</span>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="notifi-item">
        <div className="text">
          <span>Ekram Abu</span>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="notifi-item">
        <div className="text">
          <span>Jane Doe LAST</span>
          <p>@lorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="notifi-item">
        <div className="text notif_see_more">
          <p>
            <a href="">
              <span>Show all notifications</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}
 
export default HeaderManager;
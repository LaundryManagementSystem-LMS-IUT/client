import { IonIcon } from "@ionic/react";
import { menuOutline, notificationsOutline } from "ionicons/icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

type LaundryManager = {
  navigation: boolean;
  setNavigation: React.Dispatch<React.SetStateAction<boolean>>;
};

interface Notification {
  notification_id: number;
  message: string;
  formattedTime: string;
  read: boolean;
}

const HeaderManager = ({ navigation, setNavigation }: LaundryManager) => {
  const [notification, setNotification] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
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

  const countUnreadNotifications = (notifications: Notification[]) => {
    const unreadCount = notifications.reduce((count, notification) => {
      if (!notification.read) {
        return count + 1;
      }
      return count;
    }, 0);
    return unreadCount;
  };

  useEffect(() => {
    const getTopNotifications = async () => {
      await axios.get("http://localhost:8000/api/notifications/latest/nafisamaliyat@iut-dhaka.edu")
        .then((res) => {
          setNotifications(res.data);
          const count = countUnreadNotifications(res.data);
          setUnreadCount(count);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getTopNotifications();
  }, []);

  const updateNotifications = async (currentNotifications: Notification[]) => {

      await axios.post("http://localhost:8000/api/notifications/updateStatus",
       { notifications: currentNotifications 
      }).then((res) =>{
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  };

  const handleToggleNotification = async () => {
    toggleNotification();
    if (notifications !== null && notification && unreadCount!==0) {
      // setTimeout(() => { setUnreadCount(0) }, 20);
      setUnreadCount(0);
      await updateNotifications(notifications);
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
        <div className="notif_icon" onClick={handleToggleNotification}>
          <div className="icon-container">
            <IonIcon icon={notificationsOutline}></IonIcon>
            {unreadCount !== 0 && <span>{unreadCount}</span>}
          </div>
        </div>
        <div className="notifi-box" id="box">
          <h2>
            Notifications {unreadCount !== 0 && <span>{unreadCount}</span>}
          </h2>

          {notifications.map((notification) => (
            <div className="notifi-item" key={notification.notification_id}>
              <div className="text">
                <h4>{notification.message}</h4>
                <p>{notification.formattedTime}</p>
              </div>
            </div>
          ))}

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

export default HeaderManager;

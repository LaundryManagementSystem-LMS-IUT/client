import { IonIcon } from "@ionic/react";
import NavbarLanding from "../partials/navbarLanding";
import { arrowForwardCircleOutline, arrowForwardOutline } from "ionicons/icons";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <NavbarLanding />
      <div className="landing-container">
        <div className="landing-card">
          <div className="landing-content">
            <span className="heading">Digitilized</span>
            <h1>Laundry Management System</h1>
            <p>
              Our project aims to digitalize the process of a laundry management
              system. This will make keeping track of orders and financial
              transactions easy, as well as promote effective communication
              between the customers and laundry employees.
            </p>
          </div>
          <div className="get-started">
            <button
              className="landing-button"
              onClick={() => navigate("/login")}
            >
              <span>Get Started</span>
              <IonIcon
                icon={arrowForwardOutline}
                className="get-started-icon"
              ></IonIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

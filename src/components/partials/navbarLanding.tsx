import { useNavigate } from "react-router-dom";

const NavbarLanding = () => {
  const navigate=useNavigate();
  return ( 
  <div className="topbar-landing">
      <img src="/logo.png" className="landing-image"/>
              <h2 className="landing-information">Washify</h2>
  </div> 
  );
}
 
export default NavbarLanding;
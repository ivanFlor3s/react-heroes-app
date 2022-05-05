import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";

import "./NavbarScreen.style.css";

export const NavbarScreen = () => {
  
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  console.log(user)
  const handleLogout = ()=>{

    navigate('/login',{
      replace: true
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link
            
            className="nav-item nav-link"
            
            to="/"
          >
            Asociaciones
          </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            
            className={({isActive})=> `nav-item nav-link ${isActive && 'active'}`}
            
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            
            className={({isActive})=> `nav-item nav-link ${isActive && 'active'}`}
            
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            
            className={({isActive})=> `nav-item nav-link ${isActive && 'active'}`}
            
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" style={{justifyContent:'end', marginRight:'20px'}}>
        <ul className="navbar-nav ml-auto">
          <span className="text-info" style={{margin:'auto 20px'}}>
            {user.name}
          </span>
          <button
            onClick={handleLogout}
            className="nav-item nav-link btn btn-secondary"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

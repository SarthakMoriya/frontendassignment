import React, { useEffect, useState } from "react";
import searchIcon from "../../assets/searchIcon.png";
import { Link } from "react-router-dom";

import {settings,profile ,logout,gallery} from "../../assets/icons/index"

import "./Navbar.css";


const Navbar = () => {
  const [hover, setHover] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  var user = localStorage.getItem("user");

  const handleLogout=()=>{
    user=null
    localStorage.removeItem("user")
    window.location.reload(false)
  }

  useEffect(()=>{
    if(isLoggedIn){
      user = localStorage.getItem("user");
    }else{
      user=null
    }
  },[])
  // user=0
  return (
    <nav className="navbar1">
      <div className="navbar__logo">
        <Link to="/">ImageSpace</Link>
      </div>
      <div className="navbar__searchbar">
        <input type="text" />
        <img src={searchIcon} alt="searchIcon" width="18" />
      </div>
      <div className="navbar__auth-links">
        {user  ? (
          <div className="user-hover" onMouseLeave={()=>setHover(false)}>
            <h1 className="user-logo" onMouseEnter={()=>{setHover(true)}}>{user}</h1>
            {hover &&
            <ul className="user-hover-list" >
              <li>
                <img src={profile} alt='icon' width='18'/>
                <p>My Account</p>
              </li>
              <li>
                <img src={settings} alt='icon' width='18'/>
                <p>Settings</p>
              </li>
              <li>
                <img src={gallery} alt='icon' width='18'/>
                <p>My Photos</p>
              </li>
              <li>
                <img src={logout} alt='icon' width='18'/>
                <p onClick={handleLogout}>Logout</p>
              </li>
            </ul>
            }
          </div>
        ) : (
          <div className="navbar__auth-links">
            <div className="navbar-links">
              <Link to="/login" onClick={()=>{setIsLoggedIn(true)}}>Login</Link>
            </div>
            <div className="navbar-links">
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        )}
      </div>
      {/* <UserHover /> */}
    </nav>
  );
};

export default Navbar;

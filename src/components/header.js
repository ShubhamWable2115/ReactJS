import { LOGO_URL } from "../utils/constants";
import { useState } from "react";



const Header =()=>{


  const [isLoggedIn, setisLoggedIn] = useState("Login");

   return(
   <div className="header">
    <div className="logocontainer">
    <img  className="headerlogo" src={LOGO_URL} alt="food logo"/>  
      </div>
      <div className="nav-items">
        <ul >
            <li>About us</li>
           <li>Contact us</li>
            <li>Help</li>
            <li>Cart</li>
            <button className="login_btn"
            onClick = {() => 
            setisLoggedIn(!isLoggedIn)}>
              {isLoggedIn? "Logout":"Login"}</button>

        </ul>
      </div>
   </div>
   )
}



export default Header;
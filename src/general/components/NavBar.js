import React from "react";
import {Link, useLocation} from "react-router-dom";
import hcLogo from "../img/logo-hc.png";
import logo from "../img/logo-type.png";
import "./NavBar.scss";

const NavBar = () => {
  const location = useLocation();
  const pathNameArray = location.pathname.split("/");
  const menuName = pathNameArray[pathNameArray.length - 1];

  return (
    <div className={"nav-bar"}>
      <div className="boundary">
        <Link to={"/"}>
        <img className="logo" src={logo} alt=""/></Link>
        <div className={`menu-container ${menuName ? menuName : 'home'}`}>
          <Link className="menu home" to={"/"}>홈</Link>
          <div className="divider"/>
          <div className="product-menus">
            <span className="menu label">제품 소개</span>
            <div className="menu-wrapper">
              <Link className="menu mobile" to={"/product/mobile"}>환자 • 보호자용</Link>
              <Link className="menu desktop" to={"/product/desktop"}>의료진용</Link>
            </div>
          </div>
          <div className="divider"/>
          <Link className="menu contact" to={"/contact"}>문의</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;

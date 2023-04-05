import React from "react";
import { HeaderWrapper } from "./styles";
import { headerData } from "./mock";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/logo.png";
function Header() {
  return (
    <HeaderWrapper className="w-[100%]">
      <div className="bg-[#003b32] ">
        <div className="headerBox">
          <div className="logo">
            <Link to="/">
              <img src={headerLogo} alt="" className="headerLogo" />
            </Link>
          </div>
          <div className="navMenu">
            {headerData.map((item, index) => (
              <div key={index} className="navItem">
                <p>
                  <Link to={item?.path} className="navLink">
                    {item?.linkTitle}
                  </Link>
                </p>
              </div>
            ))}

            <button className="navMenuBtn">
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;

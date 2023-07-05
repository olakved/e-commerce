import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../../assets/menuIcon.png";

function Header() {
  const links = [
    { name: "HOME", link: "/index" },
    // { name: "PRODUCT", link: "/product" },
    // { name: "BLOG", link: "/blog" },
    { name: "CONTACT", link: "/contact" },
    { name: "ABOUT", link: "/about" },
  ];

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="shadow-md  w-full sticky z-50  top-0 left-0">
      <div className="flex justify-between items-center bg-white py-4 md:px-10 px-7 md:flex-col">
        <Link to="/index">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-dark-green">
            <span className="mr-3 ml-8">
              <img src={logo} alt="logo" className="rounded-full w-10 h-10" />
            </span>
            <span>GeeStore</span>
          </div>
        </Link>

        <div className={`${!open ? "md:hidden" : ""}`}>
          <ul
            className="flex gap-5 md:items-center md:flex-col md:pb-0 md:mt-5 md:static bg-white  md:w-auto  transition-all duration-500 ease-in ${
            "
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="md:ml-8 text-l hover:text-gray-400 duration-500 md:my-0 my-2"
              >
                <Link
                  to={link.link}
                  onClick={() => {
                    navigate() ? false : setOpen(!open);
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* <Link to="/login">
              <button className="bg-dark-green text-xl text-white py-[3px] px-6 rounded-md ml-6 hover:bg-light-green duration-500">
                Login
              </button>
            </Link> */}
          </ul>
        </div>
        <div
          className="absolute right-8 top-8 cursor-pointer invisible md:visible "
          onClick={() => setOpen(!open)}
        >
          <img src={menuIcon} alt="" className="w-5" />
        </div>
        {/* <label
          for="check"
          className="bg-gray-100 w-20 h-10 relative rounded-full md:hidden"
        >
          <input type="checkbox" id="check" className="sr-only peer" />
          <span className="w-2/5 h-4/5 bg-light-green absolute rounded-full left-1 top-1 peer-checked:bg-dark-green peer-checked:left-11 transition-all duration-500"></span>
        </label> */}
      </div>
    </div>
  );
}

export default Header;

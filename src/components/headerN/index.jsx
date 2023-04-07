import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function HeaderN() {
  const links = [
    { name: "HOME", link: "/" },
    { name: "PRODUCT", link: "/product" },
    { name: "BLOG", link: "/blog" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="flex justify-between items-center bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-dark-green">
          <span className="mr-1 pt-2">
            <img src={logo} alt="logo" className="rounded-full w-10 h-10" />
          </span>
          <span>Cocsho</span>
        </div>
        <ul className="flex gap-5 md:items-center">
          {links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl hover:text-gray-400 duration-500"
            >
              <Link to={link.link}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeaderN;

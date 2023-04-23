import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-20 py-2 mt-10 ">
      <div className="border-t-2 p-5 flex justify-center items-center">
        <div className="text-sm">
          <span>
            Copyright &#x00A9; 2023 All rights reserved | This template is made
            by {""}
          </span>
          <Link to="https://github.com/olakved" target="blank">
            <span className="text-dark-green font-semibold">Okutubo Lekan</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import wifiIcon from "../../../assets/wifi.png";
import visaImg from "../../../assets/visa.png";

function AtmCard() {
  return (
    <div className="bg-lime-100 p-5 rounded-md">
      <div className="flex justify-between mb-5 items-center">
        <h1 className="text-sm">Jerry Walker</h1>
        <img src={wifiIcon} alt="" className=" w-[25px] h-[25px]" />
      </div>
      <p>1200 0145 4215 0878</p>
      <div className="flex justify-between items-center mt-5">
        <p>
          <span className="text-[15px] text-gray-700 mr-1">Exp</span>
          <span className="text-[20px] text-bold">08/23</span>
        </p>
        <img src={visaImg} alt="" className=" w-[50%] h-[90%]" />
      </div>
    </div>
  );
}

export default AtmCard;

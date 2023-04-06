import React from "react";
import visaImg from "../../../assets/visaWhite.png";
import profileImg from "../../../assets/profileImg.jpg";

function SendMoney() {
  return (
    <div className="w-72 sm:w-full">
      <div className="bg-dark-green rounded-md p-5 mb-5 mt-2 flex justify-between items-center">
        <img src={visaImg} alt="" className="w-[40px]" />
        <div className="text-white text-sm flex gap-x-3">
          <p>$10.680</p>
          <p>+</p>
        </div>
      </div>
      <div className="bg-green-200 rounded-md p-5 mb-5 mt-5 ">
        <div className=" text-sm flex gap-x-3">
          <div className="bg-dark-green p-1 rounded-[25px] flex gap-x-2 mb-5">
            <img
              src={profileImg}
              alt=""
              className="rounded-full h-[20px] w-[20px]"
            />
            <p className="text-[8px] text-white">Enter the amount</p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>$800.00</p>
          <img
            src={profileImg}
            alt=""
            className="rounded-full h-[20px] w-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default SendMoney;

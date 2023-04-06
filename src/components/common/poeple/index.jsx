import React from "react";
import profileImg from "../../../assets/profileImg.jpg";

function CardPeople() {
  return (
    <div className="bg-lime-200 p-7 rounded-md">
      <div className="flex justify-between">
        <p className="text-sm">
          Add More <br /> friens to Oreum <br />
          to transfer money
        </p>
        <p className="rounded-full w-[40px] h-[40px] flex justify-center items-center bg-dark-green text-white ">
          +
        </p>
      </div>
      <div className="flex gap-x-4 mt-5 ">
        <img
          src={profileImg}
          alt=""
          className=" rounded-full w-[35px] h-[35px]"
        />
        <img
          src={profileImg}
          alt=""
          className=" rounded-full w-[35px] h-[35px]"
        />
        <img
          src={profileImg}
          alt=""
          className=" rounded-full w-[35px] h-[35px]"
        />
        <img
          src={profileImg}
          alt=""
          className=" rounded-full w-[35px] h-[35px]"
        />
      </div>
    </div>
  );
}

export default CardPeople;

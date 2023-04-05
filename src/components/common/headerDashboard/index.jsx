import React from "react";
import searchImg from "../../../assets/Search.png";
import settingImg from "../../../assets/Setting.png";
import userImg from "../../../assets/User.png";

function HeaderDashboard() {
  return (
    <div className="flex justify-between  p-3  mb-[20px]">
      <h1 className="">Welcome...</h1>
      <div className="flex gap-x-4 ">
        {/* Search Bar */}
        <div class="relative  text-gray-600 focus-within:text-gray-400">
          <span class="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={searchImg} alt="" />
          </span>
          <input
            type="search"
            class="py-2.5 px-5 text-sm  rounded-md pl-10 focus:outline-none border-solid border-2 border-black focus:text-gray-900"
            placeholder="Search"
            autocomplete="off"
          />
        </div>
        {/* Search Bar end */}
        <div className="w-[45px] rounded-md bg-gray-900 justify-center flex items-center">
          <img src={settingImg} alt="" />
        </div>
        <div className="w-[45px] rounded-md bg-gray-100 justify-center flex items-center">
          <img src={userImg} alt="" />
        </div>
      </div>
      {/* Static Header End */}
    </div>
  );
}

export default HeaderDashboard;

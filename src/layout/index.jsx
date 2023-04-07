import React, { useState } from "react";
import logoImg from "../assets/logo.png";
import chartFill from "../assets/Chart_fill.png";
import chatImg from "../assets/Chat.png";
import userImg from "../assets/User.png";
import calendarImg from "../assets/Calendar.png";
import searchImg from "../assets/Search.png";
import chartImg from "../assets/Chart.png";
import folderImg from "../assets/Folder.png";
import settingImg from "../assets/Setting.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import logoutImg from "../assets/logout.png";

const Menus = [
  { title: "Dashboard", img: chartFill, path: "dashboard" },
  { title: "Users", img: chatImg, path: "users" },
  { title: "Accounts", img: userImg, path: "accounts", gap: true },
  { title: "Schedule ", img: calendarImg, path: "schedule" },
  { title: "Search", img: searchImg, path: "search" },
  { title: "Analytics", img: chartImg, path: "analytics" },
  { title: "Files ", img: folderImg, path: "files", gap: true },
  { title: "Setting", img: settingImg, path: "settings" },
];

function AppLayout() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden overscroll-none ">
      <div className="">
        <div
          className={`${
            open ? "w-[350px]" : "w-20"
          } duration-300 h-screen relative p-5 pt-8 bg-dark-green `}
        >
          <p
            className="absolute cursor-pointer rounded-full -right-3 top-9 w-7 h-7 text-center border-2 border-dark-green bg-white"
            onClick={() => setOpen(!open)}
          >
            +
          </p>
          <div className="flex gap-x-4 items-center">
            <img
              src={logoImg}
              alt=""
              className={`cursor-pointer duration-500 w-[35px] h-[35px] rounded-full ${
                open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              CocSho
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-green rounded-md sm:mt-3 ${
                  menu?.gap ? "mt-9" : "mt-2"
                }`}
                onClick={() => navigate(`${menu?.path}`)}
              >
                <img src={menu?.img} alt="" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu?.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* <div className="flex justify-center sm:justify-start gap-x-3 text-white m-5 hover:bg-light-green rounded-md p-2">
          <img src={logoutImg} alt="" className="w-[25px]" />
          <p className="" onClick={() => navigate("logout")}>
            Logout
          </p>
        </div> */}
      </div>
      <div className="p-7 pl-8 text-2xl font-semibold flex-1 h-screen overflow-y-auto sm:p-2">
        <div className={`${open && "sm:hidden"} `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;

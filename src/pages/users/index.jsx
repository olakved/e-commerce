import { useQuery } from "@tanstack/react-query";
import React from "react";
import axios from "axios";

const TitleHead = ["ID", "Username", "Name", "Email", "Gender", "Age"];

function UsersPage() {
  const { isLoading, error, data } = useQuery(["users"], () =>
    axios.get("https://dummyjson.com/users").then((res) => res.data)
  );
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Error while petching data</p>
      ) : data ? (
        <div className="">
          <div className="flex bg-light-green gap-x-4 p-3">
            {TitleHead.map((title, index) => (
              <p key={index} className="w-full text-center text-white">
                {title}
              </p>
            ))}
          </div>
          <div className=" gap-x-4 p-3">
            {data.users.map((item, index) => (
              <div className="flex odd:bg-gray-100">
                <p key={index} className="w-full text-center text-[15px]">
                  {item.id}
                </p>
                <p key={index} className="w-full text-center text-[15px]">
                  {item.username}
                </p>
                <p key={index} className="w-full text-center text-[15px]">
                  {item.firstName} - {item.lastName}
                </p>
                <p key={index} className="w-full text-center text-[15px] ">
                  {item.email}
                </p>
                <p key={index} className="w-full text-center text-[15px] ">
                  {item.gender}
                </p>
                <p key={index} className="w-full text-center text-[15px] ">
                  {item.age}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default UsersPage;

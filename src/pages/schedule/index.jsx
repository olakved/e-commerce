import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

function Schedule() {
  const { isLoading, error, data } = useQuery(["users"], () =>
    axios.get("http://localhost:3001/users").then((res) => res.data)
  );
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error Fetching data</p>
      ) : data ? (
        <div className="p-10">
          <div className="w-[450px]">
            <form action="">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className=" p-2 rounded-lg outline-none border-2"
                />
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  className=" p-2 rounded-lg outline-none border-2 mt-3"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  className=" p-2 rounded-lg outline-none border-2 mt-3"
                />
              </div>
              <button className=" mt-4 py-2 px-4 bg-light-green text-white text-lg rounded-lg">
                Save
              </button>
            </form>
          </div>
          <div>
            {data?.map((people, index) => (
              <div className="mt-5">
                <p key={index} className="mb-3">
                  {people.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Schedule;

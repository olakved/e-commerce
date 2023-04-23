import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { dbUsersData } from "../../utils/hooks/dbUsersData";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

function Schedule() {
  // const { isLoading, error, data } = useQuery(["users"], () =>
  //   axios.get("http://localhost:3001/users").then((res) => res.data)
  // );
  // const { mutate, isError, userLoading, userData } = AddUsersData();
  const postingUrl = "http://localhost:3001/users";

  const postRequest = ({ url, data }) => {
    const response = axios.post(url, data);
    return response || response?.data;
  };

  const {
    data: userData,
    mutate,
    isLoading: userLoading,
    isError,
  } = useMutation(postRequest, {
    onSuccess(response) {
      console.log(response);
    },
    onError(error) {
      console.log(error);
    },
  });

  const { isLoading, error, data } = dbUsersData();

  // console.log(data);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    name: "",
    address: "",
    phone: "",
  });

  const formSubmit = (data) => {
    console.log(data);
    const userObject = {
      id: uuidv4(),
      ...data,
    };
    mutate({ url: postingUrl, data: userObject });
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error Fetching data</p>
      ) : data ? (
        <div className="p-10">
          <div className="w-[450px]">
            <form action="" onSubmit={handleSubmit(formSubmit)}>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="name"
                  className=" p-2 rounded-lg outline-none border-2"
                />
                <input
                  type="text"
                  name="address"
                  {...register("address")}
                  placeholder="address"
                  className=" p-2 rounded-lg outline-none border-2 mt-3"
                />
                <input
                  type="text"
                  name="phone"
                  {...register("phone")}
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
              <div key={index} className="mt-5">
                <p className="mb-3">{people?.name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Schedule;

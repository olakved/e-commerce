import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const patternCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const formSubmit = (data) => {
    console.log(data);
    if (patternCheck.test(data.email)) {
      return "invalid Email";
    }
    navigate("/profile");
  };

  return (
    <div className=" my-[113px] flex justify-center ">
      <div className="bg-[#003b32] h-[400px] w-[400px] mt-[30px] flex items-center flex-col">
        <h1 className="text-neutral-50 mt-[30px] text-2xl font-bold">
          LOGIN HERE
        </h1>
        <div>
          <form className="p-5 mt-5 " onSubmit={handleSubmit(formSubmit)}>
            <input
              className="p-2 w-[100%] rounded-md outline-none"
              type="text"
              placeholder="Email"
              name="email"
              {...register("email")}
              autoComplete="off"
            />
            <input
              className="p-2 mt-4 w-[100%] rounded-md outline-none"
              type="password"
              placeholder="Password"
              name="password"
              {...register("password")}
              autoComplete="off"
            />
            <div className="flex items-center mt-4">
              <input className="mr-2" type="checkbox" />
              <p className="text-white">Remember Me</p>
            </div>
            <button
              className="mt-4 bg-[#1a7b42] text-white w-[100%] p-2 rounded-md text-sm"
              type="submit"
            >
              LOGIN
            </button>
            <i className="mt-6 text-white text-sm">
              <Link to="/">forgot password</Link>
            </i>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

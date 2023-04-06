import React from "react";
import signupBg from "../../assets/signupImg.jpg";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function SignupPage() {
  const patternCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    email: "",
    password: "",
    fullName: "",
    phone: "",
  });

  //   const navigate = useNavigate();

  const submitForm = (data) => {
    console.log(data);
    if (patternCheck.test(data.email)) {
      return "invalid Email";
    }
    //   navigate("/login");
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-between sm:h-full">
      <div className="px-20 py-10 flex flex-col  items-center w-1/2 sm:w-full sm:px-5 sm:py-3 ">
        <div className="w-full">
          <div className="mb-7 border-b-2 py-3">
            <h1 className="text-dark-green text-3xl font-bold mb-3">
              Let's create your account
            </h1>
            <h1>Signup is free!</h1>
          </div>
          <form action="" onSubmit={handleSubmit(submitForm)}>
            <input
              type="text"
              placeholder="Full name"
              name="fullName"
              {...register("fullName", { required: true })}
              autoComplete="off"
              className="border-2 border-dark-green outline-none rounded-md py-2 px-5 w-full mb-4"
            />

            <input
              type="text"
              placeholder="Phone"
              name="phone"
              {...register("phone", { required: true })}
              autoComplete="off"
              className="border-2 border-dark-green outline-none rounded-md py-2 px-5 w-full mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              {...register("email", { required: true })}
              autoComplete="off"
              className="border-2 border-dark-green outline-none rounded-md py-2 px-5 w-full mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              name="password"
              {...register("password", { required: true })}
              autoComplete="off"
              className="border-2 border-dark-green outline-none rounded-md py-2 px-5 w-full mb-4"
            />
            <p className="flex gap-x-3 mb-4 ">
              <input type="checkbox" className="w-7 h-7" />
              <i>
                By signing up, I have read and agreed to the Organisation Terms
                and Privacy Policy
              </i>
            </p>

            <button className="bg-dark-green text-white outline-none rounded-md p-2 w-full hover:bg-light-green">
              Sign Up
            </button>
          </form>
          <div className="flex gap-x-5 mt-5">
            <button className="border-2 border-dark-green text-dark-green outline-none rounded-md p-2 w-1/2 hover:bg-light-green hover:text-white hover:border-light-green">
              <Link to={"/"}>Home</Link>
            </button>
            <button className="border-2 border-dark-green text-dark-green outline-none rounded-md p-2 w-1/2 hover:bg-light-green hover:text-white hover:border-light-green">
              <Link to={"/login"}>Login</Link>
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center sm:hidden">
        <div className="absolute bg-black/50 w-1/2 h-full"></div>
        <div className="">
          <img src={signupBg} alt="" className="" />
        </div>
        <div className="absolute text-white mt-[20%]">
          <h1 className="text-[40px]">Create Your Account</h1>
          <h1 className="text-[30px]">It's Free! </h1>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="mt-10">
        <h1 className="text-[red] font-bold text-4xl text-center">
          Page Under Construction!
        </h1>
        <p className="text-dark-green mt-7 text-center text-lg">
          Do you want to see what we have done so far?
        </p>
        <p className="text-[red] mt-7 text-center text-lg">
          Go to Signup, Login and View the Dashboard
        </p>
        <div className="flex gap-x-10 justify-center items-center mt-7">
          <button className="px-7 py-3 bg-dark-green text-white rounded-md">
            <Link to={"/signup"}>Signup</Link>
          </button>
          <button className="px-7 py-3 border-2 border-light-green bg-white text-dark-green rounded-md hover:bg-light-green hover:text-white">
            <Link to={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

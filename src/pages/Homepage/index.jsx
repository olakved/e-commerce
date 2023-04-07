import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "../../components/auth/loginButton";
import LogoutButton from "../../components/auth/logoutButton";

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
          <Link to={"/signup"}>
            <button className="px-7 py-3 bg-dark-green text-white rounded-md">
              Signup
            </button>
          </Link>
          <Link to={"/login"}>
            <button className="px-7 py-3 border-2 border-light-green bg-white text-dark-green rounded-md hover:bg-light-green hover:text-white">
              Login
            </button>
          </Link>
          <h1>Auth0 Login</h1>
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

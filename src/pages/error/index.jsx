import React from "react";
import { useNavigate } from "react-router-dom";
import errorImg from "../../assets/error.gif";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center">
      <img src={errorImg} alt="" />
      <h1 className="font-bold text-2xl">Page not found</h1>
      <button
        className="px-9 py-4 bg-[red] text-[white] rounded-xl mt-3"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
}

export default ErrorPage;

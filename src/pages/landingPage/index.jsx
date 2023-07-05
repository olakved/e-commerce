import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticlesBg from "../../components/particles/particlesBg";

function LandingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/index");
    }, 5000);
  }, []);

  return (
    <>
      <ParticlesBg />
      <div className="h-[100vh] z-50">
        <div className="flex justify-center items-center h-full">
          <div className="max-w-[700px] flex flex-col items-center">
            <h2 className="text-white  font-bold text-[40px]">Welcome!</h2>
            <p className="text-white text-center  text-sm">
              Click{" "}
              <span className="text-light-green font-semibold">
                Get Started
              </span>{" "}
              or proceed automatically after 5 seconds...
            </p>
            <Link to="/index">
              <button className="px-4 py-2 bg-white text-dark-green text-center mt-4 rounded-md cursor-pointer hover:bg-light-green hover:text-white text-[20px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;

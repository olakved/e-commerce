import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ParticlesBg from "../../components/particles/particlesBg";

function LandingPage() {
  const [seconds, setSeconds] = useState(5);

  const navigate = useNavigate();

  // setTimeout(() => {
  //   navigate("/index");
  // }, 5000);

  useEffect(() => {
    const countdown = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        // Navigate to another page
        navigate("/index");
      }
    }, 1000); // Countdown every 1 second

    // Clear the timeout when the component unmounts
    return () => clearTimeout(countdown);
  }, [seconds]);

  return (
    <>
      <ParticlesBg />
      <div className="h-[100vh] z-50">
        <div className="flex justify-center items-center h-full">
          <div className="max-w-[700px] flex flex-col items-center">
            <h2 className="text-white  font-bold text-[40px]">Welcome!</h2>
            {/* {seconds === 0 ? navigate("/index") : ""} */}
            <p className="text-white text-center  text-sm">
              Click{" "}
              <span className="text-light-green font-semibold">
                Get Started
              </span>{" "}
              or proceed automatically after {seconds} seconds...
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

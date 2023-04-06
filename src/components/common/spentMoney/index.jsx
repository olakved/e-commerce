import React from "react";
import moneyIn from "../../../assets/moneyIn.png";
import moneyOut from "../../../assets/moneyOut.png";

function MoneySpent() {
  return (
    <div className="bg-teal-100 py-6 px-10 rounded-md sm:w-full">
      <div className="flex items-center gap-x-4">
        <div className="w-[40px] h-[40px] rounded-md bg-dark-green flex justify-center items-center">
          <img
            src={moneyOut}
            alt=""
            className="w-[20px] h-[20px] flex justify-center items-center text-white "
          />
        </div>
        <div>
          <p className="text-sm text-gray-600">Money spent</p>
          <p className="text-md">$1200.00</p>
        </div>
      </div>
      <div className="flex items-center gap-x-4 mt-4">
        <div className="w-[40px] h-[40px] rounded-md bg-dark-green flex justify-center items-center">
          <img
            src={moneyIn}
            alt=""
            className="w-[20px] h-[20px] flex justify-center items-center text-white "
          />
        </div>
        <div>
          <p className="text-sm text-gray-500">Monthly earnings</p>
          <p className="text-md">$1200.00</p>
        </div>
      </div>
    </div>
  );
}

export default MoneySpent;

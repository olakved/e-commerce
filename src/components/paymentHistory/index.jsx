import React from "react";
import profileImg from "../../assets/profileImg.jpg";

function PaymentHistory() {
  return (
    <div>
      <p className="text-sm mb-2">History</p>
      <div className="flex justify-between items-center  mb-3">
        <div className="flex items-center gap-x-3">
          <img
            src={profileImg}
            alt=""
            className=" w-[45px] h-[45px] rounded-full"
          />
          <div>
            <p className="text-sm mb-3 ">Jessica Jay</p>
            <p className="text-xs text-gray-500">23 September</p>
          </div>
        </div>
        <p className="text-[15px]">$290.00</p>
      </div>
      <div className="flex justify-between items-center  mb-3">
        <div className="flex items-center gap-x-3">
          <img
            src={profileImg}
            alt=""
            className=" w-[45px] h-[45px] rounded-full"
          />
          <div>
            <p className="text-sm mb-3 ">Jessica Janet</p>
            <p className="text-xs text-gray-500">23 September</p>
          </div>
        </div>
        <p className="text-[15px]">$290.00</p>
      </div>
      <div className="flex justify-between items-center  mb-3">
        <div className="flex items-center gap-x-3">
          <img
            src={profileImg}
            alt=""
            className=" w-[45px] h-[45px] rounded-full"
          />
          <div>
            <p className="text-sm mb-3 ">Jessica Jay</p>
            <p className="text-xs text-gray-500">23 September</p>
          </div>
        </div>
        <p className="text-[15px]">$290.00</p>
      </div>

      <button
        type="submit"
        className="bg-dark-green text-white text-sm w-full p-3 rounded-md hover:bg-light-green"
      >
        Send Money
      </button>
    </div>
  );
}

export default PaymentHistory;

import React from "react";
import HeaderDashboard from "../../components/common/headerDashboard";
import AtmCard from "../../components/common/atmCard";
import CardPeople from "../../components/common/poeple";
import MoneySpent from "../../components/common/spentMoney";
import SendMoney from "../../components/common/sendMoney";
import PaymentHistory from "../../components/paymentHistory";

function UserDashboard() {
  return (
    <div className="">
      <HeaderDashboard />
      <div className=" px-5">
        <div className="flex justify-between">
          <AtmCard />
          <div className="flex items-center gap-x-10">
            <CardPeople />
            <MoneySpent />
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div className="border-2 border-black rounded-md p-5">
            <h1 className="text-[20px]">Send Money</h1>
            <SendMoney />
            <PaymentHistory />
          </div>
          <div className="w-[60%]">
            <div className="bg-dark-green text-white h-[250px] rounded-md">
              <p>Chart</p>
            </div>
            <p>Side 2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

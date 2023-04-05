import React from "react";
import HeaderDashboard from "../../components/common/headerDashboard";
import AtmCard from "../../components/common/atmCard";
import CardPeople from "../../components/common/poeple";
import MoneySpent from "../../components/common/spentMoney";

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
          <div className="border-2 border-black rounded-md p-5">Send Money</div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;

import React, { useEffect, useState } from "react";
import { BsPhone } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { TbPerfume } from "react-icons/tb";
import { BiSpa, BiRightArrowCircle } from "react-icons/bi";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { GiLargeDress } from "react-icons/gi";
import { PiShirtFoldedLight } from "react-icons/pi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CategoryCard = [
  {
    icon: <BsPhone />,
    title: "Smartphones",
    link: "smartphones",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    icon: <AiOutlineLaptop />,
    title: "Laptops",
    link: "laptops",
    subTitle:
      "Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.",
  },
  {
    icon: <TbPerfume />,
    title: "Fragrances",
    link: "fragrances",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    icon: <BiSpa />,
    title: "Skincare",
    link: "skincare",
    subTitle:
      "Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.",
  },
  {
    icon: <MdOutlineLocalGroceryStore />,
    title: "Groceries",
    link: "groceries",
    subTitle:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.",
  },
  {
    icon: <GiLargeDress />,
    title: "Womens Wears",
    link: "womens-dresses",
    subTitle:
      "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
  },
  {
    icon: <PiShirtFoldedLight />,
    title: "Men Wears",
    link: "mens-shirts",
    subTitle:
      "Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.",
  },
];

function Categories() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("smartphone");
  //   const [defaultCategory, setDefaultCategory] = useState("smartphone");

  const { isLoading, error, data } = useQuery(["users"], () =>
    axios
      .get("https://db-kappa-nine.vercel.app/products")
      .then((res) => res.data)
  );

  const categoryData = data?.filter((obj) => {
    return obj.category === selectedCategory;
  });

  const handleButtonClick = (link) => {
    setSelectedCategory(link);
  };

  // const categoryData = data?.filter((obj) => {
  //   return obj.category === selectedCategory;
  // });

  return (
    <div className="">
      <div className="flex justify-between items-center px-[80px] sm:px-[20px] mb-[15px]">
        <h2 className="text-[30px] sm:text-[20px] font-bold text-dark-green">
          Categories
        </h2>
        <p className="text-[15px] mr-[40px] sm:mr-0 cursor-pointer hover:text-dark-green flex">
          See all..{" "}
          <span className="font-bold text-[20px]">
            <BiRightArrowCircle />
          </span>
        </p>
      </div>
      <div className="flex justify-center items-center gap-x-[40px] lg:gap-x-[25px] sm:gap-[10px] ">
        {CategoryCard?.map((item, index) => (
          <div
            key={index}
            onClick={() => handleButtonClick(`${item.link}`)}
            className="flex flex-col justify-center items-center w-[140px] h-[100px] p-2 lg:w-[120px] md:w-[80px] md:h-[80px] sm:h-[40px] sm:w-[40px] bg-gray-100 text-dark-green hover:text-light-green cursor-pointer  rounded-lg"
          >
            <p className="text-[40px] md:text-[30px] sm:text-[20px]">
              {item?.icon}
            </p>
            <p className="text-sm md:hidden text-center font-bold mt-2">
              {item?.title}
            </p>
          </div>
        ))}
      </div>
      {/* <div><Outlet /></div> */}
      <div className=" px-[50px] sm:px-[10px] mt-[40px] mb-[70px] border-y-2 py-[40px] bg-slate-50">
        <div className="grid grid-cols-4 gap-2 gap-y-5 max-h-fit lg:grid-cols-3 md:grid-cols-2">
          {categoryData?.slice(0, 4)?.map((item) => (
            <div
              key={item?.id}
              className="w-[250px] rounded-lg  sm:w-[180px] border-2"
            >
              <div className="h-[180px] overflow-hidden flex justify-end rounded-lg">
                <img src={item?.images[0]} alt="" className="h-full w-full" />
                <p className="absolute mr-2 mt-4 bg-[#ff000083] text-[white] text-[10px] rounded-md px-1 py-0">
                  -{item?.discountPercentage}%
                </p>
              </div>
              <div className="py-2 px-1">
                <div className="flex-col justify-between items-start ">
                  <div>
                    <p className="text-[12px] truncate mb-[10px]">
                      {item?.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold  ">N{item?.price}</p>
                    <p className="text-[12px]  font-bold text-gray-400  line-through decoration-double">
                      N{item?.price}
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-[10px] mt-[5px]">Organic Cutton</p>
                  <p className="text-[8px] mt-[5px] text-green-400">
                    &#x2B50; &#x2B50; &#x2B50;
                  </p>
                </div>
                <Link to={`/product/${item?.id}`}>
                  <button className="py-1 mt-[10px] px-4 rounded-xl text-sm text-white bg-light-green ">
                    <p>view</p>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;

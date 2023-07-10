import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import constructionImg from "../../assets/construction.gif";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("smartphones");

  const { isLoading, error, data } = useQuery(["products"], () =>
    axios
      .get("https://db-kappa-nine.vercel.app/products")
      .then((res) => res.data)
  );
  const categoryData = data?.filter((obj) => {
    return obj.category === selectedCategory;
  });

  return (
    <div className="sm:px-[20px]">
      <div className="mt-[10%] flex flex-col justify-center items-center">
        <img
          src={constructionImg}
          alt="construction Image"
          className="h-[250px]"
        />
        <p className="font-bold text-dark-green text-[30px] leading-[50px] text-center">
          {category} Category
        </p>
        <p className=" text-[30px] leading-[50px] text-center">
          Page Under Construction
        </p>
        <p
          onClick={() => navigate(-1)}
          className="mt-[20px] cursor-pointer hover:bg-light-green hover:rounded-lg bg-dark-green px-4 py-2 text-white"
        >
          Go Back
        </p>
      </div>
    </div>
  );
}

export default CategoryPage;

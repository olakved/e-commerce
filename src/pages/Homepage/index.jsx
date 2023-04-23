// import React from "react";
// import { Link } from "react-router-dom";
// import LoginButton from "../../components/auth/loginButton";
// import LogoutButton from "../../components/auth/logoutButton";
// import searchIcon from "../../assets/Search.png";
// import ProductPage from "../product";
// import Search from "../search";

// function HomePage() {
//   return (
//     <div className="w-screen h-screen overflow-hidden px-[80px] mt-[100px]">
//       <div className="border-b-2 py-3 px-[10%]  md:px-2 sm:px-2 translate-[50%] ">
//         <img
//           src={searchIcon}
//           alt=""
//           className="absolute py-2 px-10 sm:py-1 sm:px-5"
//         />
//         <input
//           type="search"
//           placeholder="Search our website"
//           className="w-full py-1 px-20 text-xl rounded-full border-2 outline-none sm:text-sm sm:px-14 "
//         />
//       </div>
//       {/* <div className="mt-10">
//         <h1 className="text-[red] font-bold text-4xl text-center">
//           Page Under Construction!
//         </h1>
//         <p className="text-dark-green mt-7 text-center text-lg">
//           Do you want to see what we have done so far?
//         </p>
//         <p className="text-[red] mt-7 text-center text-lg">
//           Check Blog, Signup, Login and View the Dashboard
//         </p>
//         <div className="flex gap-x-10 justify-center items-center mt-7">
//           <Link to={"/signup"}>
//             <button className="px-7 py-3 bg-dark-green text-white rounded-md">
//               Signup
//             </button>
//           </Link>
//           <Link to={"/login"}>
//             <button className="px-7 py-3 border-2 border-light-green bg-white text-dark-green rounded-md hover:bg-light-green hover:text-white">
//               Login
//             </button>
//           </Link>
//         </div>
//         <div className="flex items-center justify-center mt-5 gap-x-5">
//           <h1>Auth0 Login Test</h1>
//           <LoginButton />
//         </div>
//       </div> */}
//       <Search />
//     </div>
//   );
// }

// export default HomePage;
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ProductPage from "../product";
import searchIcon from "../../assets/Search.png";

function HomePage() {
  const { isLoading, error, data } = useQuery(["users"], () =>
    axios.get("https://dummyjson.com/products").then((res) => res.data)
  );

  const navigate = useNavigate();

  return (
    <div className=" px-[80px] mt-[10px]">
      <div>
        {isLoading ? (
          <p>loading...</p>
        ) : error ? (
          <p>Error while fetching data</p>
        ) : data ? (
          <div className="grid grid-cols-5 gap-2 gap-y-5 max-h-fit lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
            {data?.products?.map((item) => (
              <div
                // onClick={() => navigate(`${item.id}`)}
                key={item?.id}
                className="w-[200px] rounded-lg  sm:w-[150px] border-2"
              >
                <div className="max-h-[120px] overflow-hidden flex justify-end rounded-lg">
                  <img
                    src={item?.images[0]}
                    alt=""
                    className="max-h-[120px] min-h-[120px] w-full"
                  />
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
                  <button className="py-1 mt-[10px] px-4 rounded-xl text-sm text-white bg-light-green ">
                    <Link to={`/search/${item?.id}`}>
                      <p>view</p>
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;

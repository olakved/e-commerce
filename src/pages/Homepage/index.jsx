import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/Search.png";

function HomePage() {
  const { isLoading, error, data } = useQuery(["users"], () =>
    axios
      .get("https://db-kappa-nine.vercel.app/products")
      .then((res) => res.data)
  );
  const navigate = useNavigate();

  return (
    <div className=" px-[80px] mt-[10px] md:px-[20px] ">
      <div>
        {isLoading ? (
          <p>loading...</p>
        ) : error ? (
          <p>Error while fetching data</p>
        ) : data ? (
          <div className="grid grid-cols-4 gap-2 gap-y-5 max-h-fit lg:grid-cols-3 md:grid-cols-2">
            {data?.map((item) => (
              <div
                // onClick={() => navigate(`${item.id}`)}
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
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;

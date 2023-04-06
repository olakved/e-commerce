import { useQuery } from "@tanstack/react-query";
import HeaderDashboard from "../../components/common/headerDashboard";
import prodImg from "../../assets/profileImg.jpg";
import axios from "axios";

function Search() {
  const { isLoading, error, data } = useQuery(["users"], () =>
    axios.get("https://dummyjson.com/products").then((res) => res.data)
  );
  console.log(data);

  return (
    <div>
      <HeaderDashboard />
      <div>
        {isLoading ? (
          <p>loading...</p>
        ) : error ? (
          <p>Error while fetching data</p>
        ) : data ? (
          <div className="grid grid-cols-5 gap-2 max-h-fit">
            {data?.products?.map((item, index) => (
              <div className="w-[200px] rounded-md relative">
                <div className="max-h-[220px] overflow-hidden flex justify-end rounded-lg">
                  <img
                    src={item?.images[0]}
                    alt=""
                    className="max-h-[220px] min-h-[220px] w-full"
                  />
                  <p className="absolute mr-2 mt-4 text-[red] cursor-pointer hover:text-dark-green">
                    &#x2764;
                  </p>
                </div>
                <div className="py-2 px-1 ">
                  <div className="flex-col justify-between items-start ">
                    <div>
                      <p className="text-[12px] truncate">{item?.title}</p>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold -mt-2">
                        N{item?.price}
                      </p>
                      <p className="text-[14px] font-bold -mt-2 line-through decoration-double">
                        N{item?.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[10px] -mt-4">Organic Cutton</p>
                    <p className="text-[8px] -mt-4 text-green-400">
                      &#x2B50; &#x2B50; &#x2B50;
                    </p>
                  </div>
                  <button className="py-1 px-4 border-2 border-dark-green rounded-xl text-sm text-dark-green hover:bg-light-green hover:text-white hover:border-light-green">
                    <p>view</p>
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

export default Search;

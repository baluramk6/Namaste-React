// import { restaurantData } from "../components/config";
import RestraauntCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUICard from "./ShimmerUICard";
import { searchHandle } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [query, setQuery] = useState("");
  const online = useOnline();

  useEffect(function () {
    getData();
  }, []);

  async function getData() {
    try {
      let res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&page_type=DESKTOP_WEB_LISTING"
      );
      let data = await res.json();
      setFilterRestaurant(data?.data?.cards[2]?.data?.data?.cards);
      setRestaurantData(data?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log("API Call error");
    }
  }

  if (!online) {
    return <h1>Please check youre internet connection...</h1>;
  }

  // if (!restaurantData) return null;

  // if (filterRestaurant?.length === 0) {
  //   return <h1>No result found...</h1>;
  // }

  return (
    <>
      <div className="my-6 flex justify-center space-x-2">
        <input
          type="search"
          className="py-2 px-6 bg-white text-black rounded-lg border pl-4"
          placeholder="Search by restaurant name..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (query.length <= 1) {
              getData();
            }
          }}
        />
        <button
          className="py-2 px-6 bg-teal-600 hover:bg-teal-700 text-white rounded-lg"
          onClick={() => {
            const newData = searchHandle(restaurantData, query);
            setFilterRestaurant(newData);
          }}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4">
        {filterRestaurant.length > 0 ? (
          filterRestaurant?.map((item) => {
            return <RestraauntCard key={item.data.id} {...item.data} />;
          })
        ) : (
          <ShimmerUICard />
        )}
      </div>
    </>
  );
};

export default Body;

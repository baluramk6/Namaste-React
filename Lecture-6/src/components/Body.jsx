import RestraauntCard from "./RestraauntCard";
import { restaurantData } from "../components/config";
import { useEffect, useState } from "react";
import ShimmerUICard from "./ShimmerUICard";

const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [restaurantData, setRestaurantData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const searchHandle = (data, query) => {
    let filterData = data.filter((item) =>
      item.data.name.toLowerCase().includes(query.toLowerCase())
    );
    return filterData;
  };

  useEffect(function () {
    getData();
  }, []);

  async function getData() {
    setIsLoading(true);
    try {
      let res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.585445&lng=73.712479&page_type=DESKTOP_WEB_LISTING"
      );
      let data = await res.json();
      console.log(data.data.cards[2].data.data.cards);
      setRestaurantData(data?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurant(data?.data?.cards[2]?.data?.data?.cards);
      setIsLoading(false);
    } catch (error) {
      console.log("API Call error");
      setIsLoading(false);
    }

    // console.log(data.cards[2].data.data.cards);
  }
  console.log("Render");

  if (!restaurantData) return null;

  if (filterRestaurant?.length === 0) {
    return <h1>No result found...</h1>;
  }

  return filterRestaurant.length === 0 ? (
    <ShimmerUICard />
  ) : (
    <>
      <div className="searchContainer">
        <input
          type="search"
          className="searchInput"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="searchButton"
          onClick={() => {
            const newData = searchHandle(restaurantData, query);
            setFilterRestaurant(newData);
          }}
        >
          {isLoading ? "Loading..." : "Search"}
        </button>
      </div>
      <div className="restaurant-list">
        {filterRestaurant?.map((item) => {
          return <RestraauntCard key={item.data.id} {...item.data} />;
        })}
      </div>
    </>
  );
};

export default Body;

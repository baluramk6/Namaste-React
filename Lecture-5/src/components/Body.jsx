import RestraauntCard from "./RestraauntCard";
import { restaurantData } from "../components/config";
import { useState } from "react";

const Body = () => {
  const [data, setData] = useState(restaurantData);
  const [query, setQuery] = useState("");

  const searchHandle = (data, query) => {
    let filterData = restaurantData.filter((item) =>
      item.data.name.toLowerCase().includes(query)
    );
    return filterData;
  };

  return (
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
            const newData = searchHandle(data, query);
            setData(newData);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {data?.map((item) => {
          return <RestraauntCard key={item.data.id} {...item.data} />;
        })}
      </div>
    </>
  );
};

export default Body;

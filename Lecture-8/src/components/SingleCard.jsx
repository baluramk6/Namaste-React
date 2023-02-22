import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";

const SingleCard = () => {
  const [restaurantInfo, setRestaurantInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    let res = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=24.585445&lng=73.712479&menuId=${id}`
    );
    let data = await res.json();
    setRestaurantInfo(data.data);
    console.log(data.data);
  }
  console.log(IMG_CDN_URL);
  return (
    <div>
      <img src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} alt="" />
      <h1>{restaurantInfo.name}</h1>
      <p>Rating:{restaurantInfo.avgRating}</p>
      <p>Restaurant ID: {id}</p>
      <p>{restaurantInfo.cuisines}</p>
      <p>{restaurantInfo.city}</p>
    </div>
  );
};

export default SingleCard;

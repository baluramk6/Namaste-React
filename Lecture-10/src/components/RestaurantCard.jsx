import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import SingleCard from "./SingleCard";

const RestaurantCard = ({
  cloudinaryImageId,
  slugs,
  id,
  cuisines,
  slaString,
}) => {
  return (
    <div className="border shadow-sm p-4">
      <Link to={`/restaurant/${id}`}>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      </Link>
      <h2 className="font-bold text-xl">
        {slugs.restaurant.split("-").slice(0, 2).join(" ")}
      </h2>
      <p>{cuisines.slice(0, 2).join(",")}</p>
      <p>{slaString}</p>
    </div>
  );
};

export default RestaurantCard;

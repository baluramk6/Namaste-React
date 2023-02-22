import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import SingleCard from "./SingleCard";

const RestaurantCard = ({
  cloudinaryImageId,
  slugs,
  id,
  cuisines,
  slaString,
}) => {
  return (
    <div className="card">
      <Link to={`/restaurant/${id}`}>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      </Link>
      <h2>{slugs.restaurant.split("-").slice(0, 2).join(" ")}</h2>
      <p>{cuisines.slice(0, 2).join(",")}</p>
      <p>{slaString}</p>
    </div>
  );
};

export default RestaurantCard;

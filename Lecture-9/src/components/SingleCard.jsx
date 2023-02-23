import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import useRestaurant from "../utils/useRestaurant";

const SingleCard = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  return (
    <div>
      <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} alt="" />
      <h1>{restaurant.name}</h1>
      <p>Rating:{restaurant.avgRating}</p>
      <p>Restaurant ID: {id}</p>
      <p>{restaurant.cuisines}</p>
      <p>{restaurant.city}</p>
    </div>
  );
};

export default SingleCard;

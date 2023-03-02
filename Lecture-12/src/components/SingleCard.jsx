import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";
import useRestaurant from "../utils/useRestaurant";
import { GiShinyApple } from "react-icons/gi";
import { IoFish } from "react-icons/io";

const SingleCard = () => {
  const { id } = useParams();
  const { restaurant } = useRestaurant(id);

  console.log("Res::", restaurant);

  // const restaurantArray = new Array(restaurant?.menu?.items);

  if (!restaurant) return <h1>Something went wrong...</h1>;

  return (
    <div className="w-full border-2 min-h-screen border-red-600">
      <div className="h-[40vh] border-2 flex p-4 gap-6 border-green-600 ">
        <div className="flex-1">
          <img
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt=""
            className="h-full w-full"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold">{restaurant.name}</span>
            {restaurant.isVeg ? (
              <GiShinyApple className="text-2xl text-green-500" />
            ) : (
              <IoFish className="text-2xl text-red-500" />
            )}
          </div>
          <p>Rating:{restaurant?.avgRating}</p>
          <p>Restaurant ID: {id}</p>
          <p>{restaurant.cuisines}</p>
          <p>{restaurant.city}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;

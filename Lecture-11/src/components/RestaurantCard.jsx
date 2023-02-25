import { Link } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/config";

const RestaurantCard = ({
  cloudinaryImageId,
  id,
  cuisines,
  deliveryTime,
  name,
  avgRating,
  costForTwoString,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="border shadow-sm p-4">
      <Link to={`/restaurant/${id}`}>
        <img width="100%" src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      </Link>
      <h2 className="text-lg font-medium my-1">{name}</h2>
      <p className="text-sm text-zinc-500 my-1">{cuisines.join(", ")}</p>
      <div className="flex justify-between my-4">
        <span
          className={
            avgRating >= 4
              ? "bg-green-400 text-sm text-white py-0 px-2"
              : "bg-orange-600 text-sm text-white py-0 px-2"
          }
        >
          {avgRating}
        </span>
        <span className="text-sm text-zinc-500">{deliveryTime} MINS</span>
        <span className="text-sm text-zinc-500">{costForTwoString}</span>
      </div>
      <div className="w-full border-t-[1px] py-4 hover:border-b-[1px]">
        <span className="text-sm text-[#8A584B] font-[400] ">
          {aggregatedDiscountInfo.descriptionList[0].meta}
        </span>
      </div>
    </div>
  );
};

export default RestaurantCard;

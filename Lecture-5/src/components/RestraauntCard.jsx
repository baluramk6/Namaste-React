import { IMG_CDN_URL } from "../components/config";

const RestraauntCard = ({ cloudinaryImageId, slugs, cuisines, slaString }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
      <h2>{slugs.restaurant.split("-").slice(0, 2).join(" ")}</h2>
      <h3>{cuisines.slice(0, 2).join(",")}</h3>
      <h4>{slaString}</h4>
    </div>
  );
};

export default RestraauntCard;

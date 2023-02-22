import React from "react";

const ShimmerUICard = () => {
  return (
    <>
      {Array(15)
        .fill("")
        .map((e, index) => {
          return (
            <div key={index} className="shimmerContainer">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          );
        })}
    </>
  );
};

export default ShimmerUICard;

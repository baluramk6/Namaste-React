import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <div className="h-full">
      <Link to="/">
        <img
          className="h-full"
          src="https://png.pngtree.com/png-vector/20220623/ourlarge/pngtree-food-logo-png-image_5296974.png"
          alt="logo"
        />
      </Link>
    </div>
  );
};

export default Title;

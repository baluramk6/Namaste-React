import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = useContext(UserContext);

  return (
    <div className="w-full h-20 flex px-8 justify-between items-center bg-teal-500 ">
      <Title />
      <div>
        <ul className="flex space-x-8 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/cart">
            <li>Cart</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
              {user.name} Logout
            </button>
          ) : (
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

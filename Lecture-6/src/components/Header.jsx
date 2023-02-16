import React, { useState } from "react";
import Title from "./Title";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;

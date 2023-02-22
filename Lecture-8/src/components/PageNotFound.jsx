import React from "react";
import { Link, useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>{err.status}</h1>
      <h3>{err.statusText}</h3>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default PageNotFound;

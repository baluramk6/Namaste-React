import React from "react";
import { Link, useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const err = useRouteError();

  return (
    <div className="flex w-full h-screen justify-center items-center ">
      <h1>{err?.status}</h1>
      <h3>{err?.statusText}</h3>
      <Link className="underline font-bold text-lg" to="/">
        Go to home
      </Link>
    </div>
  );
};

export default PageNotFound;

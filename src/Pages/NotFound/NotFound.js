import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-y-12">
      <h1 className="text-8xl lg:text-9xl font-medium text-red-600">404</h1>
      <h4 className="text-3xl lg:text-5xl">Page Not Found</h4>
      <Link to="/" className="btn btn-outline">
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;

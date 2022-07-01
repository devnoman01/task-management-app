import React from "react";

const LoadingSpinner = () => {
  return (
    <div>
      <div className=" flex justify-center items-center">
        <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-emerald-400"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

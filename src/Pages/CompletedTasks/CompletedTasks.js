import React, { useEffect, useState } from "react";
import CompletedTaskItem from "../../Components/CompletedTaskItem/CompletedTaskItem";

const CompletedTasks = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto px-3 lg:px-0">
        <h1 className="text-3xl text-center font-medium pt-7">
          Completed Tasks
        </h1>
        {/* todo task section */}
        <div className="p-5 max-w-xl mx-auto rounded-lg">
          <div className="my-3">
            <CompletedTaskItem />
            <CompletedTaskItem />
            <CompletedTaskItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;

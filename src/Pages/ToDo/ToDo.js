import React, { useEffect, useState } from "react";
import ToDoList from "../../Components/ToDoList/ToDoList";

const ToDo = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto px-3 lg:px-0">
        <h1 className="text-3xl text-center font-medium pt-7">To-Do Tasks</h1>

        {/* todo tasks section */}
        <div className="p-5 max-w-xl mx-auto rounded-lg">
          <ToDoList />
        </div>
      </div>
    </div>
  );
};

export default ToDo;

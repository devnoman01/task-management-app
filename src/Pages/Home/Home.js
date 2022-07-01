import React from "react";
import ToDoTaskItem from "../../Components/ToDoTaskItem/ToDoTaskItem";

const Home = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="container mx-auto px-3 lg:px-0">
          <h1 className="text-3xl text-center font-medium my-7">
            Task Management Tool
          </h1>
          {/* add task section */}
          <div className="p-5 bg-[#ddeff0] max-w-xl mx-auto rounded-lg border shadow-md">
            <h3 className="text-center text-xl font-medium mb-3">Add Task</h3>
            <div className="flex items-center justify-evenly gap-5">
              <input
                type="text"
                placeholder="Task title"
                className="input input-bordered input-sm lg:input-md w-full"
              />
              <button className="btn btn-sm lg:btn-md bg-[#3B747F] border-0">
                Add
              </button>
            </div>
          </div>

          {/* todo task section */}
          <div className="p-5 max-w-xl mx-auto rounded-lg my-8 border shadow-md">
            <h3 className="text-center text-xl font-medium mb-3">Task To-Do</h3>
            <div className="my-3">
              <ToDoTaskItem />
              <ToDoTaskItem />
              <ToDoTaskItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

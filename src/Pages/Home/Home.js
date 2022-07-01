import React, { useRef } from "react";
import ToDoList from "../../Components/ToDoList/ToDoList";

const Home = () => {
  const titleRef = useRef("");

  // function for handling add task
  const handleAddTask = () => {
    const title = titleRef.current.value;
    console.log(title);

    // declaring object for new task
    const task = {
      title: title,
      status: "pending",
    };

    // using post api to store task
    const url = `https://friendly-leaf-62778.herokuapp.com/all-todo-task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((result) => {
        alert("New task added");
      });
  };

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
                onKeyPress={(e) => e.key === "Enter" && handleAddTask()}
                ref={titleRef}
                type="text"
                placeholder="Task title"
                className="input input-bordered input-sm lg:input-md w-full"
              />
            </div>
          </div>

          {/* todo task section */}
          <div className="p-5 max-w-xl mx-auto rounded-lg my-8 border shadow-md">
            <h3 className="text-center text-xl font-medium mb-3">Task To-Do</h3>
            <ToDoList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

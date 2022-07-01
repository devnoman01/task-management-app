import React, { useEffect, useState } from "react";
import ToDoTaskItem from "../../Components/ToDoTaskItem/ToDoTaskItem";

const ToDo = () => {
  const [toDoTasks, setToDoTasks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setToDoTasks(data);
      });
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto px-3 lg:px-0">
        <h1 className="text-3xl text-center font-medium pt-7">To-Do Tasks</h1>
        {/* todo task section */}
        <div className="p-5 max-w-xl mx-auto rounded-lg">
          <div className="my-3">
            {toDoTasks.map((task) => (
              <ToDoTaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;

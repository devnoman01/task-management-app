import React, { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ToDoTaskItem from "../ToDoTaskItem/ToDoTaskItem";

const ToDoList = () => {
  const [toDoTasks, setToDoTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://friendly-leaf-62778.herokuapp.com/all-todo-task")
      .then((res) => res.json())
      .then((data) => {
        setToDoTasks(data);
        setLoading(false);
      });
  }, [toDoTasks]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="my-3">
        {toDoTasks.map((task) => (
          <ToDoTaskItem key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;

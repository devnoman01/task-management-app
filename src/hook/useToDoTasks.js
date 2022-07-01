import React from "react";
import { useState, useEffect } from "react";

const useToDoTasks = () => {
  const [toDoTasks, setToDoTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/todo-task")
      .then((res) => res.json())
      .then((data) => {
        setToDoTasks(data);
      });
  }, [toDoTasks]);

  return [toDoTasks, setToDoTasks];
};

export default useToDoTasks;

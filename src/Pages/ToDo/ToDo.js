import React from "react";
import ToDoTaskItem from "../../Components/ToDoTaskItem/ToDoTaskItem";
import useToDoTasks from "../../hook/useToDoTasks";

const ToDo = () => {
  const [toDoTasks, setToDoTasks] = useToDoTasks();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto px-3 lg:px-0">
        <h1 className="text-3xl text-center font-medium pt-7">To-Do Tasks</h1>
        {/* todo task section */}
        <div className="p-5 max-w-xl mx-auto rounded-lg">
          <div className="my-3">
            {toDoTasks.map((task) => (
              <ToDoTaskItem key={task._id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;

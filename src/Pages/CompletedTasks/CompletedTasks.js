import React, { useEffect, useState } from "react";
import CompletedTaskItem from "../../Components/CompletedTaskItem/CompletedTaskItem";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";

const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://friendly-leaf-62778.herokuapp.com/completed-task")
      .then((res) => res.json())
      .then((data) => {
        setCompletedTasks(data);
        setLoading(false);
      });
  }, [completedTasks]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="container mx-auto px-3 lg:px-0">
        <h1 className="text-3xl text-center font-medium pt-7">
          Completed Tasks
        </h1>
        {/* todo task section */}
        <div className="p-5 max-w-xl mx-auto rounded-lg">
          <div className="my-3">
            {loading && <LoadingSpinner />}
            {completedTasks.map((task) => (
              <CompletedTaskItem key={task._id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedTasks;

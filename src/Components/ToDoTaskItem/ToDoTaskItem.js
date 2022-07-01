import React from "react";

const ToDoTaskItem = ({ task }) => {
  const { _id, title } = task;

  const handleDelete = (id) => {
    const proceed = window.confirm("Remove task?");
    if (proceed) {
      const url = `http://localhost:5000/todo-task/?id=${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Task Removed");
        });
    }
  };

  // console.log(task);
  return (
    <div className="bg-[#FFF3D5] px-3 py-2 my-4 border border-gray-200 rounded-md">
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="checkbox checkbox-sm" />
          <p>{title}</p>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <img
              className="p-1 w-6 border border-black rounded-xl"
              src="https://img.icons8.com/pastel-glyph/344/edit--v1.png"
              alt=""
            />
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="bg-red-500 text-white px-2 rounded-full"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoTaskItem;

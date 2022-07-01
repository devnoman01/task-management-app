import React from "react";

const ToDoTaskItem = ({ task }) => {
  // const { title } = task;
  // console.log(task);
  return (
    <div className="bg-[#FFF3D5] px-3 py-2 my-4 border border-gray-200 rounded-md">
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="checkbox checkbox-sm" />
          {/* <p>{title}</p> */}
          <p>Sample Task 1</p>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <img
              className="p-1 w-6 border border-black rounded-xl"
              src="https://img.icons8.com/pastel-glyph/344/edit--v1.png"
              alt=""
            />
          </button>
          <button className="bg-red-500 text-white px-2 rounded-full">X</button>
        </div>
      </div>
    </div>
  );
};

export default ToDoTaskItem;

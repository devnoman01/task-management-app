import React from "react";

const CompletedTaskItem = ({ task }) => {
  // const { title } = task;

  return (
    <div className="bg-[#ddeff0] px-3 py-2 my-3 border border-gray-200 rounded-md">
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="w-6"
            src="https://img.icons8.com/emoji/452/check-mark-emoji.png"
            alt=""
          />
          {/* <p>{title}</p> */}
          <p>Sample Task 1</p>
        </div>
      </div>
    </div>
  );
};

export default CompletedTaskItem;

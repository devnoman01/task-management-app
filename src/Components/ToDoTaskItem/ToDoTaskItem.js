import React, { useState, useRef } from "react";

const ToDoTaskItem = ({ task }) => {
  const { _id, title } = task;

  const titleRef = useRef("");

  const [checked, setChecked] = useState(false);
  const [editable, setEditable] = useState(true);

  // function for updating as completed
  const markAsComplete = (id) => {
    const status = "completed";
    const url = `https://friendly-leaf-62778.herokuapp.com/all-todo-task/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEditable(true);
        alert("Updated as complete");
      });
  };

  // function for deleting pending todo task
  const handleDelete = (id) => {
    const proceed = window.confirm("Remove task?");
    if (proceed) {
      const url = `https://friendly-leaf-62778.herokuapp.com/all-todo-task/?id=${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("Task Removed");
        });
    }
  };

  // function for updating task title
  const updateTask = (id) => {
    const newTitle = titleRef.current.value;
    if (title == newTitle) {
      console.log("ooo");
    }

    const url = `https://friendly-leaf-62778.herokuapp.com/all-todo-task/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newTitle }),
    })
      .then((res) => res.json())
      .then((data) => {
        setEditable(true);
        alert("Updated");
      });
  };

  return (
    <div className="bg-[#FFF3D5] px-3 py-2 my-4 border border-gray-200 rounded-md">
      <div className="flex item-center justify-between">
        <div className="flex items-center gap-3 w-full mr-3">
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={() => markAsComplete(_id)}
            className="checkbox checkbox-sm"
          />
          <input
            className={`${
              editable ? "bg-transparent" : "bg-white"
            } w-full max-w-xl`}
            ref={titleRef}
            type="text"
            defaultValue={title}
            disabled={editable}
          />
        </div>
        <div className="flex items-center gap-2">
          {editable && (
            <button onClick={() => setEditable(false)}>
              <img
                className="p-1 w-8 border border-black rounded-xl"
                src="https://img.icons8.com/pastel-glyph/344/edit--v1.png"
                alt=""
              />
            </button>
          )}
          {!editable && (
            <button
              onClick={() => updateTask(_id)}
              className="btn btn-success btn-sm"
            >
              Update
            </button>
          )}
          {editable && (
            <button
              onClick={() => handleDelete(_id)}
              className="bg-red-500 text-white px-2 rounded-full"
            >
              X
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoTaskItem;

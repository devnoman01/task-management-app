import React, { useState, useRef } from "react";
import Swal from "sweetalert2";

const ToDoTaskItem = ({ task }) => {
  const { _id, title } = task;

  const titleRef = useRef("");

  const [checked, setChecked] = useState(false);
  const [editable, setNotEditable] = useState(true);

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
        setNotEditable(true);
        Swal.fire({
          title: "Updated Task as Completed",
          icon: "success",
          showConfirmButton: false,
        });
      });
  };

  // function for deleting pending todo task
  const handleDelete = (id) => {
    Swal.fire({
      title: "Remove Task?",
      text: "Are you sure to remove the task?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#F24C4C",
      cancelButtonColor: "#5FD068",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://friendly-leaf-62778.herokuapp.com/all-todo-task/?id=${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Task Removed",
              icon: "info",
              showConfirmButton: false,
            });
          });
      }
    });
  };

  // function for updating task title
  const updateTask = (id) => {
    const newTitle = titleRef.current.value;

    // validating task info change
    if (title == newTitle) {
      Swal.fire({
        title: "No change to update",
        icon: "info",
        showConfirmButton: true,
        confirmButtonColor: "#5FD068",
      });
      setNotEditable(true);
    } else {
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
          setNotEditable(true);
          Swal.fire({
            title: "Task Update Successful",
            icon: "success",
            showConfirmButton: false,
          });
        });
    }
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
            <button onClick={() => setNotEditable(false)}>
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

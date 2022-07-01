import React, { useRef } from "react";

const UpdateModal = ({ selectedTask }) => {
  const { title, _id } = selectedTask;
  // console.log(selectedTask);

  const titleRef = useRef("");

  const updateTask = () => {
    // const newTitle = titleRef.current.value;
    // console.log(title, _id);
    // const url = `https://friendly-leaf-62778.herokuapp.com/todo-task/${_id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: newTitle,
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     alert("Task Info Updated");
    //   });
  };

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-medium text-lg text-center mb-5">Update Task</h3>
          {/* <form onSubmit={updateTask}> */}
          <div>
            <input
              ref={titleRef}
              type="text"
              defaultValue={title}
              className="input input-bordered input-sm lg:input-md w-full"
            />
            <div className="flex justify-center mt-5">
              <button
                onClick={updateTask}
                htmlFor="my-modal"
                className="btn btn-success btn-sm"
              >
                Update
              </button>
              <label htmlFor="my-modal" className="btn btn-error btn-sm">
                Cancel
              </label>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;

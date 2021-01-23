import { useState } from "react";

export default function Task(props) {
  const { addTask, deleteTask, moveTask, task } = props;

  function handleSubmit() {}

  function setFormAction() {}

  function handleMoveLeft() {
    let newStatus = "";

    if (task.status === "In Progress") {
      newStatus = "Pending Task";
    } else if (task.status === "Completed") {
      newStatus = "In Progress";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  function handleMoveRight() {
    let newStatus = "";

    if (task.status === "Pending Task") {
      newStatus = "In Progress";
    } else if (task.status === "In Progress") {
      newStatus = "Completed";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  return (
    <div>
      <button onClick={handleMoveLeft} className="button moveTask">
        &#171;
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter Title"
          defaultValue={task.title}
        />
        <textarea
          rows="2"
          className="description input"
          name="description"
          placeholder="Enter Description"
          defaultValue={task.description}
        />
        <button
          onClick={() => {
            setFormAction("save");
          }}
          className="button"
        >
          "Save"
        </button>
      </form>
      <button onClick={handleMoveRight} className="button moveTask">
        &#187;
      </button>
    </div>
  );
}

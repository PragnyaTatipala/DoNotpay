import React, { useState, useEffect } from "react";
//import "../styles/App.scss";
import StatusLine from "./StatusLine";

function App() {
  const [tasks, setTasks] = useState([]);

  function addEmptyTask(status) {
    const lastTask = tasks[tasks.length - 1];

    let newTaskId = 1;

    if (lastTask !== undefined) {
      newTaskId = lastTask.id + 1;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        id: newTaskId,
        title: "",
        description: "",
        urgency: "",
        status: status
      }
    ]);
  }

  function addTask(taskToAdd) {}

  function deleteTask(taskId) {}

  function moveTask(id, newStatus) {}

  return (
    <div className="App">
      <h1>Task Management</h1>
      <main>
        <section>
          <table>
            <tr>
              <td>
                <StatusLine
                  tasks={tasks}
                  addEmptyTask={addEmptyTask}
                  addTask={addTask}
                  deleteTask={deleteTask}
                  moveTask={moveTask}
                  status="Pending Task"
                />
              </td>
              <td>
                <StatusLine
                  tasks={tasks}
                  addEmptyTask={addEmptyTask}
                  addTask={addTask}
                  deleteTask={deleteTask}
                  moveTask={moveTask}
                  status="In Progress"
                />
              </td>
              <td>
                <StatusLine
                  tasks={tasks}
                  addEmptyTask={addEmptyTask}
                  addTask={addTask}
                  deleteTask={deleteTask}
                  moveTask={moveTask}
                  status="Completed"
                />
              </td>
            </tr>
          </table>
        </section>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const TodoPage = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleTextChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    let taskArr = [...tasks];
    if (taskArr.length === 0) {
      taskArr.push({
        id: 1,
        task,
        isActive: true,
      });
    } else {
      taskArr.push({
        id: taskArr[taskArr.length - 1].id + 1,
        task,
        isActive: true,
      });
    }
    setTasks(taskArr);
    setTask("");
  };

  const handleTaskChange = (id, checked) => {
    let tskArr = [...tasks];
    let idx = tskArr.findIndex((val) => val.id === id);
    if (idx > -1) {
      tskArr[idx] = {
        ...tskArr[idx],
        isActive: checked,
      };
    }

    setTasks(tskArr);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 h-2/3 bg-amber-200">
        <div className="flex justify-between items-baseline p-10">
          <input onChange={handleTextChange} value={task} type="text" className="border-2 rounded p-2 w-2/3 flex justify-between" />
          <button
            onClick={addTask}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Add Text
          </button>
        </div>
        <div className="w-full">
          <ul className="flex flex-col items-center">
            {tasks.map((tsk) => {
              return (
                <li key={tsk.id + "task"} className="flex">
                  <input type="checkbox" checked={!tsk.isActive} onChange={(e) => handleTaskChange(tsk.id, !e.target.checked)} />
                  <p className={!tsk.isActive ? "line-through" : ""}>{tsk.task}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

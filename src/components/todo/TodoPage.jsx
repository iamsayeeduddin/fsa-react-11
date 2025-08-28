import React, { useState, useReducer } from "react";

const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      const newId = state.length === 0 ? 1 : state[state.length - 1].id + 1;
      return [
        ...state,
        {
          id: newId,
          task: action.payload,
          isActive: true,
        },
      ];
    }
    case "TOGGLE_TASK": {
      return state.map((tsk) =>
        tsk.id === action.payload
          ? { ...tsk, isActive: !tsk.isActive }
          : tsk
      );
    }
    case "DELETE_TASK": {
      return state.filter((tsk) => tsk.id !== action.payload);
    }
    case "EDIT_TASK": {
      return state.map((tsk) =>
        tsk.id === action.payload.id
          ? { ...tsk, task: action.payload.task }
          : tsk
      );
    }
    default:
      return state;
  }
};

const TodoPage = () => {
  const [task, setTask] = useState("");
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const handleTextChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: task });
      setTask("");
    }
  };

  const handleTaskChange = (id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  // Optional: Edit task logic can be added here

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/3 h-2/3 bg-amber-200">
        <div className="flex justify-between items-baseline p-10">
          <input
            onChange={handleTextChange}
            value={task}
            type="text"
            className="border-2 rounded p-2 w-2/3 flex justify-between"
          />
          <button
            onClick={addTask}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          >
            Add Text
          </button>
        </div>
        <div className="w-full">
          <ul className="flex flex-col items-center">
            {tasks.map((tsk) => (
              <li key={tsk.id + "task"} className="flex items-center gap-2 mb-2">
                <input
                  type="checkbox"
                  checked={!tsk.isActive}
                  onChange={() => handleTaskChange(tsk.id)}
                />
                <p className={!tsk.isActive ? "line-through" : ""}>{tsk.task}</p>
                <button
                  onClick={() => deleteTask(tsk.id)}
                  className="ml-2 text-xs text-red-600 hover:underline"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;

"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

export const ToDo = () => {
  const [nameTask, setNameTask] = useState("");
  const [addTask, setAddTask] = useState([]);

  function addTaskInList() {
    if (nameTask.trim() !== "") {
      setAddTask([...addTask, nameTask]);
      setNameTask("");
    } else {
      alert("Add some task!");
    }
  }

  function removeTask(indexRemoved) {
    setAddTask(addTask.filter((item, index) => index !== indexRemoved));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      addTaskInList();
    }
  }

  return (
    <div className="bg-blue-400/70 drop-shadow-md w-[300px] md:w-2/5 mt-20 rounded-lg pb-8">
      <h1 className="text-4xl pt-4 font-raleway text-center">ToDo List</h1>

      {/*Input e ADD Button*/}

      <div className="flex justify-center gap-2 mt-3 mx-4">
        <input
          type="text"
          placeholder="Add task"
          className="h-9 rounded-sm pl-1 w-full outline-lime-400"
          value={nameTask}
          onChange={(e) => setNameTask(e.target.value)}
          onKeyDown={handleKeyDown}
        ></input>

        <button
          onClick={addTaskInList}
          className="bg-lime-300 px-3 h-9 rounded-sm"
        >
          <Plus />
        </button>
      </div>

      {/* count toDos */}

      <div className="text-center mt-1">
        {addTask.length === 0 ? (
          <p>Nothing To Do</p>
        ) : (
          <p>
            {addTask.length} {addTask.length === 1 ? "Thing" : "Things"} To Do
          </p>
        )}
      </div>

      {/* div List*/}

      <div className="w-full">
        <ul className="px-4 font-raleway mt-2 space-y-3 font-medium">
          {addTask.map((task, index) => (
            <li
              className="flex justify-between gap-3 break-all capitalize"
              key={index}
            >
              {task}
              <button onClick={() => removeTask(index)} className="px-3">
                <X />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

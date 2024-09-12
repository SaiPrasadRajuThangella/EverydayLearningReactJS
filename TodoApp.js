// import { Component } from "react";
import { useState } from "react";
import "./todo.css";

let id = 0;
function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editingTaskId,setEditingTaskId] =useState(null);
  const addTask = () => {
    tasks.includes(inputValue)
      ? alert("already contains")
      : setTasks([...tasks, { title: inputValue, id: ++id }]);
    setInputValue("");
  };

  const deletefunc = (taskToBeRemoved) => {
    const newArr = tasks.filter((task) => task.id !== taskToBeRemoved);
    setTasks(newArr);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const onEdit = (taskId)=>{
    const {title} =tasks.find(task=> task.id=== taskId)
    setInputValue(title)
    setEditingTaskId(taskId)
  }
  

  return (
    <div>
      <h1>useState,Async Nature and lazy loading</h1>
      <div style={{ margin: "20px" }}>
        <h2>To-Do List</h2>
        <input
          placeholder="Enter Todo"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        />

        <button onClick={addTask}>{editingTaskId? "Edit Todo" : "Add todo"}</button>
      </div>
      <ul className="tasks-list">
        {tasks.map((task) => {
          return (
            <li className="task">
              <div>
                <span>{task.id}</span>
                <span>{task.title}</span>
              </div>
              <div>
                <button onClick={()=>onEdit(task.id)}>Edit</button>
                <button onClick={() => deletefunc(task.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoApp;

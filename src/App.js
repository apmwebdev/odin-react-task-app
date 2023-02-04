import React, { useState } from 'react';
import uniqid from 'uniqid';
import Overview from "./components/Overview";


function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ text: '', id: uniqid(), num: 1});
  
  const handleChange = (e) => {
    setTask({ text: e.target.value, id: task.id, num: task.num});
  };
  
  const onSubmitTask = (e) => {
    e.preventDefault();
    setTasks(prevTasks => prevTasks.concat(task));
    setTask({ text: '', id: uniqid(), num: task.num + 1});
  }
  
  const resetTaskNums = () => {
    setTasks(prevTasks => {
      return prevTasks.map(t => {
        t.num = prevTasks.indexOf(t) + 1;
        return t;
      });
    });
    
    setTask(prevTask => {
      return { text: prevTask.text, id: prevTask.id, num: prevTask.num - 1 };
    });
  }
  
  return (
    <div className="App">
      <form onSubmit={onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input
          onChange={handleChange}
          value={task.text}
          type="text"
          id="taskInput"
        />
        <button type="submit">
          Add Task
        </button>
      </form>
      <Overview
        tasks={tasks}
        setTasks={setTasks}
        resetTaskNums={resetTaskNums}
      />
    </div>
  );
}

export default App;

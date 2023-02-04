import React from "react";

const DeleteTask = (props) => {
  const { task, setTasks, resetTaskNums } = props;
  
  
  const deleteTask = () => {
    setTasks(prevTasks => prevTasks.filter(t => t !== task));
    resetTaskNums();
  }
  
  return (
    <button onClick={deleteTask}>Delete Task</button>
  );
};

export default DeleteTask;
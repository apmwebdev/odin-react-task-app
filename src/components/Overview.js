import React from "react";
import DeleteTask from './DeleteTask';

const Overview = (props) => {
  const { tasks, setTasks, resetTaskNums } = props;
  
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>{task.num}. {task.text}
          <DeleteTask
            task={task}
            setTasks={setTasks}
            resetTaskNums={resetTaskNums}
          /></li>;
      })}
    </ul>
  );
};

export default Overview;
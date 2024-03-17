import React from "react";

const Task = ({ task }) => {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>Status: {task.completed ? 'Compeleted' : 'Not Completed'}</p>
        </div>
    )
}

export default Task;
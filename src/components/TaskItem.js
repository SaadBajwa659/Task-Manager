import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../features/tasks/tasksSlice";

export const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };

    const handleComplete = () => {
        dispatch(completeTask(task.id));
    };

    return (
        <div>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</span>
            <button onClick={handleComplete}>{task.completed ? 'undo' : 'complete'}</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}
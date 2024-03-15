import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../features/tasks/tasksSlice";

export const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (taskId) => {
        dispatch(deleteTask(taskId));
    };

    const handleComplete = (taskId) => {
        dispatch(completeTask(taskId));
    }

    return (
        <div>
            <Title>Task List</Title>
            <ul>
                {tasks && tasks?.length > 0 && tasks.map(task => (
                    <li key={task.id}>
                        <span
                            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        >
                            {task.title}
                            <button
                                onClick={() => handleComplete(task.id)}
                            >
                                {task.completed ? 'Undo' : 'Complete'}
                            </button>

                            <button
                                onClick={() => handleDelete(task.id)}
                            >
                                Delete
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const Title = styled.h2`
    position: absolute;
    top: -3rem;
    left: 15rem;
    font-family: "Oswald", sans-serif;
    font-size: 4rem;
`
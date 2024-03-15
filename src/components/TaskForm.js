import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/tasksSlice";
import styled from "styled-components";

export const TaskForm = () => {
    const [taskTitle, setTaskTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim() === '') {
            return;
        }
        dispatch(addTask({ id: Date.now(), title: taskTitle, completed: false }));
        setTaskTitle('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Enter task title"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                />
            <Button
                type="submit"
            >
                Add Task
            </Button>
        </form>
    )
}

const Input = styled.input `
    width: 25rem;
    height: 3rem;
    position: absolute;
    top: 9rem;
    left: 5rem;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: none;
    outline: none;
    font-size: 1rem;
`

const Button = styled.button`
    height: 3rem;
    width: 5rem;
    position: absolute;
    right: 4rem;
    top: 9rem;
    border-radius: 1rem;
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`
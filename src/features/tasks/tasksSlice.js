import React from "react";
import { createSlice } from '@reduxjs/toolkit';
import styled from "styled-components";

export const initialState = {
    tasks: [],
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, payload) => {
            const { id, title, completed } = action.payload;
            state.tasks.push({ id, title, completed });
        },

        deleteTask: (state, action) => {
            const taskId = action.payload;
            state.tasks = state.tasks.filter(task => task.id !== taskId);
        },

        completeTask: (state, action) => {
            const taskId = action.payload;
            const task = state.tasks.find(tasks => tasks.id === taskId)
            if (task) {
                task.completed = !task.completed;
            }
        }
    },
})
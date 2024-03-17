import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import styled from "styled-components";

export const saveTasksToLocalStorage = createAsyncThunk(
    'tasks/saveTasksToLocalStorage',
    async ({ getState }) => {
        const state = getState();
        const tasks  = state;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        return tasks;
    }
)

const initialState = [];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { id, title, completed } = action.payload;
            state.push({ id, title, completed });
        },

        deleteTask: (state, action) => {
            const taskId = action.payload;
            return state.filter(t => t.id !== taskId);
        },

        completeTask: (state, action) => {
            const taskId = action.payload;
            const task = state.find(t => t.id === taskId)
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
})


export const { addTask, deleteTask, completeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
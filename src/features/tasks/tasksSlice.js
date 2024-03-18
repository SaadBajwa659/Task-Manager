import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const saveTasksToLocalStorage = createAsyncThunk("tasks/saveTasksToLocalStorage", async ({ getState }) => {
  const state = getState();
  const tasks = state;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  return tasks;
});

const initialState = [];

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { id, title, completed } = action.payload;
      state.push({ id, title, completed });
    },

    completeTask: (state, action) => {
      const taskId = action.payload;
      const task = state.find((t) => t.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },

    deleteTask: (state, action) => {
      const taskId = action.payload;
      return state.filter((t) => t.id !== taskId);
    },
  },
});

export const { addTask, deleteTask, completeTask } = tasksSlice.actions;

export default tasksSlice.reducer;

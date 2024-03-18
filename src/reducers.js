import { combineReducers } from "redux";
import tasksSlice from "./features/tasks/tasksSlice";

const rootReducer = combineReducers({
  tasks: tasksSlice,
});

export default rootReducer;

import { combineReducers } from "redux";
import tasksSlice from "./Reducers/Tasks";

const rootReducer = combineReducers({
    tasks : tasksSlice,
});

export default rootReducer;

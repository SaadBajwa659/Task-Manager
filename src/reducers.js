import { combineReducers } from "redux";
import tasksSlice from "./Reducers/Tasks";

const rootReducer = combineReducers({
    Tasks : tasksSlice,
});

export default rootReducer;

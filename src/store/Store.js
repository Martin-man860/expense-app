import { createStore } from "redux";
import expenseReducers from "../reducers/expenseReducers";

// import UserReducer from './reducers/UserReducer' 
// import userReducer from "../reducers/UserReducer";


const Store = createStore(expenseReducers)

export default Store;
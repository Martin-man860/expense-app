import { createStore } from "redux";
import expenseReducers from "../reducers/expenseReducer";




const Store = createStore(expenseReducers)

export default Store;
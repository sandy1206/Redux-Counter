import { createStore } from "redux";
import count from "../Store/CountReducer";

// declearing the reducer
// console.log(count);
const store = createStore(count);

export default store;

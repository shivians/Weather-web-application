import { createStore } from "redux";
import rootReducer from "./redux/reducers/root";
const store= createStore(rootReducer);
export default store; 
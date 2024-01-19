import { legacy_createStore as createStore } from "redux";
import cartReducer from "../Reducers/cartReducers.jsx";

export const store = createStore(cartReducer);

export default store;

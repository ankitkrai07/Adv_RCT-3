import { legacy_createStore } from "redux";
import { reducer as counterReducer } from "./Counter/reducer";
import { reducer as todosReducer } from "./Todos/reducer";
const initialState = {
  counter: 10,
  todos: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const store = legacy_createStore(reducer, initialState);

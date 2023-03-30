import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { bugsReducer } from "./bugs/bugs.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  User: userReducer,
  Bugs: bugsReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));

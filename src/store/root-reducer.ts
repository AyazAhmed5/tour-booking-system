import { combineReducers } from "redux";
import tourReducer from "./tour/tour.slice";
import userReducer from "./user/user.slice";

export type RootState = ReturnType<typeof rootReducer>;

// Root Reducer
const rootReducer = combineReducers({
  tour: tourReducer,
  user: userReducer,
});

export default rootReducer;

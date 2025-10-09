import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk"; // ✅ Correct import
// import { composeWithDevTools } from "@redux-devtools/extension";
import {
  forgotPasswordReducer,
  profileReducer,
  userDetailsReducer,
  userEmailRequestReducer,
  userReducer,
} from "./reducers/userReducer";

// Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

// Combine reducers
const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  userEmail: userEmailRequestReducer,
  forgotPassword: forgotPasswordReducer,
  userDetails: userDetailsReducer,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware
const middleware = [thunk];

// Create store with middleware
const store = createStore(
  persistedReducer,
  // initialState, // optional
  applyMiddleware(...middleware)
  // If you want Redux DevTools:
  // composeWithDevTools(applyMiddleware(...middleware))
);

// Persistor
export const persistor = persistStore(store);
export default store;

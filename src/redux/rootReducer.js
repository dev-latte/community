import { combineReducers } from "redux";
import userReducer from "./user/reducer";
import statusReducer from "./status/reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    user: userReducer,
    status: statusReducer
});

export default persistReducer(persistConfig, rootReducer);

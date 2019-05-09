


import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "../reducers/index";
import { persistReducer, autoRehydrate } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createLogger } from "redux-logger";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlerwares = [thunk];
if (__DEV__) {
    middlerwares.push(createLogger())
}
const store = createStore(
rootReducer,
    compose(
        applyMiddleware(...middlerwares)
    )
);

export default store;
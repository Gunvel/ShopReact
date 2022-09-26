import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { chatsReducer } from "./reducer/chatsReducer/chatsReducer";
import { messagesReducer } from "./reducer/messagesReducer/messagesReducer";
import { userReducer } from "./reducer/userReducer/userReducer";

const timeout = store => next => action => {
    const delayMS = action.meta?.delayMS;

    if (!delayMS) {
        return next(action);
    }

    const timeoutId = setTimeout(() => next(action), delayMS);

    return () => clearTimeout(timeoutId);
};

const logger = createLogger({
    duration: true,
    timestamp: true
});

const reducer = combineReducers({
    user: userReducer,
    listChats: chatsReducer,
    messanger: messagesReducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducer, applyMiddleware(timeout, logger));
export const persistor = persistStore(store);
import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./reducer/chatsReducer/chatsReducer";
import { messagesReducer } from "./reducer/messagesReducer/messagesReducer";
import { userReducer } from "./reducer/userReducer/userReducer";

const reducer = combineReducers({
    user: userReducer,
    listChats: chatsReducer,
    messanger: messagesReducer
});

export const store = createStore(reducer);
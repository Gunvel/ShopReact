import Chat from "../../../object/Chat";
import { ADD_CHAT, REMOVE_CHAT } from "../../actionType";

const initialState = {
    chats: [
        new Chat('Chat with Ivan'),
        new Chat('Custom chat'),
        new Chat('Party time'),
        new Chat('Super CHAT')
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chats: [...state.chats, action.payload]
            }
        case REMOVE_CHAT:
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.payload)
            }
        default:
            return state;
    }
};
import Message from "../../../object/Message";
import { ADD_MESSAGE } from "../../actionType";

const initialState = {
    messages: [
        new Message('Sergey', 'Hello', 0),
        new Message('Robot', 'I`m Robot. Hello World!', 0),
    ]
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state;
    }
};
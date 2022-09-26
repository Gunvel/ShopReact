import User from "../../../object/User";

const initialState = {
    user: new User('Sergey')
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};
import * as ActionType from '../../actionType';
import * as Action from '../../action';
import { auth } from '../../../service/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

const initialState = {
    loading: false,
    error: null,
    user: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN_LOADING:
        case ActionType.REGISTER_LOADING:
        case ActionType.LOGOUT_LOADING:
            return {
                ...state,
                loading: true
            }
        case ActionType.LOGIN_SUCCESS:
        case ActionType.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            }
        case ActionType.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: false,
                user: state.user = null,
                error: null
            }
        case ActionType.LOGIN_ERROR:
        case ActionType.REGISTER_ERROR:
        case ActionType.LOGOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
};

export const registerProgress = (email, password, displayName) => {
    return async (dispatch) => {
        dispatch(Action.registerStart());

        try {
            const userCredetial = await createUserWithEmailAndPassword(auth, email, password);
            await userCredetial.user.updateProfile({
                displayName: displayName
            });

            dispatch(Action.registerSuccess(userCredetial.user));

        } catch (ex) {
            dispatch(Action.registerError(ex))
        }
    };
};

export const loginProgress = (email, password) => {
    return async (dispatch) => {
        dispatch(Action.loginStart());

        try {
            console.log(auth);
            const userCredetial = await signInWithEmailAndPassword(auth, email, password);
            dispatch(Action.loginSuccess(userCredetial.user));

        } catch (ex) {
            dispatch(Action.loginError(ex))
        }
    };
};

export const logoutProgress = () => {
    return async (dispatch) => {
        dispatch(Action.logoutStart());

        try {
            await signOut(auth);
            dispatch(Action.logoutSuccess());

        } catch (ex) {
            dispatch(Action.logoutError(ex))
        }
    };
};
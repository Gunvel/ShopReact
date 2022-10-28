import * as ActionType from './actionType';

export const registerStart = () => ({
    type: ActionType.REGISTER_LOADING
});

export const registerSuccess = (user) => ({
    type: ActionType.REGISTER_SUCCESS,
    payload: user
});

export const registerError = (error) => ({
    type: ActionType.REGISTER_ERROR,
    payload: error.toString()
});

export const loginStart = () => ({
    type: ActionType.LOGIN_LOADING
});

export const loginSuccess = (user) => ({
    type: ActionType.LOGIN_SUCCESS,
    payload: user
});

export const loginError = (error) => ({
    type: ActionType.LOGIN_ERROR,
    payload: error.toString()
});

export const logoutStart = () => ({
    type: ActionType.LOGOUT_LOADING
});

export const logoutSuccess = () => ({
    type: ActionType.LOGOUT_SUCCESS
});

export const logoutError = (error) => ({
    type: ActionType.LOGOUT_ERROR,
    payload: error.toString()
});
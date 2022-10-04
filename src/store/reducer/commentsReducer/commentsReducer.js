import { GET_COMMENTS, GET_COMMENTS_LOADING, GET_COMMENTS_ERROR } from "../../actionType";

const initialState = {
    comments: [],
    loading: false,
    error: null
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COMMENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case GET_COMMENTS_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false,
                error: null
            }
        default:
            return state;
    }
};

export const getComments = () => {
    return async (dispatch) => {
        dispatch(commentsLoading());
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments');

            if (response.status >= 400 && response.status < 600) {
                throw new Error(response.status);
            }

            const data = await response.json();

            dispatch({
                type: GET_COMMENTS,
                payload: data
            });
        } catch (ex) {
            dispatch(commentsError(ex));
        }
    }
};

export const commentsLoading = () => ({
    type: GET_COMMENTS_LOADING
});

export const commentsError = (ex) => ({
    type: GET_COMMENTS_ERROR,
    payload: ex.toString()
});
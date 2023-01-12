


const usersLoadStart = () => ({
    type: actionTypes.USER_LOAD_START
})

const usersLoadSuccess = (users) => ({
    type: actionTypes.USER_LOAD_SUCCESS,
    payload: users,
})

const usersLoadError = (errorMessage) => ({
    type: actionTypes.USER_LOAD_ERROR,
    payload: errorMessage,
})

// eslint-disable-next-line import/no-anonymous-default-export
export const actions = {
    usersLoadStart,
    usersLoadSuccess,
    usersLoadError
};

const actionTypes = {
    USER_LOAD_START:'USERS_LOAD_START',
    USER_LOAD_SUCCESS: 'USERS_LOAD_SUCCESS',
    USER_LOAD_ERROR: 'USERS_LOAD_ERROR',
};

const initialState = {
    isLoading: false,
    users: null,
    errorMessage: null,
}

const usersReducer = ( state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.USER_LOAD_START:
            return {
                ...state,
                isLoading: true,
                users: null,
                errorMessage: null,
            };
        
        case actionTypes.USER_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload,
            }

        case actionTypes.USER_LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload,
            }


        default:
            return state;
    }
}

export default usersReducer;
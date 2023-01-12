import { createSlice } from "@reduxjs/toolkit"
import jwtDecode from "jwt-decode";


 const handleCredentialResponse = (response) => {
    var userCredentials = jwtDecode(response.credential)
    return userCredentials;
};

const getStoredToken = () => {
    const token = window.localStorage.getItem('token');

    if (token) {
        return JSON.parse(token);
    }
    window.localStorage.setItem('token', '');
    return '';
}

const initialState = { token: getStoredToken() }

const googleAuthSlice = createSlice({
    name: 'google',
    initialState,
    reducers: {
        setToken(state, action) {
            const decodedToken = handleCredentialResponse(action.payload)
            window.localStorage.setItem('token', JSON.stringify(decodedToken))
            state.token = decodedToken
        },
    },
})

export const { setToken } = googleAuthSlice.actions
export default googleAuthSlice.reducer 
import { useGoogleLogin } from "@react-oauth/google";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import jwtDecode from "jwt-decode";


 export const handleCredentialResponse = (response) => {
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

const getStoredAccessToken = () => {
    const accessToken = window.localStorage.getItem('accessToken');

    if (accessToken) {
        return JSON.parse(accessToken);
    }
    window.localStorage.setItem('accessToken', '');
    return '';
}


const initialState = { token: getStoredToken(), accessToken: getStoredAccessToken() }

const googleAuthSlice = createSlice({
    name: 'google',
    initialState,
    reducers: {
        setToken(state, action) {
            const decodedToken = handleCredentialResponse(action.payload)
            window.localStorage.setItem('token', JSON.stringify(decodedToken))
            state.token = decodedToken
        },
        setAccessToken(state, action) {
            window.localStorage.setItem('accessToken', JSON.stringify(action.payload))
            state.accessToken = action.payload
        }
    },
})

export const { setToken, setAccessToken } = googleAuthSlice.actions
export default googleAuthSlice.reducer 
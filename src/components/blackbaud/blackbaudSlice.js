import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode"


const handleCredentialResponse = (response) => {
    var userCredentials = jwtDecode(response.credential)
    return userCredentials;
};

export const fetchBlackbaudAuth = createAsyncThunk(
    'blackbaud/fetchBlackbaudAuth',
    async () => {
            const response = await fetch(`https://app.blackbaud.com/oauth/authorize?client_id=594df44d-2338-4cf2-bdf1-ed3df22d8d22&response_type=token&redirect_uri=http://localhost:3000/`, {
                mode: 'no-cors',
                headers: {
                    "Access-Control-Allow-Origin": 'http://localhost:3000/',
                }
            })
            return response
    }
);

const getStoredBlackbaud = () => {
    const blackbaudToken = window.localStorage.getItem('blackbaudToken');

    if (blackbaudToken) {
        return JSON.parse(blackbaudToken);
    }
    window.localStorage.setItem('blackbaudToken', '');
    return '';
}

const initialState = {
    blackbaudToken: getStoredBlackbaud(),
    status: 'idle',
}

const blackbaudAuthSlice = createSlice({
    name: 'blackbaud',
    initialState,
    reducers: {
        setBlackbaudToken(state, action) {
            const decodedToken = handleCredentialResponse(action.payload)
            window.localStorage.setItem('blackbaudToken', JSON.stringify(decodedToken))
            state.blackbaudToken = decodedToken
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBlackbaudAuth.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchBlackbaudAuth.fulfilled, (state, action) => {
            state.status = 'idle';
            state.blackbaudToken = action.payload
            console.log(action.payload)
        })
    }
})

export const { setBlackbaudToken } = blackbaudAuthSlice.actions
export default blackbaudAuthSlice.reducer
import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../components/helper/services/users.service";
import { actions } from "./users.reducer";
import axios from "axios";

export const loadUsersAsync = () => (dispatch) => {
    dispatch(actions.usersLoadStart())

    UserService.getAllUsers()
        .then((response) => dispatch(actions.usersLoadSuccess(response.data)))
        .catch((error) => dispatch(actions.usersLoadError(error.message)));
}

export const loadUsersThunk = createAsyncThunk(
    'users/requestUsers',
    async (arg, { getState, requestId}) => {
        const { REACT_APP_API_URL } = process.env
        
        const response = await axios.create({
            baseURL: REACT_APP_API_URL,
            responseType: 'json',
        })

    }
    )
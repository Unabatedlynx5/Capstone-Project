import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk(
    'todo/fetchTodoStatus',
    async (arg, { getState, requestURL }) => {
        const { currentRequestURL, loading } = getState().todo
        if (loading !== 'pending' || requestURL !== currentRequestURL) {
            return
        }
        const response = await axios.get()
        return response.data
    }
)
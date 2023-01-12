import { createSlice, createReducer, createAction, current } from "@reduxjs/toolkit";
import counterSlice from "../../features/counter/counterSlice";

export const initialState = {
    toasts: [
        {
         data: "test",
         id: 1,
         title: "Eat",
         completed: true
        },
        {
         data: "test",
         id: 2,
         title: "Code",
         completed: true
        },
        {
         data: "test",
         id: 3,
         title: "Sleep",
         completed: true
        }
       ]
};

export const toastSlice = createSlice({
    name: 'toasts',
    initialState,
    reducers: {
        //needs complete toast to append to state
        add: (state, action) => {
            console.log(current(state))
            const toast = action.payload
            state.toasts.push(toast);
        },
        //needs toast Id saved as 'payload'
        subtract: (state, action) => {
            console.log(current(state))
            state.toasts = state.toasts.filter(item => item.id !== action.id);
        },
        //needs toast Id saved as 'payload'
        //changes completed status to inverse.
        invert: (state, action) => {
            console.log(current(state))
            const toast = state.toasts[action.payload]
            toast.completed = !toast.completed;
        },
        //needs title data and toast Id, saved as 'payload'.
        editBody: (state, action) => {
            console.log(current(state))
            const index = state.toasts.map((item) => item.id).indexOf(action.payload.Id)
            state.toasts[index].data = action.payload.data;
        },

        
        //needs title data and toast Id, saved as 'payload'.
        editTitle: (state, action) => {
            const index = state.toast.map((item) => item.id).indexOf(action.payload.id)
            state.toasts[index].data = action.payload.title;

        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase()
    // },
});

export const { add, subtract, invert, editBody, editTitle } = toastSlice.actions;


export const toastReducer = toastSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    courseName: '',
    courseId: '',
    assignmentList: {}
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setClassroom(state, action) {
            state.courseName = action.payload.courseName
            state.courseId = action.payload.courseId
            state.assignmentList = action.payload.assignmentList
        }
    }
})
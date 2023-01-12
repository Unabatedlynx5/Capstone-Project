import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchClassList = createAsyncThunk(
    'classroom/fetchClassroom',
    async () => {
        if (window.localStorage.getItem('accessToken') !== '') {
            const token = window.localStorage.getItem('accessToken')
            const accessToken = JSON.parse(token)

            const response = await axios.get('https://classroom.googleapis.com/v1/courses', {
                params: {
    
                },
                headers: {
                    authorization: `Bearer ${accessToken.access_token}`
                }
            })
            return response.data;
        }
    }
);
export const fetchAssignmentList = createAsyncThunk(
    'classroom/fetchAssignments',
    async (activeClasses) => {
        var classrooms = {}

        const getAssignmentList = async (courseID) => {
            if (window.localStorage.getItem('accessToken') !== '') {
                const token = window.localStorage.getItem('accessToken')
                const accessToken = JSON.parse(token)
                const response = await axios.get(`https://classroom.googleapis.com/v1/courses/${courseID}/courseWork`, {
                    headers: {
                        authorization: `Bearer ${accessToken.access_token}`
                    }
                })
                return response.data;    
            }         
        }

        for (const index in activeClasses) {
        const courseID = activeClasses[index].id
        const courseName = activeClasses[index].name
        const assignmentList = await getAssignmentList(courseID)
            if (assignmentList !== {}) {
                console.log(assignmentList)
                const classroom = { courseID, courseName, assignmentList}
            classrooms[index] = classroom
            }
        }
        console.log(classrooms)
        return classrooms
    }
)

const getStoredClassrooms = () => {
    const classrooms = window.localStorage.getItem('classrooms');

    if (classrooms) {
        return JSON.parse(classrooms)
    }
    window.localStorage.setItem('classrooms', '');
    return {}
}
const initialState = {
    status: 'idle',
    classesList: {},
    activeClasses: {},
    classrooms: getStoredClassrooms(),
};

export const googleClassroomSlice = createSlice({
    name: 'classroom',
    initialState,
    reducers: {
        getActiveClasses(state) {
            var classes = {}
            for (const name in state.classesList.courses) {
                if (state.classesList.courses[name].courseState === "ACTIVE") {
                    const currentClass = state.classesList.courses[name]
                    classes[name] = currentClass
                }
            }
            state.activeClasses = classes;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchClassList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchClassList.fulfilled, (state, action) => {
            state.status = 'idle';
            state.classesList = action.payload;
        })
        .addCase(fetchAssignmentList.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchAssignmentList.fulfilled, (state, action) => {
            state.status = 'idle';
            window.localStorage.setItem('classrooms', JSON.stringify(action.payload))
            state.classrooms = action.payload

        })
    },
})

export const { getActiveClasses } = googleClassroomSlice.actions
export default googleClassroomSlice.reducer
import { createReducer } from "@reduxjs/toolkit";

const initialState = { 
    toasts: [
      {
       data: "test",
       id: 1,
       title: "Eat",
       completed: false
      },
      {
       data: "test",
       id: 2,
       title: "Code",
       completed: false
      },
      {
       data: "test",
       id: 3,
       title: "Sleep",
       completed: false
      }
     ]
};

const updateObject = (oldObject, newValues) => {
    return Object.assign({}, oldObject, newValues);
}
const updateItemInArray = (array, itemId, updateItemCallback) => {
    const updatedItems = array.map(item => {
        if (item.id !== itemId) {
            return item
        }
        const updatedItem = updateItemCallback(item)
        return updatedItem
    })
    return updatedItems
}

const addToasts = (state, action) => {
    const newToasts = state.toasts.concat({
        data: action.data,
        id: action.id,
        title: action.title,
        completed: action.completed
    })
    return newToasts
}

const subtractToasts = (state, action) => {
    const newToasts = state.toasts.filter(item => item.id!== action.id)
    return newToasts
}

const invertToasts = (state, action) => {
    const newToasts = updateItemInArray(state.toasts, action.id, toast => {
        return updateObject(toast, { completed: !action.completed})
    })
    return newToasts
}

const editToastBody = (state, action) => {
    const newToasts = updateItemInArray(state.toasts, action.id, toast => {
        return updateObject(toast, { data: action.data})
    })
    return newToasts
}

const editToastTitle = (state, action) => {
    const newToasts = updateItemInArray(state.toasts, action.id, toast => {
        return updateObject(toast, { title: action.title})
    })
    return newToasts
}



// const createReducer = (initialState, handlers) => {
//     return function reducer(state = initialState, action) {
//         if (handlers.hasOwnProperty(action.type)) {
//             return handlers[action.type](state, action)
//         }
//         else {
//             return state;
//         }
//     }
// }

const toastsReducer = createReducer( initialState, {
    ADD_TOAST: addToasts,
    SUBTRACT_TOAST: subtractToasts,
    INVERT: invertToasts,
    EDIT_TOAST_BODY: editToastBody,
    EDIT_TOAST_TITLE: editToastTitle
})

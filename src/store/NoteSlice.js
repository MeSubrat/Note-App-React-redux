import { createSlice, nanoid } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [
            {
                id: 1,
                date: new Date().toLocaleString('hi-IN'),
                title: "My first Note",
                description: "Hey this is my first note."
            },
            {
                id: 2,
                date: new Date().toLocaleString('hi-IN'),
                title: "Shopping List",
                description: "Buy milk, eggs, and bread."
            },
            {
                id: 3,
                date: new Date().toLocaleString('hi-IN'),
                title: "Meeting Reminder",
                description: "Team meeting at 3 PM tomorrow."
            },
            {
                id: 4,
                date: new Date().toLocaleString('hi-IN'),
                title: "Project Ideas",
                description: "AI-powered chatbot and quiz generator."
            },
            {
                id: 5,
                date: new Date().toLocaleString('hi-IN'),
                title: "Workout Plan",
                description: "Morning jog and evening gym session."
            }
        ]
    },
    reducers: {
        addNote: (state, action) => {
            const note = {
                id: nanoid(),
                date: new Date().toLocaleString('hi-IN'),
                title: action.payload.title,
                description: action.payload.description
            }
            state.notes.push(note);
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload)
        },
        updateNote: (state, action) => {
            const acceptedId = action.payload.id
            const note = state.notes.find((item) => item.id === acceptedId)
            note.title = action.payload.acceptedTitle
            note.description = action.payload.acceptedDescription
        }
    }
})

export default noteSlice;
export const noteActions = noteSlice.actions
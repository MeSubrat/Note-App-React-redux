import { createSlice, nanoid } from "@reduxjs/toolkit";

const noteSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: [
            {
                id: nanoid(),
                date: new Date().toLocaleString('hi-IN'),
                title: "My first Note",
                description: "Hey this is my first note."
            },
            {
                id: nanoid(),
                date: new Date().toLocaleString('hi-IN'),
                title: "Shopping List",
                description: "Buy milk, eggs, and bread."
            },
            {
                id: nanoid(),
                date: new Date().toLocaleString('hi-IN'),
                title: "Meeting Reminder",
                description: "Team meeting at 3 PM tomorrow."
            },
            {
                id: nanoid(),
                date: new Date().toLocaleString('hi-IN'),
                title: "Project Ideas",
                description: "AI-powered chatbot and quiz generator."
            },
            {
                id: nanoid(),
                date: new Date().toLocaleString('hi-IN'),
                title: "Workout Plan",
                description: "Morning jog and evening gym session."
            }
        ],
        dummyNotes: []
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
            // state.dummyNotes.push(note)
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload)
            state.dummyNotes = state.dummyNotes.filter(note => note.id !== action.payload);
        },
        updateNote: (state, action) => {
            const acceptedId = action.payload.id
            const note = state.notes.find((item) => item.id === acceptedId)
            note.title = action.payload.acceptedTitle
            note.description = action.payload.acceptedDescription
        },
        searchNote: (state, action) => {
            const inputText = action.payload.toLowerCase()
            if (state.dummyNotes.length === 0) { state.dummyNotes = [...state.notes] }
            if (inputText === '') {
                state.notes = [...state.dummyNotes]
            }
            else {
                state.notes = state.dummyNotes.filter((note) => {
                    return note.title.toLowerCase().includes(inputText)
                })
            }
        }
    }
})

export default noteSlice;
export const noteActions = noteSlice.actions
import {configureStore, createSlice} from '@reduxjs/toolkit';

const reminders = createSlice({
  name: 'remindersReducer',
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({text: action.payload, id: Date.now()});
    },
    deleteToDo: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const {addToDo, deleteToDo} = reminders.actions;

export default configureStore({reducer: reminders.reducer});

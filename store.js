import {configureStore, createSlice} from '@reduxjs/toolkit';

const reminders = createSlice({
  name: 'remindersReducer',
  initialState: {reminders: []},
  reducers: {
    addToDo: (state, action) => {
      state.reminders.push({text: action.payload, id: Date.now()});
    },
    deleteToDo: (state, action) =>
      state.reminders.filter((toDo) => toDo.id !== action.payload),
  },
});

export const {addToDo, deleteToDo} = reminders.actions;

export default configureStore({reducer: reminders.reducer});

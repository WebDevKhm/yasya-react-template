import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',

  initialState,

  reducers: {
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    removeTodos: (state, action) => {
      const newTodos = [...state];
      newTodos.splice(action.payload, 1);
      return newTodos.map((item, index) => ({ ...item, id: index }));
    },
    isCompleted: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            isChecked: !item.isChecked,
          };
        }
        return item;
      });
    },
    updateTodos: (state, action) => {
      const { id, editTask } = action.payload;
      return state.map((item) => {
        if (item.id === id) {
          return { ...item, taskName: editTask };
        }
        return item;
      });
    },
  },
});

export const { addTodos, removeTodos, isCompleted, updateTodos } =
  addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  check: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.unshift(action.payload);
    },
    removeTodo: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
    UpdateTodo: (state, action) => {
      const index = state.list.findIndex((item) => item.id === action.payload.edit);
      if (index !== -1) {
        state.list[index].title = action.payload.title;
      }
    },
  },
});

export const { addTodo, removeTodo, UpdateTodo } = todoSlice.actions;

export default todoSlice.reducer;

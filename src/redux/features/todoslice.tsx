import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit/react";

type TTodo = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    ToggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((item) => item.id == action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
  },
});

// const todoSlice = createSlice({
//   name: "todo",
//   initialState,
//   reducers: {
//     addTodo: (state, action: PayloadAction<TTodo>) => {
//       state.todos.push({ ...action.payload, isCompleted: false });
//     },
//     removeTodo: (state, action: PayloadAction<string>) => {
//       state.todos = state.todos.filter((item) => item.id !== action.payload);
//     },
//     ToggleComplete: (state, action: PayloadAction<string>) => {
//       const index = state.todos.findIndex((item) => item.id === action.payload);
//       if (index !== -1) {
//         const task = state.todos[index];
//         task.isCompleted = !task.isCompleted;
//         if (task.isCompleted) {
//           state.todos.splice(index, 1); // Remove from current position
//           state.todos.push(task); // Add to the end
//         }
//       }
//     },
//   },
// });

export const { addTodo, removeTodo, ToggleComplete } = todoSlice.actions;

export default todoSlice.reducer;

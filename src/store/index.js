import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "../store/note/note-slice";

export const store = configureStore({
  reducer: {
    NOTE: noteReducer,
  },
});

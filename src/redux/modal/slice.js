// src/redux/modal/slice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: false,
    modalContent: null,
  },
  reducers: {
    openModal: (state, action) => {
      state.showModal = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.showModal = false;
      state.modalContent = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

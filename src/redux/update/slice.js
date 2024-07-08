import { createSlice } from "@reduxjs/toolkit";

const updateSlice = createSlice({
  name: "update",
  initialState: {
    contactName: "",
    contactNumber: "",
    editingId: null,
  },
  reducers: {
    startEditing: (state, action) => {
      state.editingId = action.payload.id;
      state.contactName = action.payload.name;
      state.contactNumber = action.payload.number;
    },
    updateContactName: (state, action) => {
      state.contactName = action.payload;
    },
    updateContactNumber: (state, action) => {
      state.contactNumber = action.payload;
    },
    stopEditing: (state) => {
      state.editingId = null;
      state.contactName = "";
      state.contactNumber = "";
    },
  },
});

export const {
  startEditing,
  updateContactName,
  updateContactNumber,
  stopEditing,
} = updateSlice.actions;

export const updateReducer = updateSlice.reducer;

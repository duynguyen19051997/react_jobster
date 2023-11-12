import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isOpen: false, isOpenEdit: false },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      state.isOpenEdit = false;

      // set scroll: hidden
      document.body.style.overflow = "hidden";
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.isOpenEdit = false;

      // set scroll: reset
      document.body.style.overflow = "unset";
    },
    openModalEdit: (state) => {
      state.isOpenEdit = true;
      state.isOpen = false;

      // set scroll: hidden
      document.body.style.overflow = "hidden";
    },
    closeModalEdit: (state) => {
      state.isOpenEdit = false;
      state.isOpen = false;

      // set scroll: reset
      document.body.style.overflow = "unset";
    },
  },
});

export const { openModal, closeModal, openModalEdit, closeModalEdit } =
  modalSlice.actions;

export default modalSlice.reducer;

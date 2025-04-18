import { create } from "zustand";

const usePhonebookStore = create((set) => ({
  phoneBook: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),
}));

export default usePhonebookStore;

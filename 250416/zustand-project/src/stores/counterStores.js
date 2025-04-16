import { create } from "zustand";

const counterStore = create((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
  increaseBy: (value) => set((state) => ({ count: state.count + value })),
}));

export default counterStore;

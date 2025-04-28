import { atom, selector } from "recoil";

export const minutesState = atom({
  key: "minutes",
  default: 60,
});

export const hourSelector = selector({
  key: "hours",
  get: ({ get }) => {
    const minutes = get(minutesState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minutesState, minutes);
  },
});

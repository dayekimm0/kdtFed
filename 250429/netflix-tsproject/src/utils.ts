export const makeImagePath = (id: string, format) => {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
};

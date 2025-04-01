interface Post {
  content: string;
}
// type Pick<T, K extends keyof T> = {
//   [key in K]: T[key];
// };
// Omit -> 생략하다
const noTitlePost = {
  content: "",
  tags: [],
  thumbnailURL: "string",
};

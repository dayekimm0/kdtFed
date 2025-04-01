// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// const fetchUser = (): User => {
//   return {
//     id: 1,
//     name: "David",
//     age: 20,
//   };
// };

// type PartialUser = {
//   readonly [key in keyof User]?: User[key];
// };

// const updateUser = (user: PartialUser) => {};
// updateUser({ age: 25 });

type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

// interface Post {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }

// const post: Post = {
//   title: "게시글 제목",
//   content: "게시글 본문",
//   author: {
//     id: 1,
//     name: "David",
//     age: 20,
//   },
// };

// // post["author"];

// const authorKey = "author";

// const printAuthor = (author: Post["author"]) => {
//   console.log(`${author.id}-${author.name}`);
// };

// type PostList = {
//   title: string;
//   content: string;
//   author: {
//     id: number;
//     name: string;
//     age: number;
//   };
// }[];

// type Tup = [number, string, boolean];

// type Tup0 = Tup[0];
// type Tup1 = Tup[1];
// type Tup2 = Tup[2];

// type Person = typeof person;

// interface Person {
//   name: string;
//   age: number;
//   location: string;
// }

// const person: Person = {
//   name: "David",
//   age: 20,
//   location: "seoul",
// };

// const getPropertyKey = (person: Person, key: keyof person) => {
//   return person[key];
// };

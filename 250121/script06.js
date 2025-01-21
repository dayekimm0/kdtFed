// const obj = {
//   a: 1,
// };
// obj.a;

// const func = function (x) {
//   console.log(this, x);
// };
// func(1);

// const obj = {
//   method: func,
// };
// obj.method(2);

// const obj = {
//   method: function (x) {
//     console.log(this, x);
//   },
// };

// obj.method(1);
// obj["method"](2);

// const obj = {
//   methodA: function () {
//     console.log(this);
//   },
//   inner: {
//     methodB: function () {
//       console.log(this);
//     },
//   },
// };
// obj.methodA();
// obj["methodA"]();

// obj.inner.methodB();
// obj.inner["methodB"]();
// obj["inner"]["methodB"]();
// obj["inner"].methodB();

// const obj1 = {
//   outer: function () {
//     console.log(this);

//     const innerFunc = function () {
//       console.log(this);
//     };
//     innerFunc();

//     const obj2 = {
//       innerMethod: innerFunc,
//     };
//     obj2.innerMethod();
//   },
// };
// obj1.outer();

const obj = {
  outer: function () {
    console.log(this);
    const innerFunc = () => {
      console.log(this);
    };
    innerFunc();
  },
};
obj.outer();

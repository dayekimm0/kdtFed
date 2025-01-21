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

// const obj = {
//   outer: function () {
//     console.log(this);
//     const innerFunc = () => {
//       console.log(this);
//     };
//     innerFunc();
//   },
// };
// obj.outer();
// const arr = [1, 2, 3, 4];

// arr.forEach(function (num) {
//   console.log(this, num);
// });

// setTimeout(function () {
//   console.log(this);
// }, 300);

// document.body.innerHTML += '<button id="a">클릭</button>';
// document.body.querySelector("#a").addEventListener("click", function () {
//   console.log(this);
// });
const obj1 = {
  outer: function () {
    console.log(this);
    const innerFunc1 = function () {
      console.log(this);
    };
    innerFunc1();
  },
};

obj1.outer();

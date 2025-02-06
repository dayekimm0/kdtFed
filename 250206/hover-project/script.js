// const list = document.querySelectorAll("li");
// const bg = document.querySelector(".photo");

// list.forEach((lis, index) => {
//   lis.addEventListener("hover", () => {

//     let bgURL = "";

//     switch (index) {
//       case 0:
//         bgURL = "./portrait-01.jpg";
//         break;
//       case 1:
//         bgURL = "./portrait-02.jpg";
//         break;
//       case 2:
//         bgURL = "./portrait-03.jpg";
//         break;
//       case 3:
//         bgURL = "./portrait-04.jpg";
//         break;
//     }

//     print.innerHTML = `<img src="${bgURL}">`;
//   });
// });

const liItems = document.querySelectorAll("li");
const photo = document.querySelector(".photo");

liItems.forEach((liItem) => {
  liItem.addEventListener("mouseenter", function () {
    const changeImage = this.getAttribute("data-image");
    photo.style.backgroundImage = `url("${changeImage}")`;
  });
  liItem.addEventListener("mouseleave", function () {
    photo.style.backgroundImage = ``;
  });
});

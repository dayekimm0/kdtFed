const openButton = document.querySelector("#open");
const closeButton = document.querySelector("#close");
const modalBox = document.querySelector("#modal-box");

openButton.addEventListener("click", function () {
  this.classList.add("btnactive");
  modalBox.classList.add("active");
});

closeButton.addEventListener("click", function () {
  openButton.classList.remove("btnactive");
  modalBox.classList.remove("active");
});

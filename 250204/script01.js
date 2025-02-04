document.querySelector("#userId").addEventListener("focus", function () {
  this.style.backgroundColor = "pink";
});
document.querySelector("#userId").addEventListener("blur", function () {
  this.style.backgroundColor = "transparent";
});

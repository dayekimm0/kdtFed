const toggleBtn = document.querySelector("button");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (!document.body.classList.contains("dark")) {
    toggleBtn.innerText = "다크모드로 바꾸기";
  } else {
    toggleBtn.innerText = "라이트모드로 바꾸기";
  }
});

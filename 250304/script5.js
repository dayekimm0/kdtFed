const url = "https://jsonplaceholder.typicode.com/users";
const result = document.querySelector("#result");

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.send();

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const users = JSON.parse(xhr.responseText);
    users.data.forEach((user) => {
      result.innerHTML += `
        <div>
          <p>이름 : ${user.name}</p>
          <p>아이디 : ${user.username}</p>
          <p>이메일 : ${user.email}</p>
        </div>`;
    });
  }
});

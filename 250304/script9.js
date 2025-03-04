// fetch() => API
const result = document.querySelector("#result");

fetch("student.json")
  .then((response) => response.json())
  .then((result) => {
    const output = "";
    result.forEach((student) => {
      output += `
    <h2>${student.major}</h2>
    <ul>
    <li>전공 : ${student.major}</li>
    <li>학년 : ${student.grade}</li>
    </ul>
    }`;
    });
  });

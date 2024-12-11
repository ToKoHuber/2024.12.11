let todos = ["geree tseverleh", "hool hiih", "hicheel hiih", "kino uzeh"];
const button = document.getElementById("button");
const input = document.getElementById("input");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
});
button.addEventListener("click", () => {
  todos.push("asd");
  renderTodos();
});

function renderTodos() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = null;
  todos.map((todo) => {
    const p = document.createElement("p");
    p.innerText = todo;
    tasklist.appendChild(p);
  });
}

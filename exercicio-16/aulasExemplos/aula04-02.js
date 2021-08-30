const ul = document.querySelector("ul");
const button = document.querySelector("button");

//adicionando um elemento no DOM
button.addEventListener("click", () => {
  const li = document.createElement("li");

  li.textContent = "Novo Item";
  ul.prepend(li);
});

ul.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.tagName === "LI") {
    clickedElement.remove();
  }
});

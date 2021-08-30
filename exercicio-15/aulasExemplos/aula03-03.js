const button = document.querySelector("button");
const ul = document.querySelector("ul");
const lis = document.querySelectorAll("li");

//removendo um elemento do DOM
lis.forEach((li) => {
  li.addEventListener("click", (event) => {
    const clickedElement = event.target;

    clickedElement.remove();
  });
});

//adicionando um elemento no DOM
button.addEventListener("click", () => {
  // ul.innerHTML += "<li> New Item </li>";  --> método um
  // ul.innerHTML += "Novo Item";
  const li = document.createElement("li");
  li.textContent = "Novo Item";

  ul.append(li);
});

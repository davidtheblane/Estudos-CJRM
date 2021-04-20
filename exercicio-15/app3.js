const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  console.log("Clicou no botao");
});

const lis = document.querySelectorAll("li");

// lis.forEach((li) => {
//   li.addEventListener("click", () => {
//     console.log("Clicou na li");
//   });
// });

lis.forEach((li) => {
  li.addEventListener("click", (event) => {
    const clickedElement = event.target;

    clickedElement.style.textDecoration = "line-through";
  });
});

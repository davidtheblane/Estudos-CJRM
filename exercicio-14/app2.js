// const paragraph = document.querySelector("p");
const paragraphs = document.querySelectorAll("p");

//forma de obter a lista de classes de um elemento
// console.log(paragraph.classList);

//adicionar a classe "error" em um elemento
// paragraph.classList.add("error");

//remover a classe "error" de um elemento
// paragraph.classList.remove("error");

//adicionar a classe "success" em um elemento
// paragraph.classList.add("success");

paragraphs.forEach((paragraph) => {
  if (paragraph.innerText.includes("error")) {
    paragraph.classList.add("error");
  } else if (paragraph.innerText.includes("success")) {
    paragraph.classList.add("success");
  }
});

//diferença entre TextContent e InnerText
// TextContent: obtém todo o texto que o elemento contém, visivel ou não, (mesmo com o display: none)
// InnerText: Obtém o texto visível que o elemento tem

//ALTERNAR a classe

const title = document.querySelector("h1");

//adiciona a classe "test" no elemento selecionado
//se o elemento já tiver essa classe ele REMOVE A CLASSE
title.classList.toggle("test");

const names = ["João Grilo", "Chicó", "Rosinha"];
let HTMLTemplate = "";

for (let i = 0; i < names.length; i++) {
  HTMLTemplate += `<li>${names[i]}</li>`;
}
console.log(HTMLTemplate);

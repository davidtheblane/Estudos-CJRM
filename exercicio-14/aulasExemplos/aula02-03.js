// Aula 02-03 - Obtendo e setando atributos

const link = document.querySelector("a");

//mostrando no console o conteúdo do atributo "href" dentro da tag "a"
// console.log(link.getAttribute("href"));

// link.setAttribute("href", "www.terra.com.br");
// link.innerText = "Site do Portal Terra";

// console.log(link);

const paragraph = document.querySelector("p");

//mostrando no console o conteúdo do atributo "class" dentro da tag "p"
// console.log(paragraph.getAttribute("class"));

paragraph.setAttribute("class", "success");
// console.log(paragraph);

paragraph.innerText = "Essa mensagem é um sucesso";
// console.log(paragraph);

paragraph.setAttribute("style", "color: green");
// console.log(paragraph);

link.setAttribute("href", "http://www.gizmodo.com.br");
link.innerText = "Site do Gizmodo";

paragraph.setAttribute("class", "Erro na mensagem");
paragraph.setAttribute("style", "color: yellow");
paragraph.innerText = "Erro na mensagem";

console.log(link, paragraph);

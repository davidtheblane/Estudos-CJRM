const paragraph = document.querySelector("p");

// paragraph.innerText += "! Brave New World...";

const paragraphs = document.querySelectorAll("p");

// paragraphs.forEach((paragraph, index) => {
//   paragraph.innerText += ` Novo Texto ${index + 1}`;
// });

const div = document.querySelector(".content");

// div.innerHTML += "<h1> Novo Documento </h1>";

const people = ["Italo", "Gustavo", "Bruna"];

people.forEach((person) => {
  div.innerHTML += `<p> ${person} </p>`;
});

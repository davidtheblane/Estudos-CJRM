const link = document.querySelector("a");

// console.log(link.getAttribute("href"));

link.setAttribute("href", "www.google.com.br");

link.innerText = "Site do Google";

const paragraph = document.querySelector("p");

console.log(paragraph.getAttribute("class"));

paragraph.setAttribute("class", "success");

paragraph.setAttribute("style", "color: #f00");

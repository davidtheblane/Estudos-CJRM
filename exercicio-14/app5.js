const title = document.querySelector("h1");

// console.log(title.setAttribute("style", "color: #f00"));

//mostra todas as propriedades de estilo do "title" que podem ser utilizadas.
console.log(title.style);

console.log(title.style.color);

//acessar e modificar os estilos da "title = h1" por meio da propriedade
//"style"
title.style.margin = "50px";
title.style.color = "pink";
title.style.fontSize = "4rem";
title.style.margin = "";

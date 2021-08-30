/*
  Apenas 3 exercícios, mas que exigem um certo nível de conhecimento do que  
  vimos até aqui =)
*/

/*
  01

  - Valide o valor do input "username" à medida em que ele é digitado;
  - Ele deve conter: 
    - No mínimo 6 caracteres;
    - Apenas letras maiúsculas e/ou minúsculas;
  - Se o valor inserido não é válido, exiba um parágrafo laranja abaixo do  
    input com a seguinte mensagem: "O valor deve conter no mínimo 6 caracteres,  
    com apenas letras maiúsculas e/ou minúsculas";
  - Se o valor é válido, o parágrafo deve ser verde e exibir a mensagem  
    "Username válido =)";
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
  
  Dica: pesquise pelo método "insertAdjacentElement", no MDN;
*/
const form = document.querySelector("form");
// const inputUsername = document.querySelector("#username");
const button = document.querySelector("button");
const isAValidUsername = (username) => /^[a-zA-z]{6,}$/.test(username);
let p = document.createElement("p");

//INPUT VALIDATION
const inputValidation = (event) => {
  const username = event.target.value;
  button.insertAdjacentElement("afterend", p);

  if (isAValidUsername(username)) {
    p.setAttribute("class", "username-success-feedback");
    p.textContent = "Username válido =)";
    console.log("Valor Válido");
    return;
  }
  console.log("Valor Inválido");
  p.setAttribute("class", "username-help-feedback");
  p.textContent = `O valor deve conter no mínimo 6 caracteres,
   com apenas letras maiúsculas e/ou minúsculas`;
};

//SUBMIT VALIDATION
const submitValidation = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const submitFeedback = document.createElement("p");
  button.insertAdjacentElement("afterend", submitFeedback);

  if (isAValidUsername(username)) {
    submitFeedback.setAttribute("class", "submit-success-feedback");
    submitFeedback.textContent = "Dados enviados =)";
    return;
  }
  submitFeedback.setAttribute("class", "submit-help-feedback");
  submitFeedback.textContent = "Por favor, insira um username válido";
};

form.addEventListener("keyup", inputValidation);
form.addEventListener("submit", submitValidation);
/*
  02

  - Valide o envio do form;Por favor, insira um username válido
  - Se o username inserido no input é válido, no envio do form, exiba um  
    parágrafo verde abaixo do botão com a mensagem "Dados enviados =)";
  - Se no momento do envio, o valor do input é inválido, o parágrafo deve ser  
    vermelho e exibir "".
  - Use as classes disponíveis no arquivo style.css para colorir o parágrafo;
  - Não insira o parágrafo manualmente no index.html.
*/

/*
  03

  - Há algumas aulas, falamos sobre o método some;
  - Neste exercício, seu desafio será criar este método do zero;
  - Implemente uma função "some" que possui a mesma funcionalidade do método  
    some original;
  - A assinatura da invocação desta função deverá ser:
    - some([1, 2, 3], item => item > 2) - Retorna true;
    - some([1, 3, 5], item => item === 0) - Retorna false;
  - Se você não se lembra como o método some funciona, há 2 opções:
    1) Reassistir às seguintes aulas:
      - "Desenvolvendo um popup" - Aula 04-04 da etapa 5;
      - "Correção dos exercícios da aula 04 da etapa 05" - Aula 01-01 da etapa  
        6;
    2) Pesquisar no MDN.
  
  Spoiler alert: este tipo de exercício será frequente em etapas mais avançadas  
  do curso, onde falaremos sobre TDD. Vá se aquecendo =D
*/

const some = (numbers = [], item) => {
  if (numbers.includes(item)) {
    if (item > 2) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};

some([1, 2, 3]);

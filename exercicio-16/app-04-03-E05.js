//Comando copy
const paragraph = document.querySelector(".copy-me");

paragraph.addEventListener("copy", () => {
  console.log("Texto copiado!");
});

//Comando Mousemove
const div = document.querySelector(".box");

div.addEventListener("mousemove", (event) => {
  div.textContent = `X ${event.offsetX} | Y ${event.offsetY}`;
});

//Comando Wheel
document.addEventListener("wheel", (event) => {
  console.log(event.pageX, event.pageY);
});

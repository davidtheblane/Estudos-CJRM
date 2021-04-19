const article = document.querySelector("article");
// console.log(article.children);
// console.log(Array.from(article.children));

Array.from(article.children).forEach((element) => {
  element.classList.add("article-element");
});

const title = document.querySelector("h2");

//Parent
console.log(title.parentElement);
console.log(title.parentElement.parentElement);

//Sibling
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

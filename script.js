//Task (1)
const maindiv = document.getElementById("app");
console.log(maindiv.children);
console.log(maindiv.firstChild);
console.log(maindiv.lastChild);

const heading = document.getElementsByClassName("heading")[0];
console.log(heading.nextElementSibling);

//Task (2)
const card = document.createElement("div");
card.style.border = "1px solid black";
card.style.width = "fit-content";
const image = document.createElement("img");
image.setAttribute("src", "download.png");
const cardDescription = document.createElement("div");
cardDescription.classList.add("description");
const title = document.createElement("h1");
title.innerText = "This is the title";

const paragraph = document.createElement("p");
paragraph.innerText = "This is the paragraph";
cardDescription.appendChild(title);
cardDescription.appendChild(paragraph);
card.appendChild(image);
card.appendChild(cardDescription);
document.body.append(card);

//Task (3)
const lastul = maindiv.lastElementChild;
const firstli = lastul.firstChild;
const prvsibling = lastul.previousElementSibling;

//Task (4)
const newtitle = document.createElement("h1");
newtitle.innerText = "This is the new title";

cardDescription.replaceChild(newtitle, title);

paragraph.textContent = "this is the updated paragraph";

maindiv.classList.add("container");

const button = document.getElementById("event-button");
const originalText = button.innerText;

button.addEventListener("click", function (event) {
  if (button.classList.contains("clicked")) {
    button.innerText = originalText;
  } else button.innerText = "Clicked!";
  button.classList.toggle("clicked");
});

const input = document.getElementById("live-input");
const preview = document.getElementById("preview");

input.addEventListener("input", function (event) {
  preview.innerText = event.target.value;
});

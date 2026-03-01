const container=document.querySelector("#container");

const p=document.createElement("p");
p.style.color="red";
p.textContent="Hi!I am Red.";

const h3=document.createElement("h3");
h3.style.color="blue";
h3.textContent="Hi! I am blue h3.";

const div=document.createElement("div");
div.setAttribute("style","border: 1px solid black;background:pink;");

const divinside=document.createElement("div");
divinside.textContent="Hi,I am inside the div element";

const h1inside=document.createElement("h1");
h1inside.textContent="Me too,inside the div element";

div.appendChild(divinside);
div.appendChild(h1inside);
container.appendChild(p);
container.appendChild(h3);
container.appendChild(div);
// document.createElement()
// it accepts an HTML tag name and returns
// a new node with the element type.
let div = document.createElement("div");
div.innerHTML = "<p>Welcome to DOM.</p>";

// adding id or class attribute to div element
div.id = "title";
//div.className = "title";

// it will show the div elements on webpage because it is added
// in body element of the HTML page.
document.body.appendChild(div);

console.log(div);

//---------------------------------------------------------------------

// appendChild()
// the appenChild() can be used to move an existing child node to new position
// within the document.

let menu = document.getElementById("menu");
let list = document.createElement("li");

list.innerHTML = "Contact";

menu.appendChild(list);

//------------------------------------------------------------------------

// To get the text content of a node and its decendents, you can use the 
// textContent property.

console.log(menu.textContent);

// menu.innerHTML = "<h1>Hello</h1>";

menu.insertAdjacentElement("beforeend", "<li>Address</li>");
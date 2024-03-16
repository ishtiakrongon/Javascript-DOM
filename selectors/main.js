// Selecting Elements using DOM

// getElementbyID()
let msg = document.getElementById("message");
console.log(msg);

// getElementByName()
let btn = document.getElementsByName("language");
console.log(btn);

// getElementByTagName()

let tagName = document.getElementsByTagName("h2");
console.log(tagName);

// getElementsByClassName()

let className = document.getElementsByClassName("message");
console.log(className);

// The querySelector() method allows you to select the first element that
// matches one or more CSS selectors.
// it will select only the first element of a css class
let qrySelect = document.querySelector(".message");
console.log(qrySelect);


// use querySelectorAll() to select all elements of a same css class
let cont = document.getElementById("container");
let selectAll = cont.querySelectorAll(".msg2");
console.log(selectAll);

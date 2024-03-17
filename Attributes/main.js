let inputBox = document.getElementById("username");

// to see the all attributes
console.log(inputBox.attributes);

console.log(inputBox.getAttribute("type"));

// add new attribute

inputBox.setAttribute("class", "usr");
console.log(inputBox);

// check the existance of the attribute

console.log(inputBox.hasAttribute("class"));

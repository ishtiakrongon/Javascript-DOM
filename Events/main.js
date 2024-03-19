let displayMsg = () => console.log("Button Clicked");

// when the event occurs the web browser passed an event object to the
// event handler

// addEventListener() will register an event handler
// removeEventListener() method will remove an event handler

// addEventListener() -> accepts 3 arguments (event, function, useCapture)
// UseCapture -> boolean value[true or false]

let btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    console.log("Button Clicked!!!");
});
//variables

const screen = document.getElementById("screen-display");
const problemDisplay = document.getElementById("problem");
const solutionDisplay = document.getElementById("solution");

const btn = document.querySelectorAll("btn");

//operate function

function operate (a, b, e) {
    switch (e.target.innerText) {
        case ("+"):
            add(a, b);
            break;
        case ("-"):
            subtract(a, b);
            break;
        case ("*"):
            multiply(a, b);
            break;
        case ("/"):
            divide(a, b);
            break;
    }
}

//add function

function add (a, b) {
    return a + b;
}

//subtract

function subtract (a, b) {
    return a - b;
}

//multiply

function multiply (a, b) {
    return a * b;
}

//divide

function divide (a, b) {
    return a / b;
} 
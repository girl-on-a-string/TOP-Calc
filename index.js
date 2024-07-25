//variables

const screen = document.getElementById("screen-display");
const problemDisplay = document.getElementById("problem");
const solutionDisplay = document.getElementById("solution");

let btn = document.querySelectorAll(".btn");

//update display

function updateDisplay () {
    btn = Array.from(btn);
    btn.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("btn clicked");
            let input = btn.innerText;
            console.log(input);

            problemDisplay.innerText += input;
        });
    });
}

updateDisplay();

//btn handling

// function btnClick () {
//     btn = Array.from(btn);
//     btn.forEach(btn => {
//         btn.addEventListener("click", () => {
//             console.log("recieved");
//         });
//     });
// }

// btnClick();

//operate function

function operate (a, b, e) {
    switch (btn) {
        case ("+"):
            add(a, b);
            console.log("add");
            break;
        case ("-"):
            subtract(a, b);
            console.log("subtract");
            break;
        case ("*"):
            multiply(a, b);
            console.log("multiply");
            break;
        case ("/"):
            divide(a, b);
            console.log("divide");
            break;
    }
}

//add

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
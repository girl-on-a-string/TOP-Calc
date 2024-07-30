//variables

let genScreen = document.getElementById("screen-display");
let problemDisplay = document.getElementById("problem");
let solutionDisplay = document.getElementById("solution");

let value;

let currentInt = 0; //current inputed number
let currentTotal = 0; // current total amount
let previousOperator; // last inputed operator

// operator handling

function operatorHandling (value) {
    switch(value) {
        case "AC":
            console.log("clear");
            genScreen.innerText = "";
            break;
        case "+/-":
            if (value > 0) {
                
            } else if (value < 0) {

            } else {
                return;
            }
            console.log("reverse sign");
            break;
        case "%":
            console.log("percentage");
            break;
        case "/":
            currentTotal /= currentInt;
            console.log("divide");
            break;
        case "*":
            currentTotal *= currentInt;
            console.log("multiply");
            break;
        case "-":
            currentTotal -= currentInt;
            console.log("subtract");
            break;
        case "+":
            currentTotal += currentInt;
            console.log("addition");
            break;
        case ".":
            let decimal = document.getElementById("decimal").value;
            if (decimal > 1) { //error if there's more than one decimal
                console.log(false);
            }
            console.log("decimal");
            break;
        case "=":
            if (previousOperator === null) {
                return;
            } else {
                evaluateExpression();
                currentInt = currentTotal;
                currentTotal = 0;
            }
            console.log("equals");
            break;
    }
}

operatorHandling(value);

// do the math

function evaluateExpression (value) {
    solutionDisplay += currentTotal;
    problemDisplay += currentInt;
}

//display numbers for problem and solution

function display (value) {
    if ("=" === false) {
        //if equals is not pushed then display it in problem section
    } else {
        //if equals is hit put product in solution display
    }
}

// btn click handling

function btnClick (value) {
    if (isNaN(value)) {
        console.log("operator");
        operatorHandling(value);
    } else {
        console.log("num");
        currentInt += document.querySelectorAll(".btn").value;
    }

    genScreen.innerText += currentInt;
}

//make everything work

function init () {
    //button click handling
    let btn = document.getElementsByClassName("btn");
    btn = Array.from(btn);
    btn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            btnClick(e.target.innerText);
            console.log(e.target.innerText);
        });
    });
}

init();



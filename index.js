//variables

const problemDisplay = document.getElementById("problem");
const solutionDisplay = document.getElementById("solution");

let value;

let currentInt; //current inputed number
let currentTotal = 0; // current total amount
let previousOperator; // last inputed operator

// btn click handling

function btnClick (value) {
    if (isNaN(value)) {
        console.log("operator");
        operatorHandling(value);
    } else {
        console.log("num");
        numHandling();
    }

}

btnClick();

// operator handling

function operatorHandling (value) {
    switch(value) {
        case "AC":
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
            evaluateExpression();
            break;
    }
}

operatorHandling(value);

//num handling

function numHandling (value) {

}

// equals sign click handling

function evaluateExpression (value) {

}

//make everything work

function init () {
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



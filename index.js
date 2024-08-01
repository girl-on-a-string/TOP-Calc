//section 1
//variables

let genScreen = document.getElementById("screen-display");
let problemDisplay = document.getElementById("problem");
let solutionDisplay = document.getElementById("solution");

let value; //stores any inputted value
let firstIntVal = ""; //stores first inputted number
let secondIntVal = ""; //stores second inputted number
let OpVal; //stores inputted operator
let solutionVal = ""; //stores the solution of the problem

let isFirstVal = false; //status of first val
let isSecondVal = false; //status of second val
let isEqualsPressed = false; //status of the equasion

let btn = document.getElementsByClassName("btn"); 
btn = Array.from(btn); //so I can add an event listener later

//section 2
//btn click handling

function btnClick (value) {
    if (isNaN(value)) {
        operate(value);
    } else {
        console.log(value);
        if (isFirstVal == false) { //if there's no first val store num in firstIntVal
            firstIntVal += value;

            if (firstIntVal == 0) { //if the first digit in the number is zero don't show it

            }

            console.log(`first value: ${firstIntVal}`);
        } else if (isFirstVal == true && isSecondVal == "") { //if there is a firstIntVal store this val in secondIntVal
            value = 0;
            secondIntVal += value;
        }
    }
}

btnClick(value);

//section 3
//operator handling, doing the math

function operate (value) {
    switch (value) {
        case "AC":
            problemDisplay.innerText = "";
            solutionDisplay.innerText = "";

            firstIntVal = "";
            secondIntVal = "";
            OpVal = "";

            console.log("clear");
            break;
        case "+/-":
            console.log("reverse");

            let a = value * 2;
            
            if (value > 0) {
                value = value - a;
                console.log(value);
            } else if (value < 0) {
                value = value + a;
                console.log(value);
            }

            break;
        case "%":
            console.log("percentage");
            break;
        case "/":
            console.log("divide");
            break;
        case "*":
            console.log("multiply");
            break;
        case "-":
            console.log("subtract");
            break;
        case "+":
            console.log("add");
            break;
        case ".":
            console.log("decimal");
            break;
        case "=":
            console.log("evaluate");
            isEqualsPressed = true;
            break;
    }
}

//section 4
//display numbers

function display (value) {
    if (isEqualsPressed == true) { //when equals is pressed display solution in solution in solution space
        solutionDisplay += value;
    } else { //if equals hasn't been pressed store problem in problem space
        problemDisplay += value;
    }
}

//section 5
//initialize, get everything working

function init () {
    btn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            value = e.target.innerText
            btnClick(value);
            display(value);
        });
    });
}

init();



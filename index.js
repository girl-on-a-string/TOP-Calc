//section 1
//variables

let genScreen = document.getElementById("screen-display");
let problemDisplay = document.getElementById("problem");
let solutionDisplay = document.getElementById("solution");

let value; //stores inputted value of btns 
let firstIntVal = ""; //stores first inputted number
let secondIntVal = ""; //stores second inputted number
let OpVal; //stores inputted operator
let solutionVal = ""; //stores the solution of the problem

let isFirstVal = false; //status of first val
let isSecondVal = false; //status of second val
let isEqualsPressed = false; //status of the equasion
let isOpVal = false; //status of the operator

let btn = document.getElementsByClassName("btn"); 
btn = Array.from(btn); //so I can add an event listener later

//section 2
//btn click handling

function btnClick (value) {
    if (isNaN(value)) {
        isOpVal = true;
        OpVal = value;
        operate(value);
        console.log(`operator clicked: ${OpVal}`);
    } else {
        console.log(`number clicked: ${value}`);
        if (isFirstVal == false) {
            getFirstValue(value);
        } 

        if (isOpVal == true) {
            getSecondValue(value);
        }
    }
}

btnClick(value);

//section
//get values

function getFirstValue (value) {
    firstIntVal += value;
    console.log(`first value: ${firstIntVal}`);
}

function getSecondValue (value) {
    if ( isOpVal == true) {
        secondIntVal = "";
        secondIntVal += value;
        console.log(`second value: ${secondIntVal}`);
    }
}

//section 3
//operator handling, doing the math

function operate (value) {
    switch (value) {
        case "AC":
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
            if (firstIntVal == 0 || secondIntVal == 0) { //handle division by zero errors
                console.log("error");
            }
            solutionVal = firstIntVal / secondIntVal;
            break;
        case "x":
            console.log("multiply");
            solutionVal = firstIntVal * secondIntVal;
            break;
        case "-":
            console.log("subtract");
            solutionVal = firstIntVal - secondIntVal;
            break;
        case "+":
            console.log("add");
            solutionVal = firstIntVal + secondIntVal;
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
    // if (isEqualsPressed == true || isEqualsPressed !== true && value === "AC") {
    //     problemDisplay.innerText = "";
    //     solutionDisplay.innerText = "";
    //     console.log(true);
    // }

    if (isEqualsPressed == true) { //when equals is pressed display solution in solution in solution space
        solutionDisplay.innerText += solutionVal;
    } else { //if equals hasn't been pressed store problem in problem space
        problemDisplay.innerText += value;

        if (value == "AC") {
            problemDisplay.innerText = "";
            solutionDisplay.innerText = "";
        }
    }
}

//section 5
//initialize, get everything working

function init () {
    btn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            value = e.target.innerText;
            btnClick(value);
            display(value);
        });
    });
}

init();



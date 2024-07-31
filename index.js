//section 1
//variables

let genScreen = document.getElementById("screen-display");
let problemDisplay = document.getElementById("problem");
let solutionDisplay = document.getElementById("solution");

let value; //stores any inputted value
let intVal; //stores inputted int value
let OpVal; //stores inputted operator

let firstIntVal = ""; //stores first inputted number
let secondIntVal = ""; //stores second inputted number

let isFirstVal = false; //status of first val
let isSecondVal = false; //status of second val

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
            console.log(`first value: ${firstIntVal}`)
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
            console.log("clear");
            break;
        case "+/-":
            console.log("reverse");
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
            break;
    }
}

//section 4
//initialize, get everything working

function init () {
    btn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            value = e.target.innerText
            btnClick(value);
        });
    });
}

init();



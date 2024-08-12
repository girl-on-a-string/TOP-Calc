//section 1 
//variables

let problemDisplay = document.getElementById("problem");
let solutionDisplay = document.getElementById("solution");

let value; //stores inputted value of btns 
let firstIntVal = ""; //stores first inputted number
let secondIntVal = ""; //stores second inputted number
let OpVal = ""; //stores inputted operator
let solutionVal = ""; //stores the solution of the problem

let isEqualsPressed = false;

let btn = document.getElementsByClassName("btn"); 
btn = Array.from(btn); //so I can add an event listener later

//section 2
//button click handling

function btnClick (value) {
    if (isNaN(value)) { //if the value is not a number (operator)
        OpVal = value;

        if (value == "=") { 
            console.log("evaluate");
            isEqualsPressed = true;
        }

        if (value == "AC") { //clear the display
            console.log("Clear");
        }

        if (value == ".") { //decimal handling
            console.log("decimal");
        }

        if (value == "+/-") { // sign conversion handling
            console.log("reverse");
        }

        operate(value);
    } else { //if the number is an integer
        if (OpVal == "" && secondIntVal == "") {
            firstIntVal += value;
        }
    }
}

//section 3
//storing numbers

function numHandling (value) { //handle what happens with decimals

}

function getValue1 (value) {

}

function getValue2 (value) {

}

//section 4
//operator handling

function operate (value) {
    switch (value) {
        case "+":
            solutionVal = parseFloat(firstIntVal) + parseFloat(secondIntVal);
            console.log("add");
            break;
        case "-":
            solutionVal = parseFloat(firstIntVal) - parseFloat(secondIntVal);
            console.log("subtract");
            break;
        case "x":
            solutionVal = parseFloat(firstIntVal) * parseFloat(secondIntVal);
            console.log("multiply");
            break;
        case "/":
            solutionVal = parseFloat(firstIntVal) / parseFloat(secondIntVal);
            console.log("divide");
            break;
    }
}

//section
//display everything

function display () {
    if (isEqualsPressed == false) { //problem display
        problemDisplay.innerText += value;
    }

    if (isEqualsPressed == true) { //solution display
        solutionDisplay.innerText = solutionVal;
    }
}

//section
//put everything together

btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        value = e.target.innerText;
        btnClick(value);
        display(value);
    })
});
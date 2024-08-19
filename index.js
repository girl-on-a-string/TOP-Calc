//section 1 
//variables

let problemDisplay = document.getElementById("problem");
let solutionDisplay = document.getElementById("solution");

let value; //stores inputted value of btns 
let firstIntVal = ""; //stores first inputted number
let secondIntVal = ""; //stores second inputted number
let OpVal = ""; //stores inputted operator
let solutionVal = 0; //stores the solution of the problem

let isEqualsPressed = false;

let btn = document.getElementsByClassName("btn"); 
btn = Array.from(btn); //so I can add an event listener later

//section 2
//button click handling

function btnClick (value) {
    if (isNaN(value)) { //if the value is not a number (operator)
        console.log(`operator: ${OpVal}`);

        if (value == "+" || value == "-" || value == "x" || value == "/") {
            OpVal = value;
        }

        if (value == "=") { 
            console.log("evaluate");

            if (secondIntVal !== "" && firstIntVal !== "") { //if both values exist, preform math
                isEqualsPressed = true;
                operate(OpVal);
                console.log(`solution: ${solutionVal}`);
            } else {
                if (firstIntVal === "" || secondIntVal === "") {
                    solutionDisplay.innerText = "Error: only one value";
                } 

                // if (isNaN(value) > 2) {
                //     solutionDisplay.innerText = "Error: too many operators";
                // }
            }
        }

        if (value == "AC") { //clear the display, reset everything
            solutionDisplay.innerText = "";
            problemDisplay.innerText = "";

            firstIntVal = "";
            secondIntVal = "";
            OpVal = "";

            isEqualsPressed = false;

            console.log("Cleared");
        }

        if (value == ".") { //decimal handling
            console.log("decimal");
        }

        if (value == "+/-") { // sign conversion handling
            if (firstIntVal == "") { //if first value is empty
                signConversion(value);
            } else { //if first value isn't empty
                signConversion(value);
            }

            console.log("reverse");
        }

        if (value == "←") {
            let displayLength = problemDisplay.innerText;
            displayLength.slice(0, displayLength.length - 1);
            console.log("backspace");
        }

    } else { //if the number is an integer
        getValue1(value);
        getValue2(value);
    }
}

//section 3
//storing numbers

function getValue1 (value) {
    if (OpVal == "" && secondIntVal == "") {
        firstIntVal += value;
        firstIntVal = parseFloat(firstIntVal); //convert to number
    } else {
        firstIntVal += "";
        firstIntVal = parseFloat(firstIntVal);
    }
    console.log(`first val: ${firstIntVal}`);
}

function getValue2 (value) {
    if (OpVal !== "" && firstIntVal !== "") {
        secondIntVal += value;
        secondIntVal = parseFloat(secondIntVal); //convert to number
    }
    console.log(`second val: ${secondIntVal}`);
}

//section 4
//operator handling

function operate (OpVal) {
    // console.log(firstIntVal, typeof(firstIntVal));
    // console.log(secondIntVal, typeof(secondIntVal));

    console.log(OpVal);

    if (firstIntVal !== "" && secondIntVal !== "") {
        switch (OpVal) {
            case "+":
                solutionVal = firstIntVal + secondIntVal;
                console.log(`add (${value})`);
                break;
            case "-":
                solutionVal = firstIntVal - secondIntVal;
                console.log(`subtract (${value})`);
                break;
            case "x":
                solutionVal = firstIntVal * secondIntVal;
                console.log(`multiply (${value})`);
                break;
            case "/":
                if (secondIntVal === "0") { //division by 0 handling
                    solutionDisplay.innerText += "Error: Division by 0";
                    solutionVal = 0; //reset solution
                    return;
                }
                solutionVal = firstIntVal / secondIntVal;
                console.log(`divide (${value})`);
                break;
            default:
                solutionVal = 0;
                console.log("defaulted");
        }
    }
}

function signConversion (value) {
    let double = value * 2;

    if (value > 0) { //convert to negative
        value = value - double;
    } 

    if (value < 0) { //convert to positive
        value = value + double;
    }

    if (value === "0") { //do nothing if it's zero
        return;
    }

    console.log(`reversed: ${value}`);
}

//section 5
//display everything

function display () {
    if (isEqualsPressed == false) { //problem display
        if (value !== "AC") {
            problemDisplay.innerText += value;
        }
    }

    if (isEqualsPressed == true) { //solution display
        solutionDisplay.innerText = solutionVal;
    }
}

//section 6
//put everything together

btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        value = e.target.innerText;
        btnClick(value);
        display(value);
    })
});



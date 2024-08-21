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

        if (value == "+" || value == "-" || value == "x" || value == "/") { //to use in operate ()
            OpVal = value;
        }

        if (value == "=") { 
            console.log(`evaluate (${value})`);

            if (secondIntVal !== "" && firstIntVal !== "") { //if both values exist, preform math
                isEqualsPressed = true;
                operate(OpVal);
                console.log(`solution: ${solutionVal}`);
            } else {
                if (firstIntVal === "" || secondIntVal === "") {
                    solutionDisplay.innerText = "Error: only one value";
                } 
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

            if (problemDisplay.innerText.includes(".")) { //disable adding another decimal if there already is one in the display

            }
        }

        if (value == "+/-") { // sign conversion handling
            if (firstIntVal !== "" && secondIntVal == "")  { //convert first val
                signConversion(firstIntVal);
                console.log(`reversed ${firstIntVal}`);
            }

            if (secondIntVal !== "") { //convert second val
                signConversion(secondIntVal);
                console.log(`reversed ${secondIntVal}`);
            }

            if (solutionVal !== 0) { //don't do anything if solution is present
                return;
            }
        }

        if (value == "←") { // delete by one value
            let displayLength = problemDisplay.innerText;
            toString(displayLength);
            displayLength = displayLength.substring(0, displayLength.length - 1);
            problemDisplay.innerText = displayLength;
            console.log("backspace");
            console.log(`result: ${displayLength}`);
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
    if (firstIntVal !== "" && secondIntVal !== "" || solutionVal !== 0) {
        switch (OpVal) {
            case "+":
                solutionVal = firstIntVal + secondIntVal;
                console.log(`add (${OpVal})`);
                break;
            case "-":
                solutionVal = firstIntVal - secondIntVal;
                console.log(`subtract (${OpVal})`);
                break;
            case "x":
                solutionVal = firstIntVal * secondIntVal;
                console.log(`multiply (${OpVal})`);
                break;
            case "/":
                if (secondIntVal === "0") { //division by 0 handling
                    solutionDisplay.innerText += "Error: Division by 0";
                    solutionVal = 0; //reset solution
                    return;
                }
                solutionVal = firstIntVal / secondIntVal;
                console.log(`divide (${OpVal})`);
                break;
            default:
                solutionVal = 0;
                console.log("defaulted");
        }
    }
}

//convert signs

function signConversion (a) {
    let double = a * 2;

    //convert to positive

    if (a < 0) {
        a = a + double;
        console.log(`converted ${a} to positive`);
    }

    //convert to negative

    if (a > 0) {
        a = a * -1;
        console.log(`converted ${a} to negative`);
    }
}

//section 5
//display everything

function display () {
    if (isEqualsPressed == false) { //problem display
        if (value !== "AC" && value !== "←" && value !== "+/-") {
            problemDisplay.innerText += value;
        }

        if (value === "←" || value === "+/-") {
            return;
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



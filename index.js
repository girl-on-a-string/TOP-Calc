//section 1 
//variables

let problemDisplay = document.getElementById("problem");
let solutionDisplay = document.getElementById("solution");

let value; //stores inputted value of btns 
let firstIntVal = ""; //stores first inputted number
let secondIntVal = ""; //stores second inputted number
let OpVal = ""; //stores inputted operator
let solutionVal = 0; //stores the solution of the problem

let bufferNum = ""; //stores third value temporarily
let bufferOp = ""; //stores second op val temporarily

let score = 0; //tracks how many times op has been pressed

let isEqualsPressed = false;
let isThirdValue = false;

let btn = document.getElementsByClassName("btn"); 
btn = Array.from(btn); //so I can add an event listener later

//section 2
//button click handling

function btnClick (value) {
    if (isNaN(value)) { //if the value is not a number (operator)

        if (value == "+" || value == "-" || value == "x" || value == "/") { //to use in operate ()
            OpVal = value;
            score += 1;
            console.log(`score = ${score}`);
        }

        if (value == "=") { 
            console.log(`evaluate (${value})`);
            isEqualsPressed = true;
        }

        if (value == "AC") { //clear the display, reset everything
            solutionDisplay.innerText = "";
            problemDisplay.innerText = "";

            firstIntVal = "";
            secondIntVal = "";
            solutionVal = 0;
            OpVal = "";

            score = 0;

            isEqualsPressed = false;
            isThirdValue = false;

            console.log("Cleared");
        }

        if (value == ".") { //decimal handling
            console.log("decimal");

            if (problemDisplay.innerText.includes(".")) { //disable adding another decimal if there already is one in the display

            }
        }

        if (value == "+/-") { // sign conversion handling
            if (isEqualsPressed === false) {
                if (firstIntVal !== "" && secondIntVal == "")  { //convert first val
                    signConversion(firstIntVal);
                    console.log(`reversed ${firstIntVal}`);
                }
    
                if (secondIntVal !== "") { //convert second val
                    signConversion(secondIntVal);
                    console.log(`reversed ${secondIntVal}`);
                }
            } else {
                console.log("equation evaluated, nothing to do");
            }
        }

        if (value == "←") { // delete by one value
            if (firstIntVal !== "" && secondIntVal === "") { //deleting first int val
                backspace(firstIntVal);
                console.log("editing first val");
            }

            if (secondIntVal !== "") { //deleting second int val
                backspace(secondIntVal);
                console.log("editing second val");
            }

            if (OpVal !== "") { //deleting operator
                backspace(secondIntVal);
                console.log("editing operator");
            }
        }

    } else { //if the number is an integer
        if (isThirdValue == false) {
            getValue1(value);
            getValue2(value);
        }

        if (solutionVal !== 0 && score > 1) {
            OpVal = "";
            secondIntVal = "";
            thirdValueHandling(value);
        } 

        if (firstIntVal !== "" && secondIntVal !== "" && OpVal !== "") { // calculate the value the second each number is inputted, and only display once = is pressed
            operate(OpVal);
            console.log(`solution: ${solutionVal}`);
        }
    }
}

//section 3
//storing numbers

function getValue1 (value) {
    if (OpVal == "" && secondIntVal == "") {
        firstIntVal += value;
        firstIntVal = parseFloat(firstIntVal); //convert to number (instead of string)
    } else {
        firstIntVal += "";
        firstIntVal = parseFloat(firstIntVal);
    }
    console.log(`first val: ${firstIntVal}`);
}

function getValue2 (value) {
    if (OpVal !== "" && firstIntVal !== "" && score < 2) {
        secondIntVal += value;
        secondIntVal = parseFloat(secondIntVal); //convert to number (instead of string)
    }
    console.log(`second val: ${secondIntVal}`);
}

//section 3.5
//handling operations with over two integers. ex: 8+8+8 or 9+9+9+9

function thirdValueHandling(value) { 
    isThirdValue = true;

    let isFirstVal = false;

    if (solutionVal !== 0) { //store NEW first int val
        firstIntVal = solutionVal;
        firstIntVal = parseFloat(firstIntVal);
        // solutionVal = 0;
        isFirstVal = true;
        console.log("");
        console.log(`NEW first val: ${firstIntVal}`);
    } else {
        firstIntVal += "";
        firstIntVal = parseFloat(firstIntVal);
    }

    if (isFirstVal == true) { // store NEW second int val
        secondIntVal += value;
        parseFloat(secondIntVal);
        console.log(`NEW second val: ${secondIntVal}`);
    }
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
                if (secondIntVal == 0) { //division by 0 handling
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

//backspace

function backspace(a) {
    let displayLength = problemDisplay.innerText;
    toString(displayLength);
    
    displayLength = displayLength.substring(0, displayLength.length - 1);
    problemDisplay.innerText = displayLength;

    a = toString(a);
    a = a.substring(0, a.length - 1);

    if (displayLength.charAt(0) === "") { // reset if you completely delete everything, just like AC btn
        solutionDisplay.innerText = "";
        problemDisplay.innerText = "";

        firstIntVal = "";
        secondIntVal = "";
        OpVal = "";

        isEqualsPressed = false;

        console.log("cleared");
    }

    if (a !== "") {

    }

    console.log(`backspace result: ${a}`);
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


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
        
        if (value !== "AC" || value !== "=") {
            OpVal = value;
            operate(OpVal);
        }  

        if (value == "=") {
            reset();
        }

        console.log(`operator clicked: ${OpVal}`);
    } else {
        // console.log(`number clicked: ${value}`);
        if (isFirstVal == false || isOpVal == false) {
            getFirstValue(value);
        } 

        if (firstIntVal !== "" && isOpVal == true) {
            getSecondValue(value);
        }
    }
}

//section
//get values

function getFirstValue (value) {
    if (isSecondVal == false || OpVal == "") {
        firstIntVal += value;
        console.log("getting first value");
    } else if (isSecondVal == true || value == "AC" || OpVal !== "") {
        firstIntVal += "";
        console.log("first value done");
    }

    console.log(`first value: ${firstIntVal}`);
}

function getSecondValue (value) {
    // if (firstIntVal !== "" && isOpVal == true) {
        isSecondVal = true;
        secondIntVal += value;
        console.log(`second value: ${secondIntVal}`);
    // }
}

//section 3
//operator handling, doing the math

function operate (value) {
    console.log("operating");

    if (firstIntVal == "" || secondIntVal == "" || OpVal == "") {
        console.log("nothing to evaluate");
        return;
    }

    switch (value) {
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
            solutionVal = parseFloat(firstIntVal) / parseFloat(secondIntVal);
            break;
        case "x":
            console.log("multiply");
            solutionVal = parseFloat(firstIntVal) * parseFloat(secondIntVal);

            if (value == 0) {
                solutionVal = 0;
            }

            break;
        case "-":
            console.log("subtract");
            solutionVal = parseFloat(firstIntVal) - parseFloat(secondIntVal);
            break;
        case "+":
            console.log("add");
            solutionVal = parseFloat(firstIntVal) + parseFloat(secondIntVal);
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

function evaluate () {

}

function clearDisplay () {
    OpVal = "";
    firstIntVal = "";
    secondIntVal = "";

    problemDisplay.innerText = "";
    solutionDisplay.innerText = "";
}

//section 4
//display numbers

function display (value) {
    if (isEqualsPressed == true) { //when equals is pressed display solution in solution in solution space
        console.log("displaying solution");
        solutionDisplay.innerText += solutionVal;
    } else { //if equals hasn't been pressed store problem in problem space
        console.log("displaying problem");
        problemDisplay.innerText += value;
    }

    if (value == "AC") {
        clearDisplay();
        console.log("cleared");
    }
}

//section 5
//get everything working

btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        value = e.target.innerText;

        btnClick(value);
        display(value);
    });
});

//section 6
//reset everything

function reset () {
    isEqualsPressed = false;
    isFirstVal = false;
    isSecondVal = false;
    isOpVal = false;
}






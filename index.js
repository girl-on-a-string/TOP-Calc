//section 1
//variables

let genScreen = document.getElementById("screen-display");
let problemDisplay = document.getElementById("problem");
let solutionDisplay = document.getElementById("solution");

let value; //stores any inputted value
let intVal; //stores inputted int value
let OpVal; //stores inputted operator

let btn = document.getElementsByClassName("btn"); 
btn = Array.from(btn); //so I can add an event listener later

//section 2
//btn click handling

function btnClick (value) {
    btn.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log("click");
            value = btn.innerText;
            console.log(value);

            //

            operate(value);
        })
    });
}

btnClick(value);

//section 3
//operator handling, doing the math

function operate (value) {
    if (isNaN(value)) {
        intVal = btn.innerText;
    } else {
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
}



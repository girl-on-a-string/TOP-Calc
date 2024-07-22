//variables

const screen = document.getElementById("screen-display");
const problemDisplay = document.getElementById("problem");
const solutionDisplay = document.getElementById("solution");

const clearBtn = document.getElementById("clear");
const posnegBtn = document.getElementById("posneg");
const percentBtn = document.getElementById("percent");

const divisionBtn = document.getElementById("divide");
const multiplicationBtn = document.getElementById("multiply");
const subtractBtn = document.getElementById("minus");
const additionBtn = document.getElementById("plus");
const equalsBtn = document.getElementById("equals");

const decimalBtn = document.getElementById("decimal");

const container = document.getElementById("calc");
let btn = Array.from(document.querySelectorAll(".btn"));

let operator = Array.from(document.querySelectorAll(".operator"));

let num1 = 0;
let num2 = 0;

//display numbers on screen

btn.map(btn => {
    btn.addEventListener("click", (e) => {
        // console.log("click");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);

        switch (e.target.innerText) {
            default:
                screen.innerText += e.target.innerText;
        }
    });
});

//populate screen 

function populate () {
    console.log("populate");

}

//other buttons

function decimal () {

}

//number buttons

//operator buttons

//add 

function add (num1, num2) {
    console.log("add");
    return num1 + num2;
}

//subtract

function subtract (num1, num2) {
    console.log("subtract");
    return num1 - num2;
}

//multiply 

function multiply (num1, num2) {
    console.log("multiply");
    return num1 * num2;
}

//divide

function divide (num1, num2) {
    console.log("divide");
    return num1 / num2;
}

//operate

function operate (num1, num2) {
    console.log("operate");
    
    populate();
}
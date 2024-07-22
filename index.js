//variables

const screen = document.getElementById("screen-display");

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
let num = document.querySelectorAll(".num");

let num1 = 0;
let num2 = 0;

//let value = document.getElementsByClassName("num").value;

num.forEach(num => {
    num.addEventListener("click", () => {
        
        console.log("click");
    });
});

//populate screen 

function populate () {
    console.log("populate");
}

//other buttons

//number buttons

//operator buttons

//add 

function add (num1, num2) {
    console.log("add");
    console.log(num1 + num2);
}

//subtract

function subtract () {
    console.log("subtract");
}

//multiply 

function multiply () {
    console.log("multiply");
}

//divide

function divide () {
    console.log("divide");
}

//operate

function operate () {
    console.log("operate");
    populate();
}
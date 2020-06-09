import {add, subtract, multiply, divide} from "./utils/calculations.js";

//mit buttons verbinden - ansonsten Zeile 4-14 löschen
const buttonPlus = document.getElementById("buttonPlus")
buttonPlus.addEventListener("click", () => add());

const buttonMinus = document.getElementById("buttonMinus")
buttonMinus.addEventListener("click", () => subtract());

const buttonMulti = document.getElementById("buttonMulti")
buttonMulti.addEventListener("click", () => multiply());

const buttonDivide = document.getElementById("buttonDivide")
buttonDivide.addEventListener("click", () => divide());



/*

const firstUserInput = Number(prompt("Enter first number, please!"));
const secondUserInput = Number(prompt("Enter second number, please"));
const operator = prompt("Enter an operator, please: +, -, *, /");

alert(`The result is: ${calculate(firstUserInput, secondUserInput, operator)}`);

function calculate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case "+": return add(firstNumber, secondNumber);
        case "-": return sub(firstNumber, secondNumber);
        case "*": return multi(firstNumber, secondNumber);
        case "/": return divi(firstNumber, secondNumber);
        default: return new Error("Nope, that's not working!")
    }
}

 */
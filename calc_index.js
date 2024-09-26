const display = document.getElementById('display');
let inputA = null;   // First operand
let operator = null; // Operator to be used

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    inputA = null;
    operator = null;
}

function setOperator(op) {
    if (inputA === null) {
        // Get the first input before setting the operator
        inputA = parseFloat(display.value);
        operator = op;
        display.value = ""; // Clear the display for next input
    }
}

function calculate() {
    if (inputA !== null && operator !== null) {
        const inputB = parseFloat(display.value);
        let result;

        // Perform the calculation based on the operator
        if (operator === '+') {
            result = inputA + inputB;
        } else if (operator === '-') {
            result = inputA - inputB;
        } else if (operator === '*') {
            result = inputA * inputB;
        } else if (operator === '/') {
            if (inputB === 0) {
                display.value = "Error: Division by 0"; // Handle division by zero
                return;
            }
            result = inputA / inputB;
        }

        display.value = result; // Show the result in the display
        // Reset the inputs for a new calculation
        inputA = null;
        operator = null;
    }
}

// Define operator functions
function add() {
    setOperator('+');
}

function subtract() {
    setOperator('-');
}

function multiply() {
    setOperator('*');
}

function divide() {
    setOperator('/');
}

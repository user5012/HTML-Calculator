// Function to handle number button clicks

number1 = 0;
number2 = 0;
praksi = 0;

function handleNumber(num) {
    if (praksi === 0) {
        number1 = number1 * 10 + num;
    } else {
        number2 = number2 * 10 + num;
    }
    updateDisplay();
}

// Function to clear values and reset the calculator
function clearValues() {
    number1 = 0;
    number2 = 0;
    praksi = 0;
    updateDisplay()
    alert("Cleared!")
}

// Function to set the operation
function setOperation(operation) {
    if (number1 === 0) {
        alert("Haven't set a value to number 1");
    } else {
        praksi = operation;
        updateDisplay();
    }
}

// Function to calculate and display the result
function calculateResult() {
    if (number1 === 0) {
        alert("Haven't set a value to number 1");
        return;
    }

    let result;

    switch (praksi) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                alert("Division by zero is not allowed");
                return;
            }
            result = number1 / number2;
            break;
        default:
            alert("Invalid operation");
            return;
    }

    document.getElementById("output").textContent = result;
}

// Function to update the display with the current values and operation
// Function to update the "output" label with the current values and operation
function updateDisplay() {
    const outputLabel = document.getElementById("output");
    outputLabel.textContent = `${number1} ${praksi} ${number2}`;
}
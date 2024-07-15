const display = document.getElementById("display");

function ApendToDisplay(input) {
    display.value += input;
}

function clearValues() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
        alert("Error: " + error)
    }
}
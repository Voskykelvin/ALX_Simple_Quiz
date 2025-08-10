// 1. Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Utility to get input values safely
function getNumbers() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// 2. Attach Event Listeners
document.getElementById('add').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = add(number1, number2);
});

document.getElementById('subtract').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = subtract(number1, number2);
});

document.getElementById('multiply').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = multiply(number1, number2);
});

document.getElementById('divide').addEventListener('click', function() {
    const { number1, number2 } = getNumbers();
    document.getElementById('calculation-result').textContent = divide(number1, number2);
});

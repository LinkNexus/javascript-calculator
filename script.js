const resultScreen = document.querySelector('.result'),
    operationScreen = document.querySelector('.operation'),
    deleteButton = document.querySelector('.delete'),
    clearButton = document.querySelector('.clear'),
    multiplyButton = document.querySelector('.multiplication'),
    divisionButton = document.querySelector('.division'),
    additionButton = document.querySelector('.addition'),
    subtractionButton = document.querySelector('.subtraction'),
    inputButtons = document.querySelectorAll('.input'),
    plusOrMinusButton = document.querySelector('.plus-or-minus'),
    squareRootButton = document.querySelector('.square-root'),
    equalToButton = document.querySelector('.equal-to');

let firstNumber,
    secondNumber;

for (const inputButton of inputButtons) {
    inputButton.addEventListener('click', function () {
        resultScreen.value += inputButton.innerText;
        console.log(1);
    })
}

deleteButton.addEventListener('click', function () {
    resultScreen.value = resultScreen.value.slice(0, -1);
})

clearButton.addEventListener('click', function () {
    resultScreen.value = '';
})

plusOrMinusButton.addEventListener('click', function () {
    resultScreen.value *= -1;
})

// Square Root Function

function squareRoot() {
    if (resultScreen.value === '') {
        return;
    }

    resultScreen.value = Math.sqrt(parseFloat(resultScreen.value)).toFixed(7);
}

squareRootButton.addEventListener('click', squareRoot);

// Addition Function

function addition() {
    if (resultScreen.value !== '') {
        firstNumber = parseFloat(resultScreen.value);
    } else {
        return;
    }

    resultScreen.value = '';

    equalToButton.addEventListener('click', () => {
        secondNumber = parseFloat(resultScreen.value);

        if (!isNaN(firstNumber + secondNumber)) {
            resultScreen.value = firstNumber + secondNumber;
        } else {
            resultScreen.value = 'Syntax Error';
        }
    })
}

additionButton.addEventListener('click', addition);

// Subtraction Function

function subtraction() {
    if (resultScreen.value !== '') {
        firstNumber = parseFloat(resultScreen.value);
    } else {
        return;
    }

    resultScreen.value = '';

    equalToButton.addEventListener('click', () => {
        secondNumber = parseFloat(resultScreen.value);

        if (!isNaN(firstNumber - secondNumber)) {
            resultScreen.value = firstNumber - secondNumber;
        } else {
            resultScreen.value = 'Syntax Error';
        }
    })
}

subtractionButton.addEventListener('click', subtraction);

// Multiplication Function

function multiplication() {
    if (resultScreen.value !== '') {
        firstNumber = parseFloat(resultScreen.value);
    } else {
        return;
    }

    resultScreen.value = '';

    equalToButton.addEventListener('click', () => {
        secondNumber = parseFloat(resultScreen.value);

        if (!isNaN(firstNumber * secondNumber)) {
            resultScreen.value = firstNumber * secondNumber;
        } else {
            resultScreen.value = 'Syntax Error';
        }
    })
}

multiplyButton.addEventListener('click', multiplication);

// Division Function

function division() {
    if (resultScreen.value !== '') {
        firstNumber = parseFloat(resultScreen.value);
    } else {
        return;
    }

    resultScreen.value = '';

    equalToButton.addEventListener('click', () => {
        secondNumber = parseFloat(resultScreen.value);

        if (!isNaN(firstNumber / secondNumber)) {
            resultScreen.value = firstNumber / secondNumber;
        } else {
            resultScreen.value = 'Syntax Error';
        }
    })
}

divisionButton.addEventListener('click', division);

console.log(parseFloat(''));



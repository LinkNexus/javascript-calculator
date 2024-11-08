const resultScreen = document.querySelector('.result'),
    operationScreen = document.querySelector('.operation'),
    deleteButton = document.querySelector('.delete'),
    clearButton = document.querySelector('.clear'),
    inputButtons = document.querySelectorAll('.input'),
    plusOrMinusButton = document.querySelector('.plus-or-minus'),
    squareRootButton = document.querySelector('.square-root'),
    equalToButton = document.querySelector('.equal-to');

for (const inputButton of inputButtons) {
    inputButton.addEventListener('click', function () {
        resultScreen.value += inputButton.innerText;
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

function calculate() {
    if (resultScreen.value === '') {
        return;
    }

    const operation = resultScreen.value.replace('×', '*');
    try {
        const result = Function(`return ${operation}`)();

        if (result === Infinity || isNaN(result) || result === -Infinity) {
            resultScreen.value = 'Math Error';
            return;
        }

        resultScreen.value = result;
        operationScreen.textContent = operation.replace('*','×');
    } catch (error) {
        resultScreen.value = 'Syntax Error';
    }
}

equalToButton.addEventListener('click', calculate);
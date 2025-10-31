// JavaScript functionality for the calculator

document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let operator = '';
    let previousInput = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {

            const action = this.dataset.action;

            if (action) {
                switch (action) {
                    case 'clear':
                        currentInput = '';
                        previousInput = '';
                        operator = '';
                        break;
                    case 'equals':
                        if (previousInput && currentInput) {
                            currentInput = String(calculate(previousInput, operator, currentInput));
                            operator = '';
                            previousInput = '';
                        }
                        break;
                    default:
                        if (currentInput) {
                            previousInput = currentInput;
                            operator = action;
                            currentInput = '';
                        }
                }
            } else {
                currentInput += this.textContent;
            }

            updateScreen(currentInput);
        });
    });

    function updateScreen(value) {
        screen.value = value;
    }

    function calculate(first, operator, second) {
        first = parseFloat(first);
        second = parseFloat(second);
        switch (operator) {
            case 'add':
                return first + second;
            case 'subtract':
                return first - second;
            case 'multiply':
                return first * second;
            case 'divide':
                return first / second;
            default:
                return second;
        }
    }
});
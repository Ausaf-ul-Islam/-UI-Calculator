window.onload = function () {
    var display = document.getElementById('display');
    var buttons = document.querySelectorAll('.btn');
    var currentInput = '';
    var operatorClicked = false;
    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var value = event.target.value;
            if (value === 'C') {
                currentInput = '';
                display.value = '';
            }
            else if (value === '=') {
                try {
                    currentInput = eval(currentInput); // Evaluate the expression
                    display.value = currentInput;
                }
                catch (error) {
                    display.value = 'Error';
                }
            }
            else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
};

window.onload = () => {
    const display = document.getElementById('display') as HTMLInputElement;
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '';
    let operatorClicked = false;

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const value = (event.target as HTMLButtonElement).value;

            if (value === 'C') {
                currentInput = '';
                display.value = '';
            } else if (value === '=') {
                try {
                    currentInput = eval(currentInput);  // Evaluate the expression
                    display.value = currentInput;
                } catch (error) {
                    display.value = 'Error';
                }
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
}

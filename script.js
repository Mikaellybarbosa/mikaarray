function calculateSum() {
    const numbersInput = document.getElementById('numbers');
    const numbersArray = numbersInput.value.split(',').map(Number);

    const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const resultElement = document.getElementById('result');
    resultElement.textContent = `A soma dos números é: ${sum}`;
  }
const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');

generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();

    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');

        if (number <= 10) {
            numberElement.classList.add('color-1');
        } else if (number <= 20) {
            numberElement.classList.add('color-2');
        } else if (number <= 30) {
            numberElement.classList.add('color-3');
        } else if (number <= 40) {
            numberElement.classList.add('color-4');
        } else {
            numberElement.classList.add('color-5');
        }

        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);
    });
});

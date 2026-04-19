
const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.querySelector('.lotto-numbers');

generateBtn.addEventListener('click', () => {
    const numbers = generateLottoNumbers();
    displayLottoNumbers(numbers);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayLottoNumbers(numbers) {
    lottoNumbersContainer.innerHTML = '';
    numbers.forEach(number => {
        const lottoNumber = document.createElement('div');
        lottoNumber.classList.add('lotto-number');
        lottoNumber.textContent = number;
        lottoNumber.classList.add(getColorClass(number));
        lottoNumbersContainer.appendChild(lottoNumber);
    });
}

function getColorClass(number) {
    if (number <= 10) return 'color-1';
    if (number <= 20) return 'color-2';
    if (number <= 30) return 'color-3';
    if (number <= 40) return 'color-4';
    return 'color-5';
}

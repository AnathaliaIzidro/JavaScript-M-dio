function romanToDecimal(roman) {
    const romanNumerals = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
    let decimalValue = 0;

    for (let i = 0; i < roman.length; i++) {
        const current = romanNumerals[roman[i]];
        const next = romanNumerals[roman[i + 1]];

        if (next && current < next) {
            decimalValue -= current;
        } else {
            decimalValue += current;
        }
    }

    document.getElementById('roman-input').innerText = `O valor decimal de ${roman} é ${decimalValue}.`;
    return decimalValue;
}

function convertRoman() {
    const romanInput = prompt("Digite um número em algarismos romanos:");
    const result = romanToDecimal(romanInput);
    document.getElementById('result').textContent = `O valor decimal é: ${result}`;
}

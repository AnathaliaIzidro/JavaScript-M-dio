function multiplicativePersistence(num) {
    let count = 0;
    while (num >= 10) {
        num = num.toString().split('').reduce((acc, digit) => acc * digit, 1);
        count++;
    }
    return count;
}

function calculatePersistence() {
    const number = parseInt(document.getElementById('number-input').value, 10);
    const result = multiplicativePersistence(number);
    document.getElementById('persistence-result').textContent = `Persistência multiplicativa: ${result}`;
}

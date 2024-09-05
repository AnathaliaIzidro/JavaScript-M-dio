function insertWord() {
    const sentence = document.getElementById('sentence-input').value;
    const word = document.getElementById('word-input').value;
    const indices = document.getElementById('index-input').value.split(',').map(Number);
    
    let result = sentence;
    indices.forEach(index => {
        if (index >= 0 && index <= result.length) {
            result = result.slice(0, index) + word + result.slice(index);
        }
    });
    
    document.getElementById('corrected-sentence').textContent = `Frase corrigida: ${result}`;
}

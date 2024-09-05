function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            return String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            return String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        }
        return char;
    }).join('');
}

function decodeMessage() {
    const message = document.getElementById('message-input').value;
    const shift = parseInt(document.getElementById('shift-input').value, 10);
    const decodedMessage = caesarCipher(message, shift);
    document.getElementById('decoded-message').textContent = `Mensagem decodificada: ${decodedMessage}`;
}

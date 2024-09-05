function generateAllPasswords(chars, length, prefix = '') {
    if (length === 0) {
        return [prefix];
    }
    
    let passwords = [];
    for (let char of chars) {
        passwords = passwords.concat(generateAllPasswords(chars, length - 1, prefix + char));
    }
    return passwords;
}

function generatePasswords() {
    const chars = document.getElementById('characters-input').value;
    const length = parseInt(document.getElementById('length-input').value, 10);
    
    const passwords = generateAllPasswords(chars, length);
    document.getElementById('passwords').textContent = `Senhas possíveis: ${passwords.join(', ')}`;
}

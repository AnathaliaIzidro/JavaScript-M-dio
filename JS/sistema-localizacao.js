function calculateDistance() {
    const x = parseFloat(document.getElementById('x-input').value);
    const y = parseFloat(document.getElementById('y-input').value);
    const originX = parseFloat(document.getElementById('origin-x-input').value);
    const originY = parseFloat(document.getElementById('origin-y-input').value);
    
    const distance = Math.sqrt((x - originX) ** 2 + (y - originY) ** 2);
    document.getElementById('distance-result').textContent = `Distância calculada: ${distance}`;
}

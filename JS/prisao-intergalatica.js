function monitorPrisoners() {
    const n = parseInt(document.getElementById('n-input').value, 10);
    const m = parseInt(document.getElementById('m-input').value, 10);
    const s = parseInt(document.getElementById('s-input').value, 10);
    
    const lastPrisoner = (s - 1 + m - 1) % n + 1;
    document.getElementById('prisoner-result').textContent = `Último prisioneiro: ${lastPrisoner}`;
}

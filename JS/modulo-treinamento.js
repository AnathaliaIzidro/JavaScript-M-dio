class QuadraticEquation {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    solve() {
        const delta = this.b ** 2 - 4 * this.a * this.c;
        if (delta < 0) {
            return 'Sem raízes reais';
        } else if (delta === 0) {
            const root = -this.b / (2 * this.a);
            return `Raiz única: ${root}`;
        } else {
            const root1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
            const root2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
            return `Raízes: ${root1} e ${root2}`;
        }
    }
}

function solveQuadratic() {
    const a = parseFloat(document.getElementById('a-input').value);
    const b = parseFloat(document.getElementById('b-input').value);
    const c = parseFloat(document.getElementById('c-input').value);
    
    const equation = new QuadraticEquation(a, b, c);
    const solution = equation.solve();
    
    document.getElementById('solution').textContent = solution;
}

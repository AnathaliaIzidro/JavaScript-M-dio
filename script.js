function loadScript(scriptName) {
    const script = document.createElement('script');
    script.src = scriptName;
    document.body.appendChild(script);
}

document.getElementById('desafio15').addEventListener('click', () => loadScript('codigo-romano1.js'));
document.getElementById('desafio16').addEventListener('click', () => loadScript('codigo-romano2.js'));
document.getElementById('desafio17').addEventListener('click', () => loadScript('relatorio-missao.js'));
document.getElementById('desafio18').addEventListener('click', () => loadScript('modulo-treinamento.js'));
document.getElementById('desafio19').addEventListener('click', () => loadScript('viagens-espaciais2.js'));
document.getElementById('desafio20').addEventListener('click', () => loadScript('quebrando-senha.js'));
document.getElementById('desafio21').addEventListener('click', () => loadScript('sistema-localizacao.js'));
document.getElementById('desafio22').addEventListener('click', () => loadScript('prisao-intergalatica.js'));

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

const themeToggleButton = document.createElement('button');
themeToggleButton.textContent = 'Toggle Dark Mode';
themeToggleButton.style.position = 'fixed';
themeToggleButton.style.bottom = '20px';
themeToggleButton.style.right = '20px';
themeToggleButton.style.padding = '10px';
themeToggleButton.style.cursor = 'pointer';
themeToggleButton.addEventListener('click', toggleDarkMode);
document.body.appendChild(themeToggleButton);

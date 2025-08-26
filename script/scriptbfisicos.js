// pega a referência da tela e de todos os botões
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

// guarda a expressão atual
let expression = '';

// função que atualiza a tela
function updateDisplay(text) {
    display.innerText = text || '0';
};

// função para validar a expressão
function isValidExpression(expr) {
    return /^[0-9+\-*/().\s]+$/.test(expr);
};

// executa ação ou valor
function handleInput(input, action) {
    switch (action) {
        case 'clear':
            expression = '';
            updateDisplay('');
            break;

        case 'delete':
            expression = expression.slice(0, -1); // remove o último caractere
            updateDisplay(expression);
            break;

        case 'equals':
            try {
                if (!isValidExpression(expression)) throw new Error('Expressão Inválida');
                const result = eval(expression);
                expression = String(result);
                updateDisplay(expression);
            } catch {
                updateDisplay('Erro');
                expression = '';
            }
            break;

        default: // quando for número, ponto ou operador
            if (input) {
                expression += input;
                updateDisplay(expression);
            }
    }
}

// clique nos botões
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.dataset.value;
        const action = btn.dataset.action;
        handleInput(val, action);
    })
})

// digitação no teclado físico
document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (!isNaN(key)) { // números
        handleInput(key);    
    } else if (['+','-','*','/','.','(',')'].includes(key)) { // operadores
        handleInput(key);
    } else if (key === 'Enter') { // igual
        handleInput(null, 'equals');
    } else if (key === 'Backspace') { // delete
        handleInput(null, 'delete');
    } else if (key === 'Escape') { // clear 
        handleInput(null, 'clear');
    }
})
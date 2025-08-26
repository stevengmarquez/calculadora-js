//pega a referência da tela e de todos os botões
const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');
const buttons = document.querySelectorAll('.btn');

//guarda a expressão atual (o que o usuário digitou)
let expression = '';
let lastCalculation = '';

//função que atualiza a tela
function updateDisplay(text) {
    display.innerText = text || '0';
}

//função que atualiza o histórico
function updateHistory(text) {
    historyDisplay.innerText = text || '';
}

//função para validar expressão(só números, operadores e parenteses)
function isValidExpression(expr) {
    return /^[0-9+\-*/().\s]+$/.test(expr);
}

// evento de click para cada botão
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.dataset.value; // ex: "7", "+", "*"
        const action =btn.dataset.action; // ex: "clear", "delete", "equals"

        switch (action) {
            case 'clear':
                expression = '';
                updateDisplay('');
                updateDisplay('');
                break;

            case 'delete':
                expression = expression.slice(0, -1);
                updateDisplay(expression);
                break;

            case 'equals':
                try {
                    if (!isValidExpression(expression)) {
                        throw new Error('Expressão Inválida');
                    }
                    const result = eval(expression); //cuidado com eval
                    lastCalculation = `${expression} = ${result}`;
                    updateHistory(lastCalculation);
                    expression = String(result);
                    updateDisplay(expression);
                } catch {
                    updateDisplay('Erro');
                    expression = '';
                }
                break;

            default:
                if (val) {
                    expression += val;
                    updateDisplay(expression);
                }
        }
    });
});

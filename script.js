//pega a referência da tela e de todos os botões
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

//guarda a expressão atual (o que o usuário digitou)
let expression = '';

//função que atualiza a tela
function updateDisplay(text) {
    display.innerText = text;
}

//adiciona um evento de clique para cada botão
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const val = btn.dataset.value; //valor (ex. "7", "+", "*")
        const action = btn.dataset.action; // ação (ex. "clear", "delete", "equals")

        if (action === 'clear') {
            expression = '';
            updateDisplay('0');
            return;
        }

        if (action === 'delete') {
            expression = expression.slice(0, -1); //remove último caractere
            updateDisplay(expression || '0'); // mostra 0 se vazio
            return;
        }

        if (action === 'equals') {
            try {
                //só permite números, operadores básicos, parênteses e pontos
                if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
                    throw new Error('Expressão inválida');
                }
                //eval executa a expressão matemática (ex. "2+3*4")
                const result = eval(expression);
                expression = String(result); //converte o resultado para string para permitir cuntinuar calculando
                updateDisplay(expression);
            } catch (e) {
                updateDisplay('Erro');
                expression = '';
            }
            return;
        }

        //se veio um valor (númer, operador ou ponto), acrescenta à expressão
        if (val) {
            expression += val;
            updateDisplay(expression)
        }
    });
});
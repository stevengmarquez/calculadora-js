// // 1. Digitar os números que você quer multiplicar e transforma as variaveis de string para Number
// let multiplicar = Number(prompt("Digite o número para multiplicar:"));
// let multiplicando = Number(prompt("Digite o número a ser multiplicado:"));

// // 2. Variável que mostra o resultado
// const produto = multiplicar * multiplicando;

// // 3. Mensagem da operação toda
// console.log(`O resultado de ${multiplicar} x ${multiplicando} = ${produto}`);

// criar título da página
const titulo = document.createElement("h1");
titulo.textContent = "Calculadora de Multiplicação";
document.body.appendChild(titulo);

// pedir números ao usuário
let multiplicar = Number(prompt("Digite o número para multiplicar:"));
let multiplicando = Number(prompt("Digite o número a ser multiplicado:"));

// calcular o produto
const produto = multiplicar * multiplicando;

// criar páragrafo para mostrar a operação
const resultado = document.createElement("p");
resultado.textContent = `O resultado de ${multiplicar} x ${multiplicando} = ${produto}`;
document.body.appendChild(resultado);

// criar um botão para refazer a operação
const botao = document.createElement("button");
botao.textContent = "Calcular de novo";
document.body.appendChild(botao);

// evento do botão
botao.addEventListener("click", () => {
    location.reload();  // recarregar a página para digitar novos números
});
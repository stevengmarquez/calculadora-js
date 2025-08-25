// Pede um número ao usuário
let numero = Number(prompt("Digite um número:"));
let max = Number(prompt("Digite até qual número quer a tabuada:"))

// laço de 1 até 10
for (let i = 1; i <= max; i++) {
    // mostra o resultado da multiplicação
    console.log(`${numero} x ${i} = ${numero * i}`);
}
